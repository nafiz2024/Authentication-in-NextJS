"use client";

import { useSession } from "@/lib/auth-client";
import { Card, Chip, Link } from "@heroui/react";

const quickStats = [
  { label: "Auth State", signedOut: "Guest mode", signedIn: "Signed in" },
  { label: "Entry Flow", signedOut: "Ready to register", signedIn: "Ready to continue" },
  { label: "Security", signedOut: "Protected setup", signedIn: "Session active" },
];

export default function Home() {
  const { data, isPending } = useSession();
  const isAuthenticated = Boolean(data?.user);
  const userName = data?.user?.name || data?.user?.email || "User";

  return (
    <main className="relative isolate min-h-[calc(100vh-6rem)] overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.12),_transparent_25%),linear-gradient(180deg,_rgba(5,8,22,0.96)_0%,_rgba(9,14,30,0.98)_52%,_rgba(5,8,22,1)_100%)]" />
      <div className="absolute left-[-6rem] top-20 -z-10 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute right-[-7rem] bottom-10 -z-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <Card className="border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(2,6,23,0.82))] shadow-[0_24px_80px_rgba(2,6,23,0.34)] backdrop-blur-xl">
          <Card.Content className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-5">
              <Chip className="border border-sky-400/20 bg-sky-400/10 text-sky-200">
                Authentication in Next.js
              </Chip>

              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
                  {isPending
                    ? "Checking your session..."
                    : isAuthenticated
                      ? `Welcome back, ${userName}`
                      : "A simple and clean authentication starter"}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  {isPending
                    ? "Your current session state is loading."
                    : isAuthenticated
                      ? "You are already signed in. Your session is active and ready, and you can manage access directly from the navbar."
                      : "Built for straightforward sign up, sign in, and session-aware navigation without unnecessary clutter."}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {isAuthenticated ? (
                  <>
                    <Link
                      href="/"
                      className="inline-flex h-12 items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-6 text-sm font-semibold text-emerald-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-400/15"
                    >
                      Session active
                    </Link>
                    <Link
                      href="/auth/signin"
                      className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      Revisit sign in
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/signup"
                      className="inline-flex h-12 items-center justify-center rounded-full bg-sky-500 px-6 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-400"
                    >
                      Create account
                    </Link>
                    <Link
                      href="/auth/signin"
                      className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      Sign in instead
                    </Link>
                  </>
                )}
              </div>
            </div>

            <Card className="border border-white/10 bg-white/5 shadow-none">
              <Card.Header className="p-6 pb-3">
                <Card.Title className="text-xl font-semibold text-slate-50">
                  Live Status
                </Card.Title>
                <Card.Description className="mt-2 text-sm text-slate-400">
                  A quick snapshot of the current authentication state.
                </Card.Description>
              </Card.Header>
              <Card.Content className="space-y-3 p-6 pt-2">
                {quickStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-slate-950/45 p-4"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-100">
                      {isPending
                        ? "Loading..."
                        : isAuthenticated
                          ? item.signedIn
                          : item.signedOut}
                    </p>
                  </div>
                ))}
              </Card.Content>
            </Card>
          </Card.Content>
        </Card>
      </section>
    </main>
  );
}
