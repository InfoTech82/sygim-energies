export default function Section({
  title,
  subtitle,
  children,
}: Readonly<{ title: string; subtitle?: string; children: React.ReactNode }>) {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <div className="max-w-3xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{title}</h2>
        {subtitle ? (
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      <div className="mt-6 sm:mt-8">{children}</div>
    </section>
  );
}


