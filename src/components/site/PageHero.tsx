export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={image}
        alt=""
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="container-site relative py-20 md:py-28">
        <div className="eyebrow text-on-dark-muted">{eyebrow}</div>
        <h1 className="mt-3 max-w-2xl text-4xl font-extrabold text-on-dark md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-xl text-lg text-on-dark-muted">{intro}</p>
      </div>
    </section>
  );
}
