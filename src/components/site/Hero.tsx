import { Link } from "@tanstack/react-router";

const heroImg = "/assets/hero-cricket.webp";
const logo = "/assets/gg-logo.webp";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Cricket tournament under stadium lights"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-navy-deep/40" />

      <div className="container-page relative z-10 text-center py-32">
        <img
          src={logo}
          alt="Grooming Gurus emblem"
          className="mx-auto h-40 w-40 sm:h-52 sm:w-52 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          width={208}
          height={208}
        />
        <h1 className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl text-foreground leading-none">
          GROOMING <span className="text-gradient-primary">GURUS</span>
        </h1>
        <p className="mt-4 font-display tracking-[0.4em] text-gold text-sm sm:text-base">
          CRICKET TOURNAMENT 2026
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-red-300 uppercase tracking-widest">
          <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
          2026 Registrations Closed
        </div>
        <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-muted-foreground">
          Where the salon industry meets the cricket pitch. Registrations for 2026 are now closed but you can secure your spot for the 2027 edition today.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/"
            hash="register"
            className="inline-flex items-center justify-center rounded-full bg-gradient-sunset px-8 py-4 text-base font-bold text-white shadow-primary hover:scale-105 transition-transform"
          >
            REGISTER FOR 2027
          </Link>
          <Link
            to="/"
            hash="about"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-foreground hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { v: "11+", l: "Teams" },
            { v: "150+", l: "Players" },
            { v: "15+", l: "Sponsors" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
              <div className="font-display text-3xl text-gradient-primary">{s.v}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
