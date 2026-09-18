import ProjectsSection from "@/components/ProjectsSection";
import { projectCategories } from "@/data/portfolioData";

export default function ProjectsPage() {
  return(
    <main className="page-shell flex min-h-screen flex-col gap-8">
      <header>
        <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
          Quest Log
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Projects
        </h1>

        <div className="page-title-accent"></div>

        <p className="mt-2 max-w-2xl text-gray-600">
          A collection of projects I am building to improve my software,
          cloud, and infrastructure skills.
        </p>
      </header>

      <ProjectsSection categories={projectCategories} />
    </main>
  );
}