export default function Section({
  title,
  subtitle,
  children,
}: Readonly<{ title: string; subtitle?: string; children: React.ReactNode }>) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        {subtitle ? (
          <p className="mt-2 text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}


