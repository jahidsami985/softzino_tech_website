import Link from "next/link";
import { Briefcase, Camera, MessageSquare, PlayCircle, Users } from "lucide-react";

// Small legal/utility links shown in the very bottom row of the footer.
const legalLinks = [
  { label: "Privacy Notice", href: "/privacy-notice" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Notice", href: "/cookie-notice" },
  { label: "Change Cookie Preferences", href: "#cookie-preferences" },
  { label: "Imprint / Impressum", href: "/imprint" },
  { label: "Press Kit", href: "/press-kit" },
];

// Icon-only footer links that match the Figma footer treatment.
const footerLinks = [
  { icon: Briefcase, label: "Company", href: "#" },
  { icon: MessageSquare, label: "Messages", href: "#" },
  { icon: Users, label: "Community", href: "#" },
  { icon: Camera, label: "Gallery", href: "#" },
  { icon: PlayCircle, label: "Video", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep">
      <div className="mx-auto max-w-content px-4 py-12 md:px-16">
        {/* Top row: social/utility icons. aria-label keeps icon links readable to screen readers. */}
        <div className="flex items-center gap-6">
          {footerLinks.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="text-footer-muted transition-colors hover:text-white"
            >
              <Icon size={24} strokeWidth={1.8} />
            </Link>
          ))}
        </div>

        {/* Office address block shared across all pages. */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-white">Singapore Office</h3>
            <p className="mt-2 max-w-md text-base leading-[1.6] text-footer-muted">
              10 Anson Road, #22-02 International Plaza, Singapore 079903
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Dhaka Office</h3>
            <p className="mt-2 max-w-md text-base leading-[1.6] text-footer-muted">
              House 12, Road 5, Dhanmondi, Dhaka 1205, Bangladesh
            </p>
          </div>
        </div>

        <div className="my-8 h-px w-full bg-footer-muted/20" />

        {/* Bottom row: legal links and copyright text. */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono text-xs tracking-wide text-footer-muted transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="max-w-xs text-left font-mono text-xs tracking-wide text-footer-muted/60 md:text-right">
            &copy; 2024 Softzino Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
