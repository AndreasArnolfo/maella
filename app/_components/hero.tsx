import { site } from "../_data/site-content";
import { ArrowDown, ArrowUpRight } from "./icons";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="shell hero-inner">
        <div className="hero-meta">
          <p><span className="status-dot" /> Studio technique français</p>
          <p>Déploiement · Infrastructure · Automatisation</p>
        </div>
        <div className="hero-copy">
          <h1><span>Votre produit<span className="signal">.</span></span><span>En production<span className="signal">.</span></span></h1>
          <div className="hero-support">
            <p>MAELLA déploie, connecte et exploite les applications SaaS qui font avancer votre activité.</p>
            <div className="hero-actions">
              <a className="button button-dark" href={site.contactHref}>Parler de votre projet <ArrowUpRight className="icon" /></a>
              <a className="text-link" href="#approche">Découvrir notre approche <ArrowDown className="icon" /></a>
            </div>
          </div>
        </div>
        <div className="hero-rail" aria-hidden="true"><span>CODE</span><i /><span>BUILD</span><i /><span>DEPLOY</span><i className="is-live" /><span>LIVE</span></div>
      </div>
    </section>
  );
}
