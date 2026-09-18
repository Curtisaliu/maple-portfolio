import SectionWindow from "@/components/SectionWindow";

export default function AboutSection() {
  return(
    <section id="about">
      <SectionWindow title="Character History">
        <div className="flex flex-col gap-8">

          <div>
            <h3 className="text-xl font-semibold text-[var(--accent-green)]">
              Background
            </h3>

            <p className="mt-3 max-w-4xl leading-relaxed text-gray-600">
              Hello, I&apos;m Curtis Liu. I was born and raised in San Francisco
              and developed an interest in technology that eventually grew into
              a career spanning cloud engineering and software development.
            </p>

            <p className="mt-3 max-w-4xl leading-relaxed text-gray-600">
              I enjoy understanding how systems work, building things from the
              ground up, and continuously expanding beyond the technologies I
              use in my day-to-day work. Outside of my professional work, I
              spend a lot of my time learning through personal projects,
              programming, and experimenting with game development.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--panel-border)] bg-white/40 p-5">
            <h3 className="text-xl font-semibold text-[var(--accent-brown)]">
              Work History
            </h3>

            <p className="mt-3 max-w-4xl leading-relaxed text-gray-600">
              My professional experience is centered around cloud engineering,
              AWS, automation, and customer experience technologies. Much of my
              work has involved designing and implementing cloud-based contact
              center solutions using technologies such as Amazon Connect,
              Lambda, Lex, APIs, and system integrations.
            </p>

            <p className="mt-3 max-w-4xl leading-relaxed text-gray-600">
              Over time, I&apos;ve become increasingly interested in the software
              engineering side of those systems as well — not just configuring
              infrastructure, but understanding and building the applications,
              integrations, and automation that sit around it.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--panel-border)] bg-white/40 p-5">
            <h3 className="text-xl font-semibold text-[var(--accent-brown)]">
              Current Focus &amp; Goals
            </h3>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
              <li>
                Building full-stack applications and strengthening my
                TypeScript and software development skills
              </li>

              <li>
                Deepening my knowledge of AWS architecture and cloud-native
                application design
              </li>

              <li>
                Learning Terraform and infrastructure as code through
                hands-on projects
              </li>

              <li>
                Continuing to learn C# and explore game development as a
                long-term hobby
              </li>

              <li>
                Building projects that combine cloud infrastructure,
                automation, and software engineering
              </li>
            </ul>
          </div>

        </div>
      </SectionWindow>
    </section>
  );
}