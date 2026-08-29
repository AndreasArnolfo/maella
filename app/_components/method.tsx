import { method, principles } from "../_data/site-content";
import { Reveal, RevealArticle } from "./motion";
import { SectionHeading } from "./section-heading";

export function Method() {
  return (
    <section className="method section-pad" id="methode"><div className="shell">
      <SectionHeading index="03" label="Méthode" title={<>Comprendre avant<br />de déployer.</>} intro="Une démarche structurée, depuis les contraintes du produit jusqu’à son exploitation quotidienne." />
      <div className="method-list">{method.map((step, index) => <RevealArticle className="method-row" delay={index * 0.05} y={18} key={step.index}>
        <span className="method-index">{step.index}</span><h3>{step.title}</h3><p>{step.text}</p><span className="method-mark" aria-hidden="true">+</span>
      </RevealArticle>)}</div>
    </div></section>
  );
}

export function Principles() {
  return (
    <section className="principles section-pad"><div className="shell principles-layout">
      <Reveal className="principles-sticky"><div className="section-kicker"><span>04</span><span>Nos principes</span></div><h2>La technique<br />juste<span className="signal">.</span></h2><p>Des choix compréhensibles aujourd’hui, soutenables demain.</p></Reveal>
      <div className="principle-list">{principles.map((principle, index) => <RevealArticle className="principle-card" delay={index * 0.05} key={principle.title}><span>0{index + 1}</span><h3>{principle.title}</h3><p>{principle.text}</p></RevealArticle>)}</div>
    </div></section>
  );
}
