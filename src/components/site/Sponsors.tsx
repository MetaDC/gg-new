// Sponsors section — IPL-style tiered layout with confetti streak decorations
const dhanjiSonsLogo = "/assets/sponsors/dhanji-sons.png";
const cosponsored1 = "/assets/sponsor/cosponsor/aminu-logo.png";
const poweredby1 = "/assets/sponsor/poweredby/cher-logo.png";
const copoweredby1 = "/assets/sponsor/copowerd/aura-co-powered.png";
const copoweredby2 = "/assets/sponsor/copowerd/dhanji&sons-co-powered.png";
const copoweredby3 = "/assets/sponsor/copowerd/jdsafe-co-powered.png";
const copoweredby4 = "/assets/sponsor/copowerd/jiden-co-powered.png";
const umpire = "/assets/sponsor/umpiresupportpartner/work-brew.png";
const associate1 = "/assets/sponsor/associatepartner/rarecement.png";
const associate2 = "/assets/sponsor/associatepartner/dr.soni.png";
const beverages1 = "/assets/sponsor/bevragepartner/jkagency.png";
const beverages2 = "/assets/sponsor/bevragepartner/kb.png";
const kbjk = "/assets/sponsor/bevragepartner/kb-jk.png";
const travel = "/assets/sponsor/travelcuratorpartner/Tripotel.png";
const digitales = "/assets/sponsor/digitalpartner/gs.png";
const entertainment = "/assets/sponsor/entertainment/vc-live-logo.png";
const diwizonLogo = "/assets/sponsors/diwizon.png";
const vendor = "/assets/sponsor/vendor/ar-ma-logo.png";

const test = "/assets/sponsors/test-1.png";

function LogoTile({
  name,
  sub,
  logo,
  href,
  className = "h-24 sm:h-30",
}: {
  name: string;
  sub?: string;
  logo?: string;
  href?: string;
  className?: string;
}) {
  return (
    <div className={`group relative w-full rounded-2xl bg-white grid place-items-center px-6 transition-transform hover:scale-105 shadow-card-elevated border border-navy-deep/10 overflow-hidden ${className}`}>
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
          className="max-h-[80%] max-w-[90%] w-auto object-contain"
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
      href: "https://www.aminu.life/",
      display: "www.aminu.life",
    },
    {
      s: "POWERED BY",
      n: "cher",
      logo: poweredby1,
      href: "https://www.instagram.com/cher_youbeauty/",
      display: "cher_youbeauty",
    },
  ].map((p) => (
    <div key={p.s} className="flex flex-col items-center text-center">
      <p className="text-[11px] sm:text-xs tracking-[0.4em] font-bold text-navy-deep mb-5 uppercase">
        {p.s}
      </p>
      <div className="w-full max-w-[200px]">
        <LogoTile 
          name={p.n} 
          logo={p.logo} 
          href={p.href} 
          className="aspect-square sm:aspect-[5/4] h-auto px-8" 
        />
      </div>
      <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-xs sm:text-sm font-semibold text-navy-deep/80 hover:text-primary underline underline-offset-4 break-all"
      >
        {p.display}
      </a>
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
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-10">
          {(
            [
              {
                n: "Work Brew",
                s: "UMPIRE SUPPORT PARTNER",
                logo: umpire,
                href: "https://www.instagram.com/work.brew?igsh=YTBlNzloM3JpcmUy",
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
                n: "Rarelement India",
                s: "ASSOCIATE PARTNER",
                logo: associate1,
                href: "https://www.instagram.com/rarelement_india?igsh=eHU4bmk0MzlwNnk0",
              },
              {
                n: "Dr.Soni's",
                s:"ASSOCIATE PARTNER",
                logo: associate2,
                href: "https://www.instagram.com/dr_sonis?igsh=MXMxbnl3aHFlang3NA==",
              },  {
                n: "Vendor",
                s:"Vendor Support       Partner",
                logo: vendor,
                href: "https://www.instagram.com/dr_sonis?igsh=MXMxbnl3aHFlang3NA==",
              },
              {
                n: "JK Agency",
                s: "BEVERAGE PARTNER",
                logo: kbjk,
                href: "https://www.instagram.com/kaavachbealeas/",
              },
             
              {
                n: "VC Live",
                s: "ENTERTAINMENT PARTNER",
                logo: entertainment,
                href: "https://www.instagram.com/vrushtichauhanlive?igsh=bHNrdnA4aWk3ZXk5",
              },
            ] as { n: string; s: string; logo?: string; href: string }[]
          ).map((p) => (
            <div key={p.n} className="w-[calc(50%-1.25rem)] md:w-[calc(25%-1.25rem)] lg:w-[calc(20%-1.25rem)] text-center">
              <p className="text-[10px] sm:text-xs tracking-[0.25em] font-bold text-navy-deep mb-3 whitespace-pre-line uppercase">
                {p.s.replace(/ PARTNER/i, "\nPARTNER")}
              </p>
              <LogoTile name={p.n} logo={p.logo} href={p.href} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}