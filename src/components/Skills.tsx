import { motion } from "motion/react";
import { Section } from "./Section";
import { skillGroups } from "../data/portfolio";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & technologies">
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="mb-4 font-display text-base font-semibold text-slate-900 dark:text-white">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-brand-400 dark:hover:text-brand-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
