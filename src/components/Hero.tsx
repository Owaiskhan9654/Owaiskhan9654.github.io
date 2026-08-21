import { motion } from "motion/react";
import {
  ArrowDown,
  Award,
  CalendarCheck,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
} from "lucide-react";
import { profile } from "../data/portfolio";
import { KaggleIcon } from "./icons";

// Explicit, self-contained entrance reveal (no variant propagation).
const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 pb-20 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="order-1 lg:order-1">
          <motion.div
            {...reveal(0.05)}
            className="flex flex-wrap items-center gap-2.5"
          >
            <a
              href="#experience"
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Data Science Manager · Ministry of Electronics &amp; IT
            </a>
            <a
              href="#honors"
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-300"
            >
              <Award size={15} className="text-brand-500 dark:text-brand-400" />
              TIME100 AI 2025 Honoree
            </a>
          </motion.div>

          <motion.h1
            {...reveal(0.14)}
            className="mt-8 font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            {...reveal(0.24)}
            className="mt-3 font-display text-xl font-semibold sm:text-2xl"
          >
            <span className="text-gradient">{profile.role}</span>
          </motion.p>

          <motion.p
            {...reveal(0.3)}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            {...reveal(0.36)}
            className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
          >
            <MapPin size={15} /> {profile.location}
          </motion.div>

          <motion.div {...reveal(0.42)} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-transform hover:scale-[1.03]"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-white/15 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div {...reveal(0.48)} className="mt-8 flex items-center gap-3">
            {[
              { href: profile.socials.github, label: "GitHub", Icon: Github },
              { href: profile.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: profile.socials.topmate, label: "Topmate", Icon: CalendarCheck },
              { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-brand-400"
              >
                <Icon size={19} />
              </a>
            ))}
            <a
              href={profile.socials.kaggle}
              target="_blank"
              rel="noreferrer"
              aria-label="Kaggle"
              className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-brand-400"
            >
              <KaggleIcon className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div {...reveal(0.3)} className="relative order-2 lg:order-2">
          <Portrait />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="block"
        >
          <ArrowDown size={22} />
        </motion.span>
      </motion.a>
    </section>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Glow ring */}
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-500/40 via-cyan-accent/30 to-fuchsia-500/30 opacity-70 blur-2xl" />

      {/* Frame */}
      <div className="animate-float-y relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 p-1.5 shadow-2xl shadow-brand-500/20 backdrop-blur-sm">
        <div className="overflow-hidden rounded-[1.35rem]">
          <img
            src="/images/meity.webp"
            alt="Owais Ahmad at the Ministry of Electronics & IT, Government of India"
            width={1685}
            height={2247}
            loading="eager"
            className="block w-full"
          />
        </div>
        <div className="pointer-events-none absolute inset-1.5 rounded-[1.35rem] ring-1 ring-inset ring-white/10" />
      </div>

      {/* Floating stat badges */}
      <motion.div
        {...reveal(0.4)}
        className="absolute -left-5 top-8 hidden rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-md sm:-left-9 sm:block dark:border-white/10 dark:bg-slate-900/85"
      >
        <div className="font-display text-2xl font-bold text-gradient">7+</div>
        <div className="text-xs font-medium text-slate-600 dark:text-slate-300">
          Years in AI
        </div>
      </motion.div>

      <motion.div
        {...reveal(0.47)}
        className="absolute -right-4 bottom-20 hidden items-center gap-2.5 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-md sm:-right-9 sm:flex dark:border-white/10 dark:bg-slate-900/85"
      >
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-accent text-white shadow-lg shadow-brand-500/30">
          <Rocket size={17} />
        </span>
        <span className="text-left">
          <span className="block font-display text-sm font-bold text-slate-900 dark:text-white">
            Research → Production
          </span>
          <span className="block text-[11px] text-slate-500 dark:text-slate-400">
            AI that ships
          </span>
        </span>
      </motion.div>

      <motion.div
        {...reveal(0.54)}
        className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/60 bg-white/90 px-4 py-2 shadow-2xl shadow-black/20 backdrop-blur-md sm:flex dark:border-white/10 dark:bg-slate-900/85"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-xs font-medium whitespace-nowrap text-slate-700 dark:text-slate-200">
          Open to collaboration
        </span>
      </motion.div>
    </div>
  );
}
