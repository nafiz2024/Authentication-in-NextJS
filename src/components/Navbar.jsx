"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";

const Navbar = () => {
  const { data, isPending } = useSession();
  const isAuthenticated = Boolean(data?.user);
  const userName = data?.user?.name || data?.user?.email || "User";
  const userEmail = data?.user?.email || "Authenticated session";
  const userInitials = userName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "U";

  const handleSignOut = async () => {
    const { error } = await signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logged out successfully.", {
            position: "top-center",
            autoClose: 3000,
            theme: "colored",
          });
        },
      },
    });

    if (error) {
      toast.error(`Error logging out: ${error.message}`, {
        position: "top-center",
        autoClose: 4000,
        theme: "colored",
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-4 rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(2,6,23,0.82))] px-4 py-3 shadow-[0_22px_70px_rgba(2,6,23,0.32)] backdrop-blur-xl sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 no-underline transition-transform duration-200 hover:-translate-y-0.5"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#38bdf8,#22c55e)] text-sm font-bold text-slate-950 shadow-[0_12px_30px_rgba(56,189,248,0.35)]">
            AN
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-wide text-slate-50">
              Auth Next
            </p>
            <p className="truncate text-xs text-slate-400">
              Secure flows, cleaner entry points
            </p>
          </div>
        </Link>

        <div className="order-3 hidden flex-1 justify-center lg:flex">
          {isAuthenticated ? (
            <div className="flex items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#34d399,#38bdf8)] text-xs font-bold text-slate-950">
                {userInitials}
              </div>
              <div className="max-w-[14rem]">
                <p className="truncate text-sm font-semibold text-emerald-50">
                  Welcome, {userName}
                </p>
                <p className="truncate text-xs text-emerald-100/70">
                  {userEmail}
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <div className="order-2 ml-auto flex items-center gap-2 md:order-3">
          {isPending ? (
            <div className="h-11 w-44 rounded-full border border-white/10 bg-white/5" />
          ) : isAuthenticated ? (
            <>
              <button
                type="button"
                onClick={handleSignOut}
                className="inline-flex h-11 items-center rounded-full border border-rose-400/25 bg-rose-400/10 px-4 py-2.5 text-sm font-semibold text-rose-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-400/40 hover:bg-rose-400/20 hover:text-white hover:shadow-[0_14px_36px_rgba(244,63,94,0.22)]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/signin"
                className="hidden h-11 items-center rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/12 hover:text-white hover:shadow-[0_10px_24px_rgba(15,23,42,0.28)] sm:inline-flex"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="inline-flex h-11 items-center rounded-full bg-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 no-underline shadow-[0_10px_30px_rgba(14,165,233,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-[0_14px_36px_rgba(14,165,233,0.4)]"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
