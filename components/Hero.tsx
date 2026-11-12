import CharacterStats from "@/components/CharacterStats";
import { getToday } from "@/lib/characterStats";

type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
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

        <CharacterStats builtOn={getToday()} />
      </div>
    </section>
  );
}
