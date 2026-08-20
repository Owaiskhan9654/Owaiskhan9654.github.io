import { motion } from "motion/react";
import {
  ArrowDown,
  Award,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { profile } from "../data/portfolio";
import { KaggleIcon } from "./icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 pb-16 sm:px-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[10%] h-[36rem] w-[36rem] rounded-full bg-brand-500/20 blur-[140px] dark:bg-brand-500/25" />
        <div className="absolute right-[5%] bottom-[0%] h-[32rem] w-[32rem] rounded-full bg-cyan-accent/15 blur-[140px] dark:bg-cyan-accent/20" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.a
            variants={item}
            href="#honors"
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-300"
          >
            <Award size={15} className="text-brand-500 dark:text-brand-400" />
            TIME100 AI 2025 Honoree
          </motion.a>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-display text-xl font-semibold sm:text-2xl"
          >
            <span className="text-gradient">{profile.role}</span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
          >
            <MapPin size={15} /> {profile.location}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
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

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            {[
              { href: profile.socials.github, label: "GitHub", Icon: Github },
              { href: profile.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
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

        <motion.div variants={item} className="relative">
          <TerminalCard />
        </motion.div>
      </motion.div>

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

function TerminalCard() {
  return (
    <div className="glass rounded-2xl p-1 shadow-2xl shadow-brand-500/10">
      <div className="rounded-xl bg-slate-950/90 font-mono text-[13px] leading-relaxed text-slate-300">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-2 text-xs text-slate-500">owais@ai — profile.py</span>
        </div>
        <div className="space-y-1.5 p-5">
          <p>
            <span className="text-brand-400">class</span>{" "}
            <span className="text-cyan-accent">Engineer</span>:
          </p>
          <p className="pl-4">
            name = <span className="text-emerald-400">"Owais Ahmad"</span>
          </p>
          <p className="pl-4">
            focus = [
            <span className="text-emerald-400">"GenAI"</span>,{" "}
            <span className="text-emerald-400">"LLMs"</span>,{" "}
            <span className="text-emerald-400">"MLOps"</span>]
          </p>
          <p className="pl-4">
            stack = [
            <span className="text-emerald-400">"watsonx"</span>,{" "}
            <span className="text-emerald-400">"Azure"</span>,{" "}
            <span className="text-emerald-400">"LangGraph"</span>]
          </p>
          <p className="pl-4">
            experience = <span className="text-amber-300">7</span> <span className="text-slate-500"># years</span>
          </p>
          <p className="pt-2">
            <span className="text-brand-400">def</span>{" "}
            <span className="text-cyan-accent">ship</span>(self):
          </p>
          <p className="pl-4">
            <span className="text-brand-400">return</span>{" "}
            <span className="text-emerald-400">"production-grade AI"</span>
          </p>
          <p className="pt-2 text-slate-500">
            <span className="text-green-400">$</span> deploying...{" "}
            <span className="animate-pulse">▋</span>
          </p>
        </div>
      </div>
    </div>
  );
}
