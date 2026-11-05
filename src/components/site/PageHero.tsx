export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden bg-band">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="container-site relative py-20 md:py-24">
        <div className="eyebrow text-on-dark-muted">{eyebrow}</div>
        <h1 className="mt-3 max-w-2xl text-4xl font-extrabold text-on-dark md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-xl text-lg text-on-dark-muted">{intro}</p>
      </div>
    </section>
  );
}
