import { motion } from "motion/react";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 md:py-20 ${className ?? ""}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8"
      >
        <p className="mb-3 font-mono text-sm font-medium tracking-widest text-brand-500 uppercase dark:text-brand-400">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  );
}
