import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { RegisterForm } from "@/components/site/RegisterForm";
import { Footer } from "@/components/site/Contact";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
  head: () => ({
    meta: [
      { title: "Register for 2027 — Grooming Gurus Cricket Tournament" },
      {
        name: "description",
        content:
          "2026 registrations are closed. Reserve your salon's spot for the Grooming Gurus Cricket Tournament 2027 in Vadodara. Squads of 8–15 players.",
      },
      { property: "og:title", content: "Register for 2027 — Grooming Gurus" },
      {
        property: "og:description",
        content: "2026 is sold out. Lock in your team for the 2027 edition of India's most stylish cricket league.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <RegisterForm />
      </main>
      <Footer />
      <Toaster theme="light" position="top-center" />
    </div>
  );
}
