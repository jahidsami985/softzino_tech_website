import { LucideIcon } from "lucide-react";

// Fallback visual block for future sections that do not have real image assets yet.
export default function PlaceholderMedia({
  icon: Icon,
  label,
  className = "",
  dark = false,
}: {
  icon?: LucideIcon;
  label?: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    /* The dark prop lets this placeholder sit on navy cards without changing markup. */
    <div
      className={`placeholder-media flex items-center justify-center ${
        dark ? "bg-navy-header/90" : ""
      } ${className}`}
    >
      <div className="relative z-10 flex flex-col items-center gap-2 text-center">
        {Icon && (
          <Icon
            size={32}
            strokeWidth={1.5}
            className={dark ? "text-white/60" : "text-navy-header/40"}
          />
        )}
        {label && (
          <span
            className={`font-mono text-xs uppercase tracking-wide ${
              dark ? "text-white/50" : "text-navy-header/40"
            }`}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
