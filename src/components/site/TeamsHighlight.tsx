import captainPhoto from "@/assets/cricketer-silhouette.png";
import mintMavericksPhoto from "@/assets/teams/mint-mavericks.png";
import onyxEdgePhoto from "@/assets/teams/onyx-edge.png";
import salonStrikersPhoto from "@/assets/teams/salon-strikers.png";

type Team = {
  name: string;
  city: string;
  captain: string;
  jerseyNo: string;
  bg: string;
  fg: string;
  photo?: string;
};

// * Allure And Beard Studio: PROBAL SEN
// * ⁠FRENYZ COUTURE AND SALON : Freny Chauhan
// * ⁠Reflexions Unisex Salon: RAJ SEN
// * ⁠Jawed Habib Hair & Beauty : MANISH MAKHIJA
// * ⁠Shweta's Makeover: BHAVESH PANCHAL
// * ⁠* Cutz Beauty Salon: MEGHA BHATTI
// * ⁠* Elixir Salon: ANIL SITAPARA
// * ⁠* Beyound Beauty Unisex Salon & Academy: CHIRAG LIMBACHIYA
// * ⁠* Rutpit The Alpit Sharma Salon* ALPIT SHARMA
// * Dev's Ladies Salon : DEVANG KALOLA ⁠
// * * New Look Salon:PARESH LAKHTARIYA⁠
// * * Nitin's The Professional Salon: NITIN LIMBACHIYA



// Colors sampled from the AMINU x 3TENX jersey reference image
const teams: Team[] = [

  { name: "Allure And Beard Studio", city: "Bengaluru", captain: "Probal Sen",  jerseyNo: "01", bg: "#0A0A0A", fg: "#FFFFFF", photo: onyxEdgePhoto },
  { name: "Frenyz Couture and Salon", city: "Vadodara",  captain: "Freny Chauhan",   jerseyNo: "02", bg: "#E6188E", fg: "#FFFFFF", photo: salonStrikersPhoto },
  { name: "Reflexions Unisex Salon", city: "Ahmedabad", captain: "Raj Sen",     jerseyNo: "03", bg: "#C9CCCE", fg: "#0A0A0A" },
  { name: "Jawed Habib Hair & Beauty", city: "Mumbai",    captain: "Manish Makhija",  jerseyNo: "04", bg: "#E0241F", fg: "#FFFFFF" },
  { name: "Shweta's Makeover", city: "Chennai",   captain: "Bhavesh Panchal", jerseyNo: "05", bg: "#7B96B8", fg: "#0A0A0A" },
  { name: "Cutz Beauty Salon", city: "Delhi",     captain: "Megha Bhatti",   jerseyNo: "06", bg: "#4B1F7A", fg: "#FFFFFF" },
  { name: "Elixir Salon", city: "Surat",     captain: "Anil Sitapara",    jerseyNo: "07", bg: "#F2D900", fg: "#0A0A0A" },
  { name: "Beyound Beauty Unisex Salon & Academy", city: "Kolkata",   captain: "Chirag Limbachiya",  jerseyNo: "08", bg: "#1F5FB8", fg: "#FFFFFF" },
   { name: "Rutpit The Alpit Sharma Salon", city: "Jaipur",    captain: "Alpit Sharma",   jerseyNo: "09", bg: "#B49A86", fg: "#0A0A0A" },
{ name: "Dev's Ladies Salon", city: "Surat",     captain: "Devang Kalola",     jerseyNo: "10", bg: "#F08A1C", fg: "#FFFFFF" },
     { name: "New Look Salon", city: "Pune",      captain: "Paresh Lakhtariya",  jerseyNo: "11", bg: "#A6D8B0", fg: "#0A0A0A", photo: mintMavericksPhoto },
  { name: "Nitin's The Professional Salon", city: "Vadodara",  captain: "Nitin Limbachiya",   jerseyNo: "12", bg: "#1F2A4A", fg: "#FFFFFF" },
 
  


  

  




];

function TeamCard({ team }: { team: Team }) {
  const isDark = team.fg === "#FFFFFF";
  const subtle = isDark ? "rgba(255,255,255,0.85)" : "rgba(10,10,10,0.78)";
  const faint = isDark ? "rgba(255,255,255,0.6)" : "rgba(10,10,10,0.6)";
  const chipBg = isDark ? "rgba(255,255,255,0.95)" : "rgba(10,10,10,0.9)";
  const chipFg = isDark ? "#0A0A0A" : "#FFFFFF";

  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-card-elevated h-44 sm:h-48 group hover:scale-[1.02] transition-transform"
      style={{ backgroundColor: team.bg, color: team.fg }}
    >
      {/* Decorative starburst behind player */}
      <div
        aria-hidden
        className="absolute left-0 top-1/2 -translate-y-1/2 w-44 h-44 opacity-50"
        style={{
          background: `conic-gradient(from 0deg,
            rgba(255,255,255,0.0) 0deg,
            ${isDark ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.55)"} 6deg,
            rgba(255,255,255,0.0) 12deg,
            rgba(255,255,255,0.0) 30deg,
            ${isDark ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.45)"} 36deg,
            rgba(255,255,255,0.0) 42deg)`,
          maskImage: "radial-gradient(circle, black 35%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle, black 35%, transparent 70%)",
        }}
      />

      {/* Player photo (left) */}
      <img
        src={team.photo ?? captainPhoto}
        alt={`${team.captain}, captain of ${team.name}`}
        loading="lazy"
        width={512}
        height={768}
        className="absolute left-0 bottom-0 h-[110%] w-auto object-contain object-bottom drop-shadow-2xl pointer-events-none select-none"
        style={{ maxWidth: "45%" }}
      />

      {/* Right side info */}
      <div className="relative h-full ml-[42%] pr-5 py-4 flex flex-col justify-center">
        {/* Top chip */}
        <div
          className="inline-flex w-fit items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold"
          style={{ backgroundColor: chipBg, color: chipFg }}
        >
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ backgroundColor: team.bg, border: `1.5px solid ${chipFg}` }}
          />
          Team #{team.jerseyNo}
        </div>

        {/* Team name */}
        <h3
          className="font-display text-xl sm:text-2xl leading-tight mt-1.5"
          style={{ color: team.fg }}
        >
          {team.name}
        </h3>

        {/* Stats */}
        <div className="mt-2 space-y-1 text-[12px]">
          <div className="flex items-center gap-3">
            <span className="font-semibold w-16" style={{ color: faint }}>Owner</span>
            <span className="font-bold" style={{ color: subtle }}>{team.captain}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold w-16" style={{ color: faint }}>City</span>
            <span className="font-bold" style={{ color: subtle }}>{team.city}</span>
          </div>
        </div>

        {/* Pagination dots (decorative, IPL-style) */}
        <div className="absolute bottom-3 right-5 flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: faint }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: subtle }} />
        </div>
      </div>
    </div>
  );
}

export function TeamsHighlight() {
  return (
    <section id="highlights" className="relative py-24 sm:py-32 bg-navy-deep">
      <div className="container-page">
        <div className="mb-12 text-center">
          <p className="font-display tracking-[0.4em] text-primary text-sm">SEASON 2026</p>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl">
            TEAMS OF <span className="text-gradient-primary">2026 TOURNAMENT</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            12 elite salon-industry teams battling it out across the season.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teams.map((t) => (
            <TeamCard key={t.jerseyNo} team={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
