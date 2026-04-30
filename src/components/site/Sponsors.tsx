// Sponsors section — IPL-style tiered layout with confetti streak decorations
import dhanjiSonsLogo from "@/assets/sponsors/dhanji-sons.png";
import cosponsored1 from "@/assets/sponsor/cosponsor/aminu.png";
import poweredby1 from "@/assets/sponsor/poweredby/cher.png";
import copoweredby1 from "@/assets/sponsor/copowerd/aura-co-powered.png";
import copoweredby2 from "@/assets/sponsor/copowerd/dhanji&sons-co-powered.png";
import copoweredby3 from "@/assets/sponsor/copowerd/jdsafe-co-powered.png";
import copoweredby4 from "@/assets/sponsor/copowerd/jiden-co-powered.png";
import umpire from "@/assets/sponsor/umpiresupportpartner/work-brew.png";
import associate1 from "@/assets/sponsor/associatepartner/rarecement.png";
import beverages1 from "@/assets/sponsor/bevragepartner/jkagency.png";
import beverages2 from "@/assets/sponsor/bevragepartner/kb.png";
import travel from "@/assets/sponsor/travelcuratorpartner/Tripotel.png";
import digitales from "@/assets/sponsor/digitalpartner/gs.png";
import entertainment from "@/assets/sponsor/entertainment/vc-live-logo.png";
import diwizonLogo from "@/assets/sponsors/diwizon.png";

function LogoTile({
  name,
  sub,
  logo,
  href,
}: {
  name: string;
  sub?: string;
  logo?: string;
  href?: string;
}) {
  return (
    <div className="group relative h-24 sm:h-28 rounded-2xl bg-white grid place-items-center px-6 transition-transform hover:scale-105 shadow-card-elevated border border-navy-deep/10">
      {/* Full-cover invisible link overlay */}
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="absolute inset-0 z-10 rounded-2xl cursor-pointer"
        />
      )}
      {logo ? (
        <img
          src={logo}
          alt={name}
          loading="lazy"
          className="max-h-[70%] max-w-[80%] w-auto object-contain"
        />
      ) : (
        <span className="font-display text-2xl sm:text-3xl text-navy-deep tracking-wider">
          {name}
        </span>
      )}
      {sub && (
        <span className="absolute bottom-2 text-[10px] tracking-[0.3em] text-navy/70">
          {sub}
        </span>
      )}
    </div>
  );
}

function Streak({ className, color }: { className: string; color: string }) {
  return (
    <div
      className={`streak ${className}`}
      style={{ ["--ball-color" as string]: color }}
    />
  );
}

export function Sponsors() {
  return (
    <section
      id="sponsors"
      className="section-light relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Confetti streaks */}
      <Streak className="top-10 -left-10 -rotate-12" color="oklch(0.7 0.22 30)" />
      <Streak className="top-32 -left-4 rotate-12" color="oklch(0.82 0.18 85)" />
      <Streak className="top-20 left-40 -rotate-6 hidden md:block" color="oklch(0.7 0.2 350)" />
      <Streak className="top-10 -right-10 rotate-12" color="oklch(0.82 0.18 85)" />
      <Streak className="top-32 -right-4 -rotate-12" color="oklch(0.7 0.22 30)" />
      <Streak className="top-20 right-40 rotate-6 hidden md:block" color="oklch(0.65 0.2 145)" />
      <Streak className="bottom-10 -left-10 rotate-12" color="oklch(0.65 0.2 145)" />
      <Streak className="bottom-10 -right-10 -rotate-12" color="oklch(0.62 0.2 250)" />

      <div className="container-page relative">

        {/* Co-Sponsored | Powered By */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-14 px-4">
          {[
            {
              s: "CO-SPONSORED BY",
              n: "Aminu",
              logo: cosponsored1,
              href: "https://www.instagram.com/aminu.life?igsh=NXRiamg5dGhkcWNk",
            },
            {
              s: "POWERED BY",
              n: "cher",
              logo: poweredby1,
              href: "https://www.instagram.com/cher_youbeauty?igsh=MXhvb2ZyeXc2amV2Mw==",
            },
          ].map((p) => (
            <div key={p.s} className="flex flex-col items-center text-center">
              <p className="text-[11px] sm:text-xs tracking-[0.4em] font-bold text-navy-deep mb-4 uppercase">
                {p.s}
              </p>
              <div className="w-full max-w-[300px]">
                <LogoTile name={p.n} logo={p.logo} href={p.href} />
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mb-10 h-px max-w-5xl bg-navy/10" />

        {/* Co Powered By */}
        <div className="text-center">
          <p className="text-xs sm:text-sm tracking-[0.4em] font-bold text-navy-deep">
            CO POWERED BY
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-5xl mx-auto">
            <LogoTile
              name="Jiden Inc"
              logo={copoweredby4}
              href="https://www.instagram.com/jideninc?igsh=MWs1MGhvbXA4d3Bzaw=="
            />
            <LogoTile
              name="Aura Laser Clinic"
              logo={copoweredby1}
              href="https://www.instagram.com/aura_laserclinic?igsh=NzA5cDEwc2YwZXFy"
            />
            <LogoTile
              name="Dhanji & Sons"
              logo={copoweredby2}
              href="https://www.instagram.com/dhanji_and_sons?igsh=MXd1b3pubjlyMmI2ZA=="
            />
            <LogoTile
              name="JD Safe Solutions"
              logo={copoweredby3}
              href="https://www.instagram.com/jdsafe_solutions_llp?igsh=MWZ5bXp2cGhseXFsYQ=="
            />
          </div>
        </div>

        <div className="mx-auto my-14 h-px max-w-5xl bg-navy/10" />

        {/* Associate & other partners */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {(
            [
              {
                n: "Work Brew",
                s: "UMPIRE SUPPORT PARTNER",
                logo: umpire,
                href: "https://www.instagram.com/work.brew?igsh=YTBlNzloM3JpcmUy",
              },
              {
                n: "Rarelement India",
                s: "ASSOCIATE PARTNER",
                logo: associate1,
                href: "https://www.instagram.com/rarelement_india?igsh=eHU4bmk0MzlwNnk0",
              },
              {
                n: "Kaavach Bealeas",
                s: "BEVERAGE PARTNER",
                logo: beverages2,
                href: "https://www.instagram.com/kaavachbealeas?igsh=MXJpZXhqZWZ5N3Nz",
              },
              {
                n: "JK Agency",
                s: "BEVERAGE PARTNER",
                logo: beverages1,
                href: "",
              },
              {
                n: "Tripotel",
                s: "TRAVEL CURATOR PARTNER",
                logo: travel,
                href: "https://www.instagram.com/alatereema?igsh=MWxvMTJqYjlrMHllbA==",
              },
              {
                n: "Diwizon",
                s: "TECH PARTNER",
                logo: diwizonLogo,
                href: "https://diwizon.com/",
              },
              {
                n: "Glow Socially",
                s: "DIGITAL PARTNER",
                logo: digitales,
                href: "https://www.instagram.com/glow_socially?igsh=MWtnd3RhbnRzMXA0dw==",
              },
              {
                n: "VC Live",
                s: "ENTERTAINMENT PARTNER",
                logo: entertainment,
                href: "https://www.instagram.com/vrushtichauhanlive?igsh=bHNrdnA4aWk3ZXk5",
              },
            ] as { n: string; s: string; logo?: string; href: string }[]
          ).map((p) => (
            <div key={p.n} className="text-center">
              <p className="text-[10px] sm:text-xs tracking-[0.25em] font-bold text-navy-deep mb-3">
                {p.s}
              </p>
              <LogoTile name={p.n} logo={p.logo} href={p.href} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}