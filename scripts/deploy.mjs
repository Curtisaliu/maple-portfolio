// Builds the static site, uploads it to S3, and invalidates the CloudFront cache.
//
// Usage:
//   npm run deploy               deploy for real
//   npm run deploy -- --dry-run  show what would be uploaded and deleted
//
// Reads DEPLOY_BUCKET and DEPLOY_DISTRIBUTION_ID from .env.deploy (git-ignored).

import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";

const SITE_URL = "https://curtisaliu.dev";
const ENV_FILE = ".env.deploy";

// Hashed build assets never change, so browsers can cache them forever.
// Everything else (HTML, favicon) is revalidated so updates show up right away.
const CACHE_IMMUTABLE = "public,max-age=31536000,immutable";
const CACHE_REVALIDATE = "public,max-age=0,must-revalidate";

const dryRun = process.argv.includes("--dry-run");

function run(command, args, { capture = false } = {}) {
  console.log(`\n> ${command} ${args.join(" ")}`);

  return execFileSync(command, args, {
    encoding: "utf8",
    stdio: capture ? ["inherit", "pipe", "inherit"] : "inherit",
    // npm is a .cmd script on Windows and needs a shell to run
    shell: command === "npm" && process.platform === "win32",
  });
}

function git(args) {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}

function fail(message) {
  console.error(`\nDeploy stopped: ${message}`);
  process.exit(1);
}

// 1. Load settings
if (!existsSync(ENV_FILE)) {
  fail(`${ENV_FILE} not found. Create it with DEPLOY_BUCKET and DEPLOY_DISTRIBUTION_ID.`);
}

process.loadEnvFile(ENV_FILE);

const { DEPLOY_BUCKET: bucket, DEPLOY_DISTRIBUTION_ID: distributionId } =
  process.env;

if (!bucket || !distributionId) {
  fail(`${ENV_FILE} must set DEPLOY_BUCKET and DEPLOY_DISTRIBUTION_ID.`);
}

// 2. Only deploy committed code that is already on GitHub
if (git(["rev-parse", "--abbrev-ref", "HEAD"]) !== "main") {
  fail("switch to the main branch first.");
}

if (git(["status", "--porcelain"]) !== "") {
  fail("you have uncommitted changes. Commit or stash them first.");
}

git(["fetch", "--quiet", "origin", "main"]);

if (git(["rev-parse", "HEAD"]) !== git(["rev-parse", "origin/main"])) {
  fail("local main does not match GitHub. Pull or push first.");
}

const commit = git(["log", "-1", "--format=%h %s"]);
console.log(`Deploying ${commit}${dryRun ? " (dry run)" : ""}`);

// 3. Build
run("npm", ["run", "build"]);

// 4. Upload
const target = `s3://${bucket}`;
const dryRunFlag = dryRun ? ["--dryrun"] : [];

// New hashed assets first, so new pages never reference missing files
run("aws", [
  "s3", "sync", "out/_next/static", `${target}/_next/static`,
  "--cache-control", CACHE_IMMUTABLE,
  ...dryRunFlag,
]);

// Then pages and other files, removing anything no longer in the build
run("aws", [
  "s3", "sync", "out", target,
  "--exclude", "_next/static/*",
  "--cache-control", CACHE_REVALIDATE,
  "--delete",
  ...dryRunFlag,
]);

// Finally remove hashed assets the new pages no longer use
run("aws", [
  "s3", "sync", "out/_next/static", `${target}/_next/static`,
  "--cache-control", CACHE_IMMUTABLE,
  "--delete",
  ...dryRunFlag,
]);

if (dryRun) {
  console.log("\nDry run complete. Nothing was uploaded, deleted, or invalidated.");
  process.exit(0);
}

// 5. Clear the CloudFront cache and wait for it to finish
const invalidationId = run(
  "aws",
  [
    "cloudfront", "create-invalidation",
    "--distribution-id", distributionId,
    "--paths", "/*",
    "--query", "Invalidation.Id",
    "--output", "text",
  ],
  { capture: true },
).trim();

console.log(`Invalidation ${invalidationId} created. Waiting for it to finish...`);

run("aws", [
  "cloudfront", "wait", "invalidation-completed",
  "--distribution-id", distributionId,
  "--id", invalidationId,
]);

// 6. Check that the live site responds
for (const path of ["/", "/about/", "/skills/", "/certifications/", "/projects/", "/contact/"]) {
  const response = await fetch(`${SITE_URL}${path}`);
  console.log(`${response.status} ${SITE_URL}${path}`);

  if (!response.ok) {
    fail(`${path} returned ${response.status}.`);
  }
}

console.log(`\nDeployed ${commit} to ${SITE_URL}`);
