import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/sonidep_logo.png.asset.json";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — SONIDEP SA" },
      {
        name: "description",
        content:
          "Créée en 1977, la SONIDEP est une société 100 % publique de l'État du Niger, basée à Niamey, devenue Société Nigérienne de Pétrole en 2020.",
      },
      { property: "og:title", content: "À propos — SONIDEP SA" },
      {
        property: "og:description",
        content: "Histoire, statut et identité de la Société Nigérienne de Pétrole.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const TIMELINE = [
  {
    year: "1977",
    title: "Création de la SONIDEP",
    text: "Naissance de la Société Nigérienne des Produits Pétroliers, chargée d'organiser l'approvisionnement du pays.",
  },
  {
    year: "2020",
    title: "Société Nigérienne de Pétrole",
    text: "La société prend officiellement le nom de Société Nigérienne de Pétrole (SONIDEP SA).",
  },
];

const IDENTITY = [
  { label: "Dénomination", value: "Société Nigérienne de Pétrole (SONIDEP SA)" },
  { label: "Ancien nom", value: "Société Nigérienne des Produits Pétroliers" },
  { label: "Création", value: "1977" },
  { label: "Actionnaire", value: "État du Niger (100 % public)" },
  { label: "Siège", value: "Niamey, Niger" },
  { label: "Secteur", value: "Pétrole et hydrocarbures" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Au service de l'énergie du Niger depuis 1977"
        intro="Société d'État, la SONIDEP veille à ce que le pays dispose en permanence des produits pétroliers dont il a besoin."
      />

      <section className="py-20">
        <div className="container-site grid gap-14 md:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="eyebrow text-primary">Notre identité</div>
            <h2 className="mt-3 text-3xl font-extrabold text-primary-deep">La SONIDEP en bref</h2>
            <dl className="mt-8 divide-y divide-border rounded-lg border border-border bg-card shadow-card">
              {IDENTITY.map((row) => (
                <div key={row.label} className="grid grid-cols-[9rem_1fr] gap-4 px-6 py-4">
                  <dt className="text-sm font-semibold text-muted-foreground">{row.label}</dt>
                  <dd className="font-semibold text-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className="eyebrow text-primary">Repères</div>
            <h2 className="mt-3 text-3xl font-extrabold text-primary-deep">Notre histoire</h2>
            <ol className="mt-8 space-y-0 border-l-2 border-primary">
              {TIMELINE.map((item) => (
                <li key={item.year} className="relative pb-10 pl-8 last:pb-0">
                  <span className="absolute -left-[9px] top-1.5 size-4 rounded-full border-4 border-background bg-primary" />
                  <div className="font-display text-3xl font-black text-primary">{item.year}</div>
                  <h3 className="mt-1 text-lg font-bold text-primary-deep">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.text}</p>
                </li>
              ))}
            </ol>

            <div className="mt-12 flex items-center gap-6 rounded-lg bg-primary-soft p-6">
              <img src={logo.url} alt="Logo SONIDEP" width={60} height={68} className="h-16 w-auto" />
              <p className="text-sm text-secondary-foreground">
                <strong>Mission principale :</strong> assurer l'approvisionnement, le stockage et la
                distribution des produits pétroliers au Niger.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
