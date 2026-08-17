import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Small secondary-page trail: Home > Current Page.
export default function Breadcrumb({ current }: { current: string }) {
  return (
    <nav className="flex min-w-0 flex-wrap items-center gap-2 font-mono text-xs tracking-wide text-body-text">
      <Link href="/" className="hover:text-navy-deep">
        Home
      </Link>
      <ChevronRight size={12} />
      <span className="min-w-0 break-words font-semibold text-navy-deep">{current}</span>
    </nav>
  );
}
