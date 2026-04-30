const g1 = "/assets/1.webp";
const g2 = "/assets/2.webp";
const g3 = "/assets/6.webp";
const g4 = "/assets/4.webp";
const g5 = "/assets/3.webp";
const g6 = "/assets/5.webp";

const items = [
  { src: g1, label: "TOURNAMENT ACTION" },
  { src: g2, label: "TEAM SPIRIT" },
  { src: g4, label: "CHAMPION MOMENTS" },
  { src: g3, label: "ON THE FIELD" },
  { src: g5, label: "VICTORY CATCHES" },
  { src: g6, label: "BEHIND THE SCENES" },
];

export function Gallery() {
  return (
    <section id="gallery" className="section-light relative py-24 sm:py-32">
      <div className="container-page">
        <div className="text-center mb-16">
          <p className="font-display tracking-[0.4em] text-primary text-sm">MEMORIES</p>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl">
            <span className="text-gradient-primary">GALLERY</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {items.map((it) => (
            <div
              key={it.label}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-card-elevated"
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                width={896}
                height={896}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <p className="font-display tracking-widest text-sm sm:text-base text-primary">
                  {it.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-muted-foreground italic">
          More photos coming soon — stay tuned!
        </p>
      </div>
    </section>
  );
}
