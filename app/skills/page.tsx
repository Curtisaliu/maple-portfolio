import SkillsSection from "@/components/SkillsSection";
import { skillCategories } from "@/data/portfolioData";

export default function SkillsPage() {
  return(
    <main className="page-shell flex min-h-screen flex-col gap-8">
      <header>
        <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
          Skill Window
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Skills
        </h1>

        <div className="page-title-accent"></div>

        <p className="mt-2 max-w-2xl text-gray-600">
          Technologies and tools I use across cloud engineering,
          software development, and infrastructure work.
        </p>
      </header>

      <SkillsSection categories={skillCategories} />
    </main>
  );
}