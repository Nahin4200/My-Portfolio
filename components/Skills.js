"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Cpu } from "lucide-react";
import { skills } from "@/data/content";

export default function SkillsToolkit() {
  // Map icons to the categories based on index or title
  const categoryIcons = [
    <Code key="0" className="w-4 h-4 text-[#1A6957]" />,
    <Globe key="1" className="w-4 h-4 text-[#1A6957]" />,
    <Cpu key="2" className="w-4 h-4 text-[#1A6957]" />,
  ];

  return (
    <section id="skills" className="w-full bg-[#F4F1EA] text-[#1C1C1C] py-10 px-6 md:px-12 lg:px-16 border-t border-[#1C1C1C]/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Title & Description */}
          <div className="lg:col-span-3 space-y-2">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#1C1C1C]/60">
              {skills.eyebrow}
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-black text-3xl sm:text-4xl tracking-tight leading-[0.9] text-[#1C1C1C]"
            >
              SKILLS &<br />
              TOOLKIT
            </motion.h2>

            <div className="w-10 h-[2px] bg-[#1A382B] my-2"></div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs sm:text-sm text-[#1C1C1C]/70 leading-relaxed font-normal max-w-[220px]"
            >
              {skills.heading}
            </motion.p>
          </div>

          {/* Right Columns: Dynamic Category Columns */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-4">
            {skills.categories.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.15 }}
                className="space-y-3 md:border-l md:border-[#1C1C1C]/15 md:pl-6 first:border-l-0 first:pl-0"
              >
                {/* Category Header with Icon */}
                <div className="space-y-3">
                  <div className="w-fit text-[#1A6957]">
                    {categoryIcons[catIdx] || <Code className="w-4 h-4 text-[#1A6957]" />}
                  </div>
                  <h3 className="text-[11px] font-extrabold tracking-[0.2em] text-[#1C1C1C] uppercase">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills List Generated Dynamically */}
                <ul className="space-y-1 pt-0">
                  {cat.items.map((itemName, index) => {
                    const formattedNum = String(index + 1).padStart(2, "0");
                    return (
                      <li key={itemName} className="flex items-center space-x-4 text-xs sm:text-sm">
                        <span className="text-[11px] font-bold text-[#1A382B] tracking-wider w-6">
                          {formattedNum}
                        </span>
                        <span className="font-medium text-[#1C1C1C]/90">
                          {itemName}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
