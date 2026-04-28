import teamPhoto from "@/assets/team-photo.jpg";

export function About() {
  return (
    <section id="about" className="section-light relative py-24 sm:py-32">
      <div className="container-page">
        <div className="text-center mb-16">
          <p className="font-display tracking-[0.4em] text-primary text-sm">THE STORY</p>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl">
            ABOUT THE <span className="text-gradient-primary">TOURNAMENT</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-sunset opacity-25 blur-2xl rounded-3xl" />
            <img
              src={teamPhoto}
              alt="Grooming Gurus team"
              loading="lazy"
              width={1280}
              height={896}
              className="relative rounded-3xl shadow-card-elevated w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Grooming Gurus brings together the salon and grooming community for an exciting cricket tournament in Vadodara. This unique event blends creativity and competition, giving barbers, stylists, and beauty professionals across Gujarat a chance to showcase their skills both behind the chair and on the field.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              More than just cricket, it's about networking, team spirit, and celebrating the industry in a fun, energetic way. Represent your brand, build connections, and enjoy the thrill of the game.
            </p>

            <div className="rounded-3xl border border-primary/20 bg-card p-6 sm:p-8 shadow-card-elevated">
              <h3 className="font-display text-2xl text-gradient-primary mb-4">TOURNAMENT DETAILS</h3>
              <ul className="space-y-3">
                {[
                  ["Format", "Box Cricket"],
                  ["Squad size", "8 – 15 players"],
                  ["Playing XI", "8 on field"],
                  ["Location", "Vadodara"],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="font-display text-gradient-primary text-lg">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
