type CertificationCardProps = {
  name: string;
  issuer: string;
  issued?: string;
  expires?: string;
  credentialUrl?: string;
};

export default function CertificationCard({
  name,
  issuer,
  issued,
  expires,
  credentialUrl,
}: CertificationCardProps) {
  return(
    <article className="panel flex gap-4 p-5">
      <div
        aria-hidden="true"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent-gold)] bg-[var(--accent-gold)]/20 text-2xl"
      >
        🏅
      </div>

      <div className="flex flex-col">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-brown)]">
          {issuer}
        </p>

        <h3 className="mt-1 text-lg font-semibold">
          {name}
        </h3>

        {(issued || expires) && (
          <p className="mt-1 text-sm text-gray-500">
            {issued && `Earned ${issued}`}
            {issued && expires && " · "}
            {expires && `Expires ${expires}`}
          </p>
        )}

        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-button mt-3 self-start rounded-full px-4 py-1 text-sm font-medium"
          >
            Verify Credential
          </a>
        )}
      </div>
    </article>
  );
}
