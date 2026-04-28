import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Sponsors } from "@/components/site/Sponsors";
import { TitleSponsor } from "@/components/site/TitleSponsor";
import { TeamsHighlight } from "@/components/site/TeamsHighlight";
import { Gallery } from "@/components/site/Gallery";
import { RegisterCTA } from "@/components/site/RegisterCTA";
import { Contact, Footer } from "@/components/site/Contact";
import { Toaster } from "@/components/ui/sonner";
import heroImg from "@/assets/hero-cricket.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Grooming Gurus — Cricket Tournament 2026 | Vadodara" },
      {
        name: "description",
        content:
          "India's most stylish cricket league. Where the salon industry meets the cricket pitch. Register your salon team for Grooming Gurus Cricket Tournament 2026 in Vadodara.",
      },
      { property: "og:title", content: "Grooming Gurus — Cricket Tournament 2026" },
      {
        property: "og:description",
        content: "Where the salon industry meets the cricket pitch. Register your team now.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:title", content: "Grooming Gurus — Cricket Tournament 2026" },
      { name: "twitter:description", content: "Where the salon industry meets the cricket pitch." },
      { name: "twitter:image", content: heroImg },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TitleSponsor />
        <Sponsors />
        <TeamsHighlight />
        <Gallery />
        <RegisterCTA />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="top-center" />
    </div>
  );
}
