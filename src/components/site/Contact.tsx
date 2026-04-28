import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-light relative py-24 sm:py-32">
      <div className="container-page">
        <div className="text-center mb-16">
          <p className="font-display tracking-[0.4em] text-primary text-sm">GET IN TOUCH</p>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl">
            CONTACT <span className="text-gradient-primary">US</span>
          </h2>
        </div>

        {/* Highlighted contact numbers */}
        <div className="mb-10 grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {[
            { label: "Registration Support", value: "+91 87994 61114" },
            { label: "Sponsorship Queries", value: "+91 99249 24454" },
          ].map(({ label, value }) => (
            <a
              key={label}
              href={`tel:${value.replace(/\s+/g, "")}`}
              className="group flex items-center gap-4 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-card to-card/50 p-6 shadow-card-elevated hover:shadow-glow hover:border-primary/60 hover:-translate-y-0.5 transition-all"
            >
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-gradient-gold grid place-items-center text-navy-deep shadow-gold">
                <Phone className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="mt-1 font-display text-2xl sm:text-3xl text-foreground group-hover:text-gradient-primary transition-colors">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { Icon: Mail, label: "Email", value: "gromminggurus@gmail.com" },
            { Icon: MapPin, label: "Venue", value: "Vadodara, Gujarat" },
          ].map(({ Icon, label, value }) => (
            <div
              key={label}
              className="rounded-3xl border border-primary/20 bg-card p-8 text-center shadow-card-elevated hover:shadow-glow transition-shadow"
            >
              <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-sunset grid place-items-center text-white">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
              <p className="mt-1 font-display text-xl text-foreground">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center gap-4">
          <a
            href="https://www.instagram.com/groominggurus2026/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="h-12 w-12 rounded-full border border-navy-deep/15 bg-card grid place-items-center hover:bg-primary hover:text-white hover:border-transparent transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-deep py-8">
      <div className="container-page text-center">
        <p className="text-sm text-muted-foreground">
          © Grooming Gurus. Developed by{" "}
          <a
            href="https://diwizon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            Diwizon
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
