type SectionWindowProps = {
    title: string;
    children: React.ReactNode;
};

export default function SectionWindow({
    title,
    children,
}: SectionWindowProps) {
    return (
        <section className="panel overflow-hidden">
            <div className="section-header px-6 py-3">
                <h2 className="text-lg font-semibold">{title}</h2>
            </div>

            <div className="p-6">
                {children}
            </div>
        </section>
    )
}