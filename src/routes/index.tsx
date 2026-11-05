import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Droplets, Landmark, MapPin, Ship, Truck, Warehouse } from "lucide-react";

import logo from "@/assets/sonidep_logo.png.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SONIDEP SA — Société Nigérienne de Pétrole" },
      {
        name: "description",
        content:
          "Depuis 1977, la SONIDEP sécurise l'approvisionnement du Niger en produits pétroliers : importation, stockage et distribution.",
      },
      { property: "og:title", content: "SONIDEP SA — Société Nigérienne de Pétrole" },
      {
        property: "og:description",
        content:
          "Société publique nigérienne chargée de l'approvisionnement, du stockage et de la distribution des produits pétroliers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FACTS = [
  { icon: Building2, value: "1977", label: "Année de création" },
  { icon: Landmark, value: "100 %", label: "Capital détenu par l'État du Niger" },
  { icon: MapPin, value: "Niamey", label: "Siège social" },
  { icon: Droplets, value: "Hydrocarbures", label: "Domaine d'activité" },
];

const MISSIONS = [
  {
    icon: Ship,
    title: "Approvisionnement",
    text: "Garantir la disponibilité continue des produits pétroliers sur l'ensemble du territoire national.",
  },
  {
    icon: Warehouse,
    title: "Stockage",
    text: "Gérer les capacités de stockage et les stocks de sécurité pour préserver l'autonomie du pays.",
  },
  {
    icon: Truck,
    title: "Distribution",
    text: "Acheminer les produits pétroliers vers les régions et les distributeurs du Niger.",
  },
];

function Index() {
  return (
    <>
      {/* Accueil */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="absolute inset-0 bg-grid-light" aria-hidden />
        <div className="container-site relative grid items-center gap-12 py-16 md:grid-cols-[1.3fr_1fr] md:py-24">
          <div>
            <div className="eyebrow text-primary">République du Niger · Depuis 1977</div>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] text-primary-deep md:text-6xl">
              Société Nigérienne de Pétrole
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              La SONIDEP est la société publique nigérienne chargée de sécuriser
              l'approvisionnement du pays en produits pétroliers et de développer les activités
              pétrolières nationales.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="xl">
                <Link to="/activites">
                  Nos activités <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link to="/a-propos">Qui sommes-nous</Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-2xl bg-primary-soft" aria-hidden />
              <div className="relative rounded-xl border border-border bg-card p-10 shadow-card md:p-14">
                <img
                  src={logo.url}
                  alt="Logo SONIDEP"
                  width={239}
                  height={271}
                  className="h-56 w-auto md:h-72"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="bg-band text-on-dark">
        <div className="container-site grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          {FACTS.map(({ icon: Icon, value, label }) => (
            <div key={label}>
              <Icon className="size-7 text-on-dark-muted" />
              <div className="mt-3 font-display text-2xl font-extrabold md:text-3xl">{value}</div>
              <div className="mt-1 text-sm text-on-dark-muted">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Missions */}
      <section className="py-20 md:py-24">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="eyebrow text-primary">Notre mission</div>
            <h2 className="mt-3 text-3xl font-extrabold text-primary-deep md:text-4xl">
              Approvisionner, stocker et distribuer les produits pétroliers au Niger
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {MISSIONS.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="group relative rounded-lg border border-border bg-card p-8 shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="absolute right-6 top-6 font-display text-5xl font-black text-primary-soft">
                  0{i + 1}
                </div>
                <div className="relative flex size-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Icon className="size-6" />
                </div>
                <h3 className="relative mt-6 text-xl font-bold text-primary-deep">{title}</h3>
                <p className="relative mt-3 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appel */}
      <section className="pb-20 md:pb-24">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-xl bg-primary-deep p-10 md:p-14">
            <div className="absolute inset-0 bg-grid" aria-hidden />
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-extrabold text-on-dark md:text-3xl">
                  Une question, un partenariat ?
                </h2>
                <p className="mt-2 text-on-dark-muted">
                  Contactez le siège de la SONIDEP SA à Niamey.
                </p>
              </div>
              <Button asChild size="xl" variant="onDark">
                <Link to="/contact">
                  Nous contacter <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
