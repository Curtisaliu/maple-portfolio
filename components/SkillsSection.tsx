import SkillCard from "@/components/SkillCard"
import SectionWindow from "@/components/SectionWindow"
import type { SkillCategory } from "@/types/portfolio"

type SkillsSectionProps = {
  categories: SkillCategory[];
};

export default function SkillsSection({
  categories,
}: SkillsSectionProps) {
  return(
    <SectionWindow title="Skills">
      <div className="flex flex-col gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="rounded-xl border border-[var(--panel-border)] bg-white/40 p-5"
          >
            <h3 className="mb-4 text-xl font-semibold text-[var(--accent-green)]">
              {category.name}
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {category.skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWindow>
  );
}