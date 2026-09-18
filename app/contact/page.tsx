import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return(
    <main className="page-shell flex min-h-screen flex-col gap-8">
      <header>
        <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
          Contact
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Let&apos;s Connect
        </h1>

        <div className="page-title-accent"></div>

        <p className="mt-2 max-w-2xl text-gray-600">
          Find me on GitHub or LinkedIn if you want to connect, collaborate,
          or check out more of my work.
        </p>
      </header>

      <ContactSection />
    </main>
  );
}