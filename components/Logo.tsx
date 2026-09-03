export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display tracking-tightest leading-none ${className}`}
      aria-label="Curators Coffee"
    >
      Curators
      <span className="text-copper">.</span>
    </span>
  );
}
