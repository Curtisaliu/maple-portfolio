import Hero from "@/components/Hero";
import Link from "next/link";

const destinations = [
  {
    title: "About Me",
    label: "Character Info",
    description: "Learn more about my background and what I am building.",
    href: "/about",
    accent: "text-orange-600",
    symbol: "🍄",
  },
  {
    title: "Skills",
    label: "Skill Window",
    description: "Explore the technologies and tools I work with.",
    href: "/skills",
    accent: "text-green-700",
    symbol: "🌿",
  },
  {
    title: "Quest Log",
    label: "Projects",
    description: "View my active, completed, and planned projects.",
    href: "/projects",
    accent: "text-amber-600",
    symbol: "📜",
  },
  {
    title: "Contact",
    label: "Connect",
    description: "Find ways to connect with me.",
    href: "/contact",
    accent: "text-sky-600",
    symbol: "✉️",
  },
];

export default function Home() {
  return(
    <main className="henesys-page relative min-h-screen">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-[28rem] hidden select-none text-5xl xl:block"
      >
        🍄
      </span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-[42rem] hidden select-none text-5xl xl:block"
      >
        🟢
      </span>

      <div className="page-shell flex flex-col gap-12">
        <Hero
          title="Curtis Liu"
          subtitle="Cloud Engineer | Software Developer | AWS & Automation | Game Dev Hobbyist"
        />

        <section className="panel p-6">
          <h2 className="text-2xl font-bold">
            Welcome
          </h2>

          <p className="mt-3 text-gray-600">
            Explore my work through a MapleStory-inspired developer portfolio.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {destinations.map((destination) => (
              <Link
                key={destination.href}
                href={destination.href}
                className="panel p-5 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">
                    {destination.symbol}
                  </span>

                  <p
                    className={`text-xs font-semibold uppercase tracking-widest ${destination.accent}`}
                  >
                    {destination.label}
                  </p>
                </div>

                <h3 className="mt-2 text-lg font-semibold">
                  {destination.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {destination.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}