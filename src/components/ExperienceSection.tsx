import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";
import { experience } from "../data/portfolio";

export function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="Career" title="Where I've worked">
      <div className="relative">
        <div className="absolute top-2 bottom-2 left-[15px] w-px bg-gradient-to-b from-brand-500/60 via-slate-300 to-transparent sm:left-[19px] dark:via-white/10" />
        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pl-12 sm:pl-16"
            >
              <span
                className={`absolute left-0 grid h-8 w-8 place-items-center rounded-full sm:h-10 sm:w-10 ${
                  job.current
                    ? "bg-gradient-to-br from-brand-500 to-cyan-accent text-white shadow-lg shadow-brand-500/30"
                    : "border border-slate-200 bg-white text-brand-500 dark:border-white/10 dark:bg-[#0d0f1a] dark:text-brand-400"
                }`}
              >
                <Briefcase size={16} />
              </span>

              <div className="glass rounded-2xl p-6 transition-colors hover:border-brand-400/40">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="text-brand-600 dark:text-brand-400">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-right text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      {job.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          Current
                        </span>
                      )}
                      <span>{job.period}</span>
                    </div>
                    <div className="mt-1">{job.location}</div>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {job.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
