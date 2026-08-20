import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { profile } from "../data/portfolio";
import { KaggleIcon, LinktreeIcon } from "./icons";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "LinkedIn", value: "in/owaiskhan9654", href: profile.socials.linkedin, Icon: Linkedin },
  { label: "GitHub", value: "owaiskhan9654", href: profile.socials.github, Icon: Github },
  { label: "Kaggle", value: "owaiskhan9654", href: profile.socials.kaggle, Icon: KaggleIcon },
  { label: "Linktree", value: "linktr.ee/owaiskhan9654", href: profile.socials.linktree, Icon: LinktreeIcon },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="07 — Contact"
      title={
        <>
          Let&apos;s build something <span className="text-gradient">intelligent</span>
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="max-w-md text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            I'm always open to conversations about Generative AI, LLM systems,
            MLOps, and applied research. Reach out through any of these channels.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-transform hover:scale-[1.03]"
          >
            <Mail size={16} /> Say hello
          </a>
        </motion.div>

        <div className="grid gap-3">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group glass flex items-center gap-4 rounded-xl p-4 transition-colors hover:border-brand-400/50"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500/10 text-brand-500 dark:text-brand-400">
                <link.Icon size={18} className="h-[18px] w-[18px]" />
              </span>
              <div className="flex-1">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {link.label}
                </div>
                <div className="font-medium text-slate-900 dark:text-white">
                  {link.value}
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
