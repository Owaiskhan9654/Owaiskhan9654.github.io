import { motion } from "motion/react";
import { ArrowUpRight, Github, Star } from "lucide-react";
import { Section } from "./Section";
import { projects, profile } from "../data/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 — Work"
      title="Featured projects"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
            className={`group glass relative flex flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-brand-400/50 ${
              project.featured ? "sm:col-span-1" : ""
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500/15 to-cyan-accent/15 text-brand-500 dark:text-brand-400">
                <Github size={19} />
              </span>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                {project.stars != null && (
                  <span className="flex items-center gap-1">
                    <Star size={14} className="fill-current" /> {project.stars}
                  </span>
                )}
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>

            <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-brand-500/10 px-2 py-0.5 text-xs font-medium text-brand-600 dark:text-brand-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 border-t border-slate-200/70 pt-3 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
              {project.language}
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10 text-center"
      >
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-white/15 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
        >
          <Github size={17} /> View all 196 repositories on GitHub
        </a>
      </motion.div>
    </Section>
  );
}
