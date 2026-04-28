import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/gg-logo.webp";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#highlights", label: "Highlights" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy-deep/70 backdrop-blur-md border-b border-white/5">
      <div className="container-page flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="Logo" className="h-12 w-12" />
          <span className="font-display tracking-widest text-sm sm:text-base text-foreground">
            GROOMING GURUS
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/register"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-sunset px-5 py-2 text-sm font-semibold text-white shadow-primary hover:scale-105 transition-transform"
          >
            Register
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/5 bg-navy-deep/95 backdrop-blur-md">
          <div className="container-page py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex sm:hidden items-center justify-center rounded-full bg-gradient-sunset px-5 py-3 text-sm font-semibold text-white shadow-primary"
            >
              Register
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
