import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand/10 bg-brand-sand/90 backdrop-blur">
      <nav className="container-max section-padding flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-lg font-black text-white">
            RT
          </div>
          <div>
            <p className="text-base font-black leading-none text-brand-ink">
              Rubie Tents
            </p>
            <p className="text-xs font-medium text-brand-muted">
              Durable Materials. Strong Tents.
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-brand-muted transition hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button asChild size="sm">
          <Link href="#contact">Request Quote</Link>
        </Button>
      </nav>
    </header>
  );
}
