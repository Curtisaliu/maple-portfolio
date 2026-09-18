type ProjectCardProps = {
  title: string;
  status: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export default function ProjectCard({
  title,
  status,
  description,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
    const statusStyle =
      status === "Quest In Progress"
        ? "bg-green-100 text-green-700"
        : "bg-gray-100 text-gray-600";

    return(
      <article className="panel p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${statusStyle}`}
            >
              {status}
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              {title}
            </h3>
          </div>
        </div>

        <p className="mt-3 text-gray-600">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              className="nav-button rounded-full px-4 py-2 font-medium"
            >
              View GitHub
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              className="nav-button rounded-full px-4 py-2 font-medium"
            >
              View Project
            </a>
          )}
        </div>
  </article>
  );
}