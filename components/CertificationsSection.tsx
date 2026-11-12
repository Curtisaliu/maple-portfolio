import CertificationCard from "@/components/CertificationCard";
import SectionWindow from "@/components/SectionWindow";
import type { CertificationCategory } from "@/types/portfolio";

type CertificationsSectionProps = {
  categories: CertificationCategory[];
};

export default function CertificationsSection({
  categories,
}: CertificationsSectionProps) {
  return(
    <SectionWindow title="Medals">
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
              {category.certifications.map((certification) => (
                <CertificationCard
                  key={certification.name}
                  name={certification.name}
                  issuer={certification.issuer}
                  issued={certification.issued}
                  expires={certification.expires}
                  credentialUrl={certification.credentialUrl}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWindow>
  );
}
