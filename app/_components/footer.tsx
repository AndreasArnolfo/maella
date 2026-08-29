import { site } from "../_data/site-content";
import { ArrowUpRight } from "./icons";

export function About() {
  return (
    <section className="about section-pad" id="a-propos"><div className="shell about-grid reveal">
      <div className="section-kicker"><span>05</span><span>À propos</span></div>
      <div><h2>Une structure tech française tournée vers l’opérationnel.</h2><div className="about-copy"><p>MAELLA accompagne les produits numériques là où le développement rencontre l’infrastructure, les intégrations et l’exploitation.</p><p>Notre rôle : transformer une application en un service réellement accessible, maintenable et prêt à évoluer.</p></div></div>
    </div></section>
  );
}

export function ContactCta() {
  return (
    <section className="contact" id="contact"><div className="shell contact-inner reveal">
      <p className="contact-label"><span className="status-dot" /> Un projet à mettre en ligne ?</p>
      <h2>Votre SaaS mérite mieux<br />qu’un localhost<span className="signal">.</span></h2>
      <a className="contact-link" href={site.contactHref}><span>Passons-le en production.</span><ArrowUpRight className="contact-arrow" /></a>
    </div></section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-top"><a className="footer-wordmark" href="#top">MAELLA<span className="signal">.</span></a><div className="footer-contact"><span>Un projet, une question ?</span><a href={site.contactHref}>{site.contactLabel} <ArrowUpRight className="icon" /></a></div></div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} MAELLA</span><span>France · Europe</span><a href="#top">Retour en haut ↑</a></div>
    </footer>
  );
}
