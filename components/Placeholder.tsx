import { forwardRef } from "react";

interface PlaceholderProps {
  gradient: string;
  label?: string;
  className?: string;
  grain?: boolean;
}

/**
 * Tasteful stand-in for real photography: a warm gradient plate with an
 * optional grain overlay and a faint caption noting where the shot goes.
 * Swap these for <Image> / frame sequences in production.
 */
export const Placeholder = forwardRef<HTMLDivElement, PlaceholderProps>(
  ({ gradient, label, className = "", grain = true }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative h-full w-full overflow-hidden ${className}`}
        style={{ background: gradient }}
      >
        {grain && (
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
        )}
        {label && (
          <span className="pointer-events-none absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-cream/25">
            {label}
          </span>
        )}
      </div>
    );
  }
);

Placeholder.displayName = "Placeholder";
