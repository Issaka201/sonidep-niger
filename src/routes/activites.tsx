import { createFileRoute } from "@tanstack/react-router";
import { Factory, ShieldCheck, Ship, Truck, Warehouse } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/activites")({
  head: () => ({
    meta: [
      { title: "Nos activités — SONIDEP SA" },
      {
        name: "description",
        content:
          "Approvisionnement, stockage, distribution et développement des activités pétrolières nationales : les métiers de la SONIDEP.",
      },
      { property: "og:title", content: "Nos activités — SONIDEP SA" },
      {
        property: "og:description",
        content: "Les métiers de la Société Nigérienne de Pétrole au service du Niger.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ActivitiesPage,
});

const ACTIVITIES = [
  {
    icon: Ship,
    title: "Approvisionnement",
    text: "La SONIDEP organise l'approvisionnement du Niger en produits pétroliers afin d'éviter toute rupture sur le marché national.",
  },
  {
    icon: Warehouse,
    title: "Stockage",
    text: "Elle exploite des capacités de stockage permettant de constituer des réserves et de réguler la disponibilité des produits.",
  },
  {
    icon: Truck,
    title: "Distribution",
    text: "Elle assure l'acheminement des produits pétroliers vers les différentes régions et les distributeurs du pays.",
  },
  {
    icon: Factory,
    title: "Développement pétrolier national",
    text: "Elle contribue au développement des activités pétrolières nationales et à la valorisation des ressources du Niger.",
  },
];

function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos activités"
        title="De l'approvisionnement à la distribution"
        intro="Une chaîne complète pour sécuriser l'accès des Nigériens aux produits pétroliers."
      />

      <section className="py-20">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-2">
            {ACTIVITIES.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="flex gap-6 rounded-lg border border-border bg-card p-8 shadow-card"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Icon className="size-7" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary-deep">{title}</h2>
                  <p className="mt-3 text-muted-foreground">{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start gap-6 rounded-xl border-2 border-primary bg-primary-soft p-8 md:flex-row md:items-center md:p-10">
            <ShieldCheck className="size-12 shrink-0 text-primary" />
            <div>
              <h2 className="text-2xl font-extrabold text-primary-deep">
                Sécuriser l'approvisionnement du pays
              </h2>
              <p className="mt-2 text-secondary-foreground">
                En tant que société publique, la SONIDEP agit dans l'intérêt national pour garantir
                la continuité de l'approvisionnement en produits pétroliers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
