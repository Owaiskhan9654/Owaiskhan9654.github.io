import { motion } from "motion/react";
import { Star, BadgeCheck, MessageSquareQuote, ArrowUpRight, Video } from "lucide-react";
import { Section } from "./Section";
import { topmate } from "../data/portfolio";

export function Mentorship() {
  return (
    <Section
      id="mentorship"
      eyebrow="Mentorship"
      title={
        <>
          Mentoring on <span className="text-gradient">Topmate</span>
        </>
      }
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_1.15fr]">
        {/* Achievements card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="glass flex flex-col rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400">
            <BadgeCheck size={18} />
            <span className="text-sm font-semibold">Verified mentor</span>
          </div>

          <div className="mt-5 flex flex-wrap items-end gap-x-8 gap-y-4">
            <div>
              <div className="flex items-center gap-1.5">
                <Star size={22} className="fill-amber-400 text-amber-400" />
                <span className="font-display text-3xl font-bold text-slate-900 dark:text-white">
                  {topmate.rating}
                </span>
              </div>
              <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {topmate.ratingsCount} ratings
              </div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-gradient">
                {topmate.testimonials}
              </div>
              <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                testimonials
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {topmate.badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-600 dark:text-brand-300"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-6 space-y-3 border-t border-slate-200/70 pt-5 dark:border-white/10">
            {topmate.quotes.map((q) => (
              <figure key={q.quote} className="flex gap-3">
                <MessageSquareQuote
                  size={16}
                  className="mt-0.5 shrink-0 text-brand-500 dark:text-brand-400"
                />
                <figcaption className="text-sm text-slate-600 dark:text-slate-300">
                  “{q.quote}”
                  <span className="mt-0.5 block text-xs text-slate-400">
                    — {q.author}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <a
            href={topmate.url}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-transform hover:scale-[1.03]"
          >
            Book a session on Topmate <ArrowUpRight size={16} />
          </a>
        </motion.div>

        {/* Services grid */}
        <div className="grid gap-3 sm:grid-cols-2">
          {topmate.services.map((s, i) => (
            <motion.a
              key={s.title}
              href={topmate.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
              className="group glass flex items-start gap-3 rounded-xl p-4 transition-colors hover:border-brand-400/50"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-500/10 text-brand-500 dark:text-brand-400">
                <Video size={17} />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-semibold text-slate-900 dark:text-white">
                  {s.title}
                </span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">
                  {s.meta}
                </span>
              </span>
              <ArrowUpRight
                size={16}
                className="text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
