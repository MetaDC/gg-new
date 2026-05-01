// Title Sponsor — dedicated dark-themed hero section for 3TENX
import { ArrowUpRight, Trophy, Sparkles } from "lucide-react";
const tenxLogo = "/assets/3tenx-logo.png";
const tenxProducts = "/assets/3tenx-products.webp";

function Streak({ className, color }: { className: string; color: string }) {
  return (
    <div
      className={`streak ${className}`}
      style={{ ["--ball-color" as string]: color }}
    />
  );
}

export function TitleSponsor() {
  return (
    <section
      id="title-sponsor"
      className="relative overflow-hidden py-24 sm:py-32 bg-navy-deep"
    >
      {/* Background glows */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-gold/20 blur-3xl pointer-events-none" />

      {/* Comet streaks */}
      <Streak className="top-16 -left-10 -rotate-12" color="oklch(0.78 0.13 80)" />
      <Streak className="bottom-20 -right-10 rotate-12" color="oklch(0.55 0.19 22)" />

      <div className="container-page relative">
        {/* Section eyebrow */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold tracking-[0.4em] text-gold uppercase">
            <Trophy className="h-3.5 w-3.5" />
            Title Sponsor
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl text-foreground">
       <span className="text-gradient-gold">3TENX</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            Proud title sponsor of Grooming Gurus Cricket Tournament championing
            the salon industry on and off the pitch.
          </p>
        </div>

        {/* Featured card */}
        <div className="mt-14 mx-auto max-w-5xl">
          <div className="relative rounded-3xl border border-gold/20 bg-gradient-to-br from-navy to-navy-deep p-8 sm:p-12 shadow-card-elevated overflow-hidden">
            {/* Decorative corner glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gold/20 blur-3xl" />

            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              {/* Left: brand mark */}
              <div className="flex flex-col items-center">
                <div className="w-1/2 aspect-square rounded-2xl bg-white border border-gold/30 shadow-glow p-4 flex items-center justify-center">
                  <img
                    src={tenxLogo}
                    alt="3TENX — Title Sponsor"
                    width={512}
                    height={512}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="mt-4 text-xs tracking-[0.3em] text-gold/80 uppercase">
                  Where Science Meets Salon Excellence
                </p>
              </div>

              {/* Right: details + CTA */}
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-xl text-foreground tracking-wider">
                      A Brand That Backs Bold
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                    India’s first professional haircare brand, formulated in Italy, made for Indian hair, and trusted by 10,000+ stylists for salon-grade results from the first wash.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border bg-card/50 p-4">
                    <p className="text-2xl font-display text-gold">#3200+</p>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                   Salon Partners 
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card/50 p-4">
                    <p className="text-2xl font-display text-gold">#1</p>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                     Professional Brand
                    </p>
                  </div>
                </div>

                <a
                  href="https://3tenx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-sunset px-8 py-4 font-bold text-white shadow-primary transition-transform hover:scale-105"
                >
                  Visit 3TENX Website
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>


         {/* Product showcase */}
        <div className="mt-12 mx-auto max-w-5xl">
          <div className="relative rounded-3xl border border-gold/20 bg-gradient-to-br from-navy to-navy-deep p-4 sm:p-6 shadow-card-elevated overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <img
              src={tenxProducts}
              alt="3TENX product range — shampoos, conditioners, hair oils & serums"
              className="relative w-full h-auto rounded-2xl object-cover"
              loading="lazy"
            />
            <p className="relative mt-4 text-center text-xs tracking-[0.3em] text-gold/80 uppercase">
              The Complete 3TENX Range
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
