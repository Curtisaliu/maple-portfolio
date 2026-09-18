import AboutSection from "@/components/AboutSection";

export default function AboutPage() {
  return(
    <main className="page-shell flex min-h-screen flex-col gap-8">
      <header>
        <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
          Character Info
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          About Me
        </h1>

        <div className="page-title-accent"></div>

        <p className="mt-2 max-w-2xl text-gray-600">
          A little background on who I am, what I work on, and what I am
          currently learning and building.
        </p>
      </header>

      <AboutSection />
    </main>
  );
}