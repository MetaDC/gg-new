import { Link } from "@tanstack/react-router";

export function RegisterCTA() {
  return (
    <section id="register" className="relative py-24 sm:py-32 bg-navy-deep overflow-hidden">
      <div className="container-page max-w-4xl text-center relative z-10">
        <p className="font-display tracking-[0.4em] text-primary text-sm">SEASON 2027</p>
        <h2 className="mt-3 font-display text-4xl sm:text-6xl">
          REGISTER FOR <span className="text-gradient-primary">2027</span>
        </h2>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs font-semibold text-red-300 uppercase tracking-widest">
          <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
          2026 Registrations Closed
        </div>

        <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg">
          The 2026 season is fully booked. Be the first in line for Grooming Gurus 2027 squads of 8–15 players, 8 on the field, one day of glory in Vadodara.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/register"
            className="inline-flex items-center justify-center rounded-full bg-gradient-sunset px-8 py-4 text-base font-bold text-white shadow-primary hover:scale-[1.03] transition-transform"
          >
            REGISTER FOR 2027 →
          </Link>
          <Link
            to="/"
            hash="contact"
            className="group relative inline-flex items-center justify-center rounded-full bg-gradient-gold px-8 py-4 text-base font-bold text-navy-deep shadow-gold hover:scale-[1.03] transition-transform"
          >
            <span className="absolute -top-2 -right-2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-primary animate-pulse">
              Open
            </span>
            ★ BECOME A SPONSOR
          </Link>
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-foreground hover:border-primary/60 transition-colors"
          >
            Talk to Us
          </Link>
        </div>
      </div>

      {/* Decorative streaks */}
      <span
        className="streak hidden sm:block"
        style={{ top: "20%", left: "-60px", transform: "rotate(-8deg)", ["--ball-color" as string]: "oklch(0.55 0.19 22)" }}
      />
      <span
        className="streak hidden sm:block"
        style={{ bottom: "18%", right: "-40px", transform: "rotate(8deg) scaleX(-1)", ["--ball-color" as string]: "oklch(0.78 0.13 80)" }}
      />
    </section>
  );
}
