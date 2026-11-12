import CertificationsSection from "@/components/CertificationsSection";
import { certificationCategories } from "@/data/portfolioData";

export default function CertificationsPage() {
  return(
    <main className="page-shell flex min-h-screen flex-col gap-8">
      <header>
        <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
          Medals
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Certifications
        </h1>

        <div className="page-title-accent"></div>

        <p className="mt-2 max-w-2xl text-gray-600">
          Certifications I have earned across cloud platforms and contact
          center technologies.
        </p>
      </header>

      <CertificationsSection categories={certificationCategories} />
    </main>
  );
}
