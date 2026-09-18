import SectionWindow from "@/components/SectionWindow";

export default function ContactSection() {
  return(
    <section id="contact">
      <SectionWindow title="Contact">
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-semibold text-[var(--accent-green)]">
              Let&apos;s Connect
            </h3>

            <p className="mt-3 max-w-2xl text-gray-600">
              If you want to connect, collaborate, or take a look at more of
              my work, you can find me through the links below.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--panel-border)] bg-white/40 p-5">
            <h3 className="text-lg font-semibold text-[var(--accent-brown)]">
              Links
            </h3>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/curtis-liu-944bb6172/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-button rounded-full px-4 py-2 font-medium"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Curtisaliu"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-button rounded-full px-4 py-2 font-medium"
              >
                GitHub
              </a>

              <a
                href="mailto:Curtisaliu@gmail.com"
                className="nav-button rounded-full px-4 py-2 font-medium"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </SectionWindow>
    </section>
  );
}