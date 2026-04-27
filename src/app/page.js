import { Card, Chip, Link } from "@heroui/react";

const highlights = [
  {
    title: "Frictionless Sign Up",
    description:
      "New users can move from curiosity to account creation without getting lost in noisy screens.",
  },
  {
    title: "Safer Sessions",
    description:
      "Authentication flows stay clear, trusted, and ready for the kind of apps that need reliability first.",
  },
  {
    title: "Built For Scale",
    description:
      "A clean Next.js auth base makes it easier to add onboarding, roles, and protected experiences later.",
  },
];

const stats = [
  { value: "JWT + DB", label: "Flexible auth foundation" },
  { value: "Fast UI", label: "HeroUI powered landing" },
  { value: "Ready", label: "Signup flow expansion" },
];

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_45%),radial-gradient(circle_at_20%_20%,_rgba(34,197,94,0.14),_transparent_30%),linear-gradient(180deg,_#f8fffc_0%,_#eef6ff_52%,_#f6f7fb_100%)]" />
      <div className="absolute left-[-8rem] top-24 -z-10 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute right-[-6rem] top-16 -z-10 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl" />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <Card className="border border-white/60 bg-white/70 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <Card.Content className="flex flex-col gap-8 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
            <div className="max-w-3xl space-y-5">
              <Chip
                className="border border-emerald-200 bg-emerald-50 text-emerald-700"
                variant="solid"
              >
                Authentication in Next.js
              </Chip>
              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Secure entry points for modern products should feel premium,
                  fast, and trustworthy.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  This homepage is designed around the project&apos;s core idea:
                  authentication that feels simple for users, while giving your
                  Next.js app a strong foundation for real-world growth.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/auth/signup"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Start with Sign Up
                </Link>
                <Link
                  href="#auth-overview"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50"
                >
                  Explore the flow
                </Link>
              </div>
            </div>

            <Card className="w-full max-w-md border border-slate-200/80 bg-slate-950 text-white shadow-2xl shadow-slate-900/20">
              <Card.Header className="flex items-start justify-between gap-4 p-6 pb-3">
                <div>
                  <Card.Title className="text-xl font-semibold">
                    Identity Snapshot
                  </Card.Title>
                  <Card.Description className="mt-2 text-sm text-slate-300">
                    A compact overview block that sells confidence before users
                    even reach the form.
                  </Card.Description>
                </div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Protected
                </div>
              </Card.Header>
              <Card.Content className="space-y-4 p-6 pt-2">
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3"
                    >
                      <p className="text-sm font-semibold text-white">
                        {item.value}
                      </p>
                      <p className="mt-2 text-xs leading-5 text-slate-300">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-200">
                    Clean access, clear intent, and a layout that immediately
                    tells users their account journey is in the right place.
                  </p>
                </div>
              </Card.Content>
            </Card>
          </Card.Content>
        </Card>

        <section
          id="auth-overview"
          className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <Card className="border border-slate-200/80 bg-white/80 shadow-[0_10px_35px_rgba(148,163,184,0.18)] backdrop-blur">
            <Card.Header className="p-6 pb-2 sm:p-8">
              <Card.Title className="text-2xl font-semibold text-slate-950 sm:text-3xl">
                A homepage that matches an auth-first product
              </Card.Title>
              <Card.Description className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Instead of a generic starter screen, the layout now emphasizes
                security, onboarding clarity, and confidence-building messaging.
              </Card.Description>
            </Card.Header>
            <Card.Content className="grid gap-4 p-6 pt-4 sm:grid-cols-3 sm:p-8">
              {highlights.map((item, index) => (
                <Card
                  key={item.title}
                  className="border border-slate-200 bg-slate-50/90 shadow-none"
                >
                  <Card.Content className="space-y-3 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                      0{index + 1}
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h2>
                    <p className="text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </Card.Content>
                </Card>
              ))}
            </Card.Content>
          </Card>

          <Card className="border border-sky-100 bg-[linear-gradient(180deg,_rgba(14,165,233,0.12),_rgba(255,255,255,0.95))] shadow-[0_10px_35px_rgba(14,165,233,0.12)]">
            <Card.Header className="p-6 pb-3 sm:p-8">
              <Card.Title className="text-2xl font-semibold text-slate-950">
                Next step for this project
              </Card.Title>
              <Card.Description className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                The homepage now points users toward the core action and sets a
                clean visual system for your auth screens to follow.
              </Card.Description>
            </Card.Header>
            <Card.Content className="space-y-4 p-6 pt-2 sm:p-8">
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-5">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-700">
                  Suggested route
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">
                  Home → Sign Up → Auth Success
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  This creates a clear first impression and naturally guides the
                  user into the account creation experience.
                </p>
              </div>
              <Link
                href="/auth/signup"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-950 bg-slate-950 px-6 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Open signup page
              </Link>
            </Card.Content>
          </Card>
        </section>
      </section>
    </main>
  );
}
