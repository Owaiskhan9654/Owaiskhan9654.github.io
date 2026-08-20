import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Moon, Sun, X, FileText } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import { useTheme } from "../hooks/useTheme";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#070810]/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-cyan-accent font-mono text-sm text-white shadow-lg shadow-brand-500/25">
            OA
          </span>
          <span className="hidden text-slate-900 sm:inline dark:text-white">
            Owais Ahmad
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-brand-400"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform hover:scale-[1.03] sm:flex"
          >
            <FileText size={15} /> Resume
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-600 md:hidden dark:border-white/10 dark:text-slate-300"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200/70 bg-white/95 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-[#070810]/95"
          >
            <div className="flex flex-col px-5 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 px-4 py-3 text-sm font-semibold text-white"
              >
                <FileText size={15} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
