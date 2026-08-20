import { motion } from "motion/react";
import { Award, GraduationCap, Trophy, BookOpen } from "lucide-react";
import { Section } from "./Section";
import { honors, education } from "../data/portfolio";

const iconFor = (title: string) => {
  if (title.includes("TIME100")) return Award;
  if (title.includes("Sony")) return Trophy;
  if (title.includes("Springer")) return BookOpen;
  return GraduationCap;
};

export function Honors() {
  return (
    <Section id="honors" eyebrow="05 — Recognition" title="Honors & education">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
            Achievements & honors
          </h3>
          {honors.map((h, i) => {
            const Icon = iconFor(h.title);
            const highlight = h.title.includes("TIME100");
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`glass flex gap-4 rounded-2xl p-5 ${
                  highlight ? "ring-1 ring-brand-500/40" : ""
                }`}
              >
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                    highlight
                      ? "bg-gradient-to-br from-brand-500 to-cyan-accent text-white"
                      : "bg-brand-500/10 text-brand-500 dark:text-brand-400"
                  }`}
                >
                  <Icon size={20} />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {h.title}
                    </h4>
                    <span className="font-mono text-xs text-slate-400">
                      {h.year}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {h.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
            Education
          </h3>
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass rounded-2xl p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  {e.school}
                </h4>
                <span className="shrink-0 font-mono text-xs text-slate-400">
                  {e.period}
                </span>
              </div>
              <p className="mt-1 text-brand-600 dark:text-brand-400">
                {e.degree}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {e.location}
              </p>
              {e.note && (
                <p className="mt-3 border-t border-slate-200/70 pt-3 text-sm text-slate-600 dark:border-white/10 dark:text-slate-400">
                  {e.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
