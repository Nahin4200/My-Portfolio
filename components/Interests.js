"use client";

import { motion } from "framer-motion";
import { interests } from "@/data/content";

export default function Interests() {
  return (
    <section id="interests" className="w-full bg-[#F4F1EA] text-[#1C1C1C] py-20 px-6 md:px-12 lg:px-16 border-t border-[#1C1C1C]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Eyebrow Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#1C1C1C]/60 mb-8"
        >
          {interests.eyebrow}
        </motion.p>

        {/* Interests List */}
        <ul className="flex flex-col divide-y divide-[#1C1C1C]/15 border-t border-[#1C1C1C]/15">
          {interests.items.map((item, i) => {
            const formattedNum = String(i + 1).padStart(2, "0");
            return (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
                className="group flex items-baseline justify-between py-6 sm:py-8 transition-colors hover:bg-[#EFECE4]/40 px-2 rounded-lg"
              >
                <span className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#1C1C1C] transition-colors group-hover:text-[#1A382B]">
                  {item}
                </span>
                <span className="hidden font-mono text-sm font-bold text-[#1A382B] tracking-widest sm:block">
                  {formattedNum}
                </span>
              </motion.li>
            );
          })}
        </ul>

      </div>
    </section>
  );
}