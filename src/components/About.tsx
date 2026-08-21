import { motion } from "motion/react";
import { Section } from "./Section";
import { profile, stats } from "../data/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Who I am">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-lg leading-relaxed text-slate-600 dark:text-slate-300"
        >
          {profile.summary}
        </motion.p>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass rounded-2xl p-5"
            >
              <div className="font-display text-3xl font-bold text-gradient">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
