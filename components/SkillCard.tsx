type SkillCardProps = {
  name: string;
  level: number;
};

export default function SkillCard({
  name,
  level,
}: SkillCardProps) {
  const totalBlocks = 10;

  return(
    <div className="panel p-4">
      <div className="flex items-center justify-between gap-4">
        <h4 className="font-semibold">
          {name}
        </h4>

        <p className="text-sm text-gray-500">
          {level}/10
        </p>
      </div>

      <div className="mt-4 flex gap-1">
        {Array.from({ length: totalBlocks }).map((_, index) => (
          <div
            key={index}
            className={`h-3 flex-1 rounded-sm ${
              index < level
                ? "bg-[var(--accent-gold)]"
                : "bg-gray-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}