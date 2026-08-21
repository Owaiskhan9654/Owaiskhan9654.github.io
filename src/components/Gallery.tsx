import { motion } from "motion/react";
import { Section } from "./Section";
import { gallery } from "../data/portfolio";

export function Gallery() {
  return (
    <Section
      id="gallery"
      eyebrow="06 — Moments"
      title={
        <>
          Beyond the <span className="text-gradient">code</span>
        </>
      }
    >
      {/* Masonry columns: every photo is shown at its full, natural aspect
          ratio (w-full + h-auto) so nothing is ever cropped or misaligned,
          on desktop or mobile. */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
        {gallery.map((item, i) => (
          <motion.figure
            key={item.src}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 shadow-lg"
          >
            <img
              src={item.src}
              alt={item.caption}
              loading="lazy"
              className="block h-auto w-full transition-[filter] duration-500 group-hover:brightness-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1 p-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {item.caption}
            </figcaption>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-colors group-hover:ring-brand-400/50" />
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
