"use client";

import React from "react";
import { motion } from "framer-motion";
import { journey } from "@/data/content";

export default function LearningJourney() {
  return (
    <section id="journey" className="w-full bg-[#F4F1EA] text-[#1C1C1C] py-10 px-6 md:px-12 lg:px-16 border-t border-[#1C1C1C]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Layout Container: Grid splitting Title on the Left and Horizontal Flow Timeline on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          
          {/* Left Column: Heading & Description (Col Span 3) */}
          <div className="lg:col-span-3 space-y-2">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#1C1C1C]/60">
              {journey.eyebrow}
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-black text-3xl sm:text-4xl tracking-tight leading-[0.9] text-[#1C1C1C]"
            >
              LEARNING<br />
              JOURNEY
            </motion.h2>

            <div className="w-10 h-[2px] bg-[#1A382B] my-2"></div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs sm:text-sm text-[#1C1C1C]/70 leading-relaxed font-normal max-w-[220px]"
            >
              {journey.heading}
            </motion.p>
          </div>

          {/* Right Column: Horizontal Timeline Flow (Col Span 9) */}
          <div className="lg:col-span-9 pt-2 lg:pt-3 overflow-x-auto pb-2">
            <div className="relative min-w-[640px] lg:min-w-0">
              
              {/* Connecting Horizontal Line Behind Nodes */}
              <div className="absolute top-[15px] left-[20px] right-[20px] h-[1.5px] bg-[#1A382B]/20 z-0"></div>

              {/* Steps Grid */}
              <div className="grid grid-cols-5 gap-4 relative z-10">
                {journey.stages.map((stage, index) => (
                  <motion.div
                    key={stage.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="flex flex-col items-start space-y-3 pr-2"
                  >
                    {/* Node Circle */}
                    <div className="w-7 h-7 rounded-full bg-[#F4F1EA] border border-[#1A382B] flex items-center justify-center text-xs font-black text-[#1A382B] shadow-sm">
                      {stage.number}
                    </div>

                    {/* Stage Content */}
                    <div className="space-y-1.5">
                      <h3 className="text-[11px] font-extrabold tracking-[0.15em] text-[#1A382B] uppercase leading-snug">
                        {stage.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#1C1C1C]/75 leading-relaxed font-normal">
                        {stage.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
