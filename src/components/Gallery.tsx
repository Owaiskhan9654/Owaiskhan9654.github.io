import { motion } from "motion/react";
import { Section } from "./Section";
import { gallery } from "../data/portfolio";

export function Gallery() {
  return (
    <Section
      id="gallery"
      eyebrow="05 — Moments"
      title={
        <>
          Beyond the <span className="text-gradient">code</span>
        </>
      }
    >
      <div className="grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] md:grid-cols-4">
        {gallery.map((item, i) => (
          <motion.figure
            key={item.src}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 shadow-lg ${
              item.span === "wide"
                ? "col-span-2 row-span-1"
                : "row-span-2"
            }`}
          >
            <img
              src={item.src}
              alt={item.caption}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90" />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 p-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {item.caption}
            </figcaption>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-colors group-hover:ring-brand-400/50" />
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
