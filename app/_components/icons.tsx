type ArrowProps = { className?: string };

export function ArrowUpRight({ className }: ArrowProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 16 16" fill="none"><path d="M3.5 12.5 12 4M5 3.5h7.5V11" stroke="currentColor" strokeWidth="1.4" /></svg>;
}

export function ArrowDown({ className }: ArrowProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 16 16" fill="none"><path d="M8 2.5v10M4.5 9 8 12.5 11.5 9" stroke="currentColor" strokeWidth="1.4" /></svg>;
}
