import ProjectCard from "@/components/ProjectCard";
import SectionWindow from "@/components/SectionWindow"
import type { ProjectCategory } from "@/types/portfolio";

type ProjectsSectionProps = {
  categories: ProjectCategory[];
};

export default function ProjectsSection({
  categories,
}: ProjectsSectionProps) {
  return(
    <SectionWindow title="Quest Log">
      <div className="flex flex-col gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="rounded-xl border border-[var(--panel-border)] bg-white/40 p-5"
          >
            <h3 className="mb-4 text-xl font-semibold text-[var(--accent-brown)]">
              {category.name}
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {category.projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  status={project.status}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWindow>
  );
}