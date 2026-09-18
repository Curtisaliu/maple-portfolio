type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  const totalExpBlocks = 12;
  const filledExpBlocks = 10;

  return(
    <section className="panel overflow-hidden shadow-sm">
      <div className="hero-header px-6 py-3">
        <p className="text-sm font-semibold uppercase tracking-widest">
          Character Profile
        </p>
      </div>

      <div className="p-8">
        <h1 className="text-4xl font-bold">
          {title}
        </h1>

        <p className="mt-2 text-lg text-gray-600">
          {subtitle}
        </p>

        <div className="mt-6 flex gap-8">
          <div>
            <p className="text-sm text-gray-500">
              Level
            </p>

            <p className="text-xl font-semibold">
              28
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Class
            </p>

            <p className="text-xl font-semibold">
              Engineer
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">
              Experience
            </p>

            <p className="text-sm text-gray-500">
              Level 29
            </p>
          </div>

          <div className="mt-3 flex gap-1">
            {Array.from({ length: totalExpBlocks }).map((_, index) => (
              <div
                key={index}
                className={`h-4 flex-1 rounded-sm ${
                  index < filledExpBlocks
                    ? "bg-[var(--accent-green)]"
                    : "bg-gray-200"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}