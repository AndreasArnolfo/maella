type SectionHeadingProps = { index: string; label: string; title: React.ReactNode; intro?: string; light?: boolean };

export function SectionHeading({ index, label, title, intro, light }: SectionHeadingProps) {
  return (
    <div className={`section-heading reveal${light ? " section-heading-light" : ""}`}>
      <div className="section-kicker"><span>{index}</span><span>{label}</span></div>
      <div><h2>{title}</h2>{intro ? <p>{intro}</p> : null}</div>
    </div>
  );
}
