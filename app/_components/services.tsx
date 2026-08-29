import { services } from "../_data/site-content";
import { SectionHeading } from "./section-heading";

export function Positioning() {
  return (
    <section className="positioning section-pad" id="approche">
      <div className="shell positioning-grid reveal">
        <p className="eyebrow">Le vrai travail commence après le prototype.</p>
        <div><p className="statement">Construire une application est une étape. La déployer, l’intégrer, la sécuriser et la maintenir en est une autre.</p><p className="body-copy">MAELLA prend en charge ce passage décisif. Nous relions le produit à son infrastructure pour qu’il puisse fonctionner dans le monde réel.</p></div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="services section-pad" id="services"><div className="shell">
      <SectionHeading index="01" label="Domaines d’intervention" title={<>Tout ce qu’il faut entre<br />le code et ses utilisateurs.</>} />
      <div className="service-grid">
        {services.map((service) => <article className="service-card reveal" key={service.title}>
          <div className="service-top"><span>{service.index}</span><span className="service-node" aria-hidden="true" /></div>
          <h3>{service.title}</h3><p>{service.description}</p>
          <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>)}
      </div>
    </div></section>
  );
}
