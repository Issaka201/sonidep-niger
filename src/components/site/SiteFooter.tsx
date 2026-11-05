import { Link } from "@tanstack/react-router";

import logo from "@/assets/sonidep_logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-on-dark">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-on-dark p-2">
              <img src={logo.url} alt="Logo SONIDEP" width={36} height={40} className="h-10 w-auto" />
            </div>
            <div className="font-display text-lg font-extrabold">SONIDEP SA</div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-on-dark-muted">
            Société Nigérienne de Pétrole — société publique chargée de sécuriser
            l'approvisionnement du Niger en produits pétroliers.
          </p>
        </div>

        <div>
          <div className="eyebrow text-on-dark-muted">Navigation</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Accueil</Link></li>
            <li><Link to="/a-propos" className="hover:underline">À propos</Link></li>
            <li><Link to="/activites" className="hover:underline">Nos activités</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow text-on-dark-muted">Siège social</div>
          <p className="mt-4 text-sm">Niamey, République du Niger</p>
          <p className="mt-1 text-sm text-on-dark-muted">www.sonidep.com</p>
        </div>
      </div>
      <div className="border-t border-on-dark/15">
        <div className="container-site py-5 text-xs text-on-dark-muted">
          © {new Date().getFullYear()} SONIDEP SA — Société Nigérienne de Pétrole. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
