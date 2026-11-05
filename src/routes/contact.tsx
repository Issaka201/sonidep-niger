import { createFileRoute } from "@tanstack/react-router";
import { Globe, MapPin } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SONIDEP SA" },
      {
        name: "description",
        content: "Contactez la SONIDEP SA, Société Nigérienne de Pétrole, au siège de Niamey.",
      },
      { property: "og:title", content: "Contact — SONIDEP SA" },
      {
        property: "og:description",
        content: "Coordonnées du siège de la Société Nigérienne de Pétrole à Niamey.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const ITEMS = [
  { icon: MapPin, label: "Siège social", value: "Niamey, République du Niger" },
  { icon: Globe, label: "Site web", value: "www.sonidep.com" },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contactez la SONIDEP"
        intro="Notre siège est situé à Niamey. Nous sommes à votre écoute."
      />

      <section className="py-20">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {ITEMS.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-5 rounded-lg border border-border bg-card p-8 shadow-card">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Icon className="size-6" />
              </div>
              <div>
                <div className="eyebrow text-muted-foreground">{label}</div>
                <div className="mt-2 text-lg font-bold text-primary-deep">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
