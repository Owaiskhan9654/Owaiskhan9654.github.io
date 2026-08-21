import { motion } from "motion/react";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { publications } from "../data/portfolio";

export function Publications() {
  return (
    <Section
      id="publications"
      eyebrow="05 — Research"
      title={
        <>
          Publications &amp; <span className="text-gradient">research</span>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {publications.map((pub, i) => (
          <motion.a
            key={pub.href}
            href={pub.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
            className="group glass flex items-start gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-brand-400/50"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500/15 to-cyan-accent/15 text-brand-500 dark:text-brand-400">
              <BookOpen size={20} />
            </span>
            <div className="flex-1">
              <h3 className="font-display text-base font-semibold leading-snug text-slate-900 dark:text-white">
                {pub.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {pub.venue}
              </p>
              <p className="mt-1 font-mono text-xs text-slate-400">{pub.year}</p>
            </div>
            <ArrowUpRight
              size={18}
              className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-500"
            />
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
