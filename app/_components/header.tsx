import { navigation, site } from "../_data/site-content";
import { ArrowUpRight } from "./icons";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href="#top" aria-label="MAELLA — accueil">MAELLA<span className="wordmark-dot">.</span></a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="header-cta" href={site.contactHref}>Parler de votre projet <ArrowUpRight className="icon" /></a>
        <details className="mobile-menu">
          <summary aria-label="Ouvrir le menu"><span /><span /></summary>
          <nav aria-label="Navigation mobile">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            <a href={site.contactHref}>Contact</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
