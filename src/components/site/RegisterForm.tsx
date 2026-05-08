import { useState } from "react";
import { toast } from "sonner";

// ─── CONFIG — update before going live ────────────────────────────────────
const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbxg-TkX_b2-zAbxHYquet0kFhYtpay0WbWYeOrF6uYSg1t2_mJiTIUDj4HoCgbBPRtxpg/exec";
const MAILER_URL = "https://mailer-5x4h33dpla-uc.a.run.app/";
const NOTIFY_EMAIL = ["gromminggurus@gmail.com"];
// ──────────────────────────────────────────────────────────────────────────

export function RegisterForm() {
  const [players, setPlayers] = useState(8);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    salon: "",
    owner: "",
    team: "",
    mobile: "",
    email: "",
  });

  const totalCost = 5000 + players * 2000;

  const setField =
    (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Required field check
    if (
      !form.salon ||
      !form.owner ||
      !form.team ||
      !form.mobile ||
      !form.email
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    // Mobile validation (Indian 10-digit)
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(form.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const payload = {
      submittedAt,
      salonName: form.salon,
      ownerName: form.owner,
      teamName: form.team,
      mobile: form.mobile,
      email: form.email,
      players,

      notifyEmail: NOTIFY_EMAIL,
    };
      // totalAmount: `₹${totalCost.toLocaleString("en-IN")}`,
    const emailData = {
      emails: NOTIFY_EMAIL,
      subject: "New Salon Tournament Registration – 2027",
      message: `
        <h3>New Team Registration (2027 Season)</h3>
        <strong>Salon Name</strong>: ${form.salon}<br/>
        <strong>Owner Name</strong>: ${form.owner}<br/>
        <strong>Team Name</strong>: ${form.team}<br/>
        <strong>Mobile</strong>: ${form.mobile}<br/>
        <strong>Email</strong>: ${form.email}<br/>
        <strong>Players</strong>: ${players}<br/>
        
        <strong>Submitted At</strong>: ${submittedAt}<br/>
      `,
    };
// <strong>Total Amount</strong>: ₹${totalCost.toLocaleString("en-IN")}<br/>
    try {
      const [emailResponse] = await Promise.all([
        fetch(MAILER_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailData),
        }),
        fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }),
      ]);

      if (!emailResponse.ok) throw new Error("Email notification failed");

      toast.success(
        "2027 registration received! We'll contact you shortly."
      );
      setForm({ salon: "", owner: "", team: "", mobile: "", email: "" });
      setPlayers(8);
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="section-light relative py-24 sm:py-32">
      <div className="container-page max-w-4xl">
        <div className="text-center mb-12">
          <p className="font-display tracking-[0.4em] text-primary text-sm">
            SEASON 2027
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl">
            REGISTER FOR <span className="text-gradient-primary">2027</span>
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs font-semibold text-red-300 uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
            2026 Registrations Closed
          </div>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            The 2026 season is full. Submit your team details below to lock in
            your spot for the 2027 edition.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-navy-deep/15 bg-card p-6 sm:p-10 shadow-card-elevated"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field
              label="Salon Name"
              value={form.salon}
              onChange={setField("salon")}
            />
            <Field
              label="Name of Salon Owner"
              value={form.owner}
              onChange={setField("owner")}
            />
            <Field
              label="Team Name"
              value={form.team}
              onChange={setField("team")}
            />
            <Field
              label="Mobile Number"
              value={form.mobile}
              onChange={setField("mobile")}
              type="tel"
            />
            <div className="sm:col-span-2">
              <Field
                label="Email"
                value={form.email}
                onChange={setField("email")}
                type="email"
              />
            </div>
          </div>

          {/* Player count slider */}
          <div className="mt-8">
            <label className="block text-sm font-semibold text-foreground mb-2">
              How many players do you want to register?
            </label>
            <p className="text-xs text-muted-foreground mb-3">
              Min 8, Max 15 · 8 players play at a time
            </p>
            <div className="flex items-center gap-4">
              <span className="font-display text-3xl text-primary w-16">
                {players}
              </span>
              <input
                type="range"
                min={8}
                max={15}
                value={players}
                onChange={(e) => setPlayers(Number(e.target.value))}
                className="flex-1 accent-[oklch(0.82_0.16_85)]"
              />
              <span className="text-xs text-muted-foreground">8 — 15</span>
            </div>
          </div>

          {/* Cost breakdown */}
          {/* <div className="mt-6 rounded-xl border border-navy-deep/15 bg-background px-5 py-4 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Salon registration fee</span>
              <span>₹5,000</span>
            </div>
            <div className="flex justify-between text-muted-foreground mt-1">
              <span>
                {players} players × ₹2,000
              </span>
              <span>₹{(players * 2000).toLocaleString("en-IN")}</span>
            </div>
            <div className="mt-3 flex justify-between font-bold text-foreground border-t border-navy-deep/15 pt-3">
              <span>Total</span>
              <span className="text-primary">
                ₹{totalCost.toLocaleString("en-IN")}
              </span>
            </div>
          </div> */}

          <p className="mt-6 text-xs text-muted-foreground">
            Note: Salon registration will be done first, followed by player
            registration. Our team will reach out with full details after you
            submit.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 w-full inline-flex items-center justify-center rounded-full bg-gradient-sunset px-8 py-4 text-base font-bold text-white shadow-primary hover:scale-[1.01] transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? "SUBMITTING…" : "SUBMIT 2027 REGISTRATION"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-navy-deep/15 bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition"
        placeholder={label}
      />
    </label>
  );
}