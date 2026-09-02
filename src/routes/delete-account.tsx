import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SUPPORT_EMAIL } from "@/lib/site";

const title = "Delete your account | Sukoontalk";
const description =
  "Request deletion of your Sukoontalk account and associated data. Requests are actioned within 3 business days.";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DeleteAccountPage,
});

type Errors = Partial<Record<"name" | "phone" | "email", string>>;

function DeleteAccountPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[+\d][\d\s-]{7,16}$/.test(phone.trim()))
      next.phone = "Enter the mobile number registered with the app.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Enter a valid email address.";
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const body = [
      "Account deletion request",
      "",
      `Name: ${name.trim()}`,
      `Registered phone: ${phone.trim()}`,
      `Email: ${email.trim()}`,
      `Reason: ${reason.trim() || "Not provided"}`,
      "",
      "I confirm I am the owner of this account and request permanent deletion of my account and associated data.",
    ].join("\n");

    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      "Account deletion request - Sukoontalk",
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Delete your account
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Submit the form below with the details registered on the app. Once we verify your request,
        your account and associated personal data are permanently deleted within{" "}
        <strong className="text-foreground">3 business days</strong>. You can also delete your
        account in the app from Menu → Delete your account.
      </p>

      {submitted ? (
        <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h2 className="text-base font-semibold text-foreground">Request prepared</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Your email app should have opened with the request pre-filled — please send it to
                complete the request. If nothing opened, email{" "}
                <a className="font-medium text-primary" href={`mailto:${SUPPORT_EMAIL}`}>
                  {SUPPORT_EMAIL}
                </a>{" "}
                with your name, registered phone number and email address.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Your account will be deleted within 3 business days of verification.
              </p>
              <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>
                Submit another request
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="As registered on the app"
              autoComplete="name"
            />
            {errors.name ? <p className="text-xs text-destructive">{errors.name}</p> : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Registered phone number</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              inputMode="tel"
              autoComplete="tel"
            />
            {errors.phone ? <p className="text-xs text-destructive">{errors.phone}</p> : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
            {errors.email ? <p className="text-xs text-destructive">{errors.email}</p> : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Reason (optional)</Label>
            <Textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              placeholder="Tell us why you're leaving, if you'd like."
            />
          </div>

          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Submit deletion request
          </Button>
        </form>
      )}

      <div className="mt-12 rounded-xl border border-border bg-secondary/50 p-6">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div className="text-sm leading-relaxed text-muted-foreground">
            <h2 className="text-base font-semibold text-foreground">What gets deleted</h2>
            <ul className="mt-3 space-y-2">
              <li>• Your profile details: name, phone number, email and date of birth.</li>
              <li>• Your chat and call history, recordings and uploaded media.</li>
              <li>• Any unused wallet balance and credits, which are forfeited on deletion.</li>
            </ul>
            <p className="mt-4">
              Transaction and invoice records may be retained for the period required by applicable
              tax and accounting law. See our{" "}
              <Link to="/privacy" className="font-medium text-primary">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
