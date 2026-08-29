import { pipeline } from "../_data/site-content";
import { SectionHeading } from "./section-heading";

export function Pipeline() {
  return (
    <section className="pipeline section-pad" aria-labelledby="pipeline-title"><div className="shell">
      <SectionHeading index="02" label="Chaîne de production" light title={<span id="pipeline-title">Un chemin clair.<br />De bout en bout.</span>} intro="Pas de boîte noire. Chaque étape du déploiement est pensée pour être lisible, vérifiable et reproductible." />
      <div className="pipeline-track reveal">
        <div className="pipeline-line"><span /></div>
        {pipeline.map((item, index) => <div className="pipeline-step" key={item.step}>
          <div className={`pipeline-dot${index === pipeline.length - 1 ? " pipeline-dot-live" : ""}`}><span /></div>
          <span className="pipeline-index">0{index + 1}</span><h3>{item.step}</h3><p>{item.detail}</p>
        </div>)}
      </div>
      <div className="terminal-card reveal" aria-label="Exemple de statut de déploiement">
        <div className="terminal-bar"><span>maella / production</span><span className="terminal-status"><i /> operational</span></div>
        <div className="terminal-body"><code><span>$</span> deploy --environment production</code><code><span>→</span> build complete</code><code><span>→</span> services connected</code><code className="terminal-success"><span>✓</span> application is live</code></div>
      </div>
    </div></section>
  );
}
