import { profile } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-slate-500 sm:flex-row sm:px-8 dark:text-slate-400">
        <p>
          © {profile.name}. Built with React, Vite, Tailwind &amp; Motion.
        </p>
        <p className="font-mono text-xs">
          Designed &amp; developed with intent · {profile.location}
        </p>
      </div>
    </footer>
  );
}
