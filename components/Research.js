"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import { research } from "@/data/content";

export default function ResearchExploration() {
  const hasCertificate = Boolean(research.workshopName);

  return (
    <section id="research" className="w-full bg-[#F4F1EA] text-[#1C1C1C] py-10 px-6 md:px-12 lg:px-16 border-t border-[#1C1C1C]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid Layout: 3 Columns for Title, 5 for Certificate Card, 4 for Side Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Title & Description (Col Span 3) */}
          <div className="lg:col-span-3 space-y-2">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#1C1C1C]/60">
              {research.eyebrow}
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-black text-3xl sm:text-4xl tracking-tight leading-[0.9] text-[#1C1C1C]"
            >
              RESEARCH &<br />
              EXPLORATION
            </motion.h2>

            <div className="w-10 h-[2px] bg-[#1A382B] my-2"></div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs sm:text-sm text-[#1C1C1C]/70 leading-relaxed font-normal max-w-[240px]"
            >
              {research.heading}
            </motion.p>
          </div>

          {/* Middle Column: Certificate Card (Col Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 border border-[#1C1C1C]/10 bg-[#F1EEE6] p-4 flex flex-col sm:flex-row items-center gap-6 shadow-sm"
          >
            {/* Certificate Preview Frame */}
            <div className="w-full sm:w-[150px] h-[100px] bg-white border border-[#1C1C1C]/15 overflow-hidden relative flex-shrink-0 flex items-center justify-center shadow-inner">
              {research.certificateImage ? (
                <Image
                  src={research.certificateImage}
                  alt="Certificate Preview"
                  fill
                  className="object-contain bg-white"
                />
              ) : (
                <div className="text-center p-3 space-y-1">
                  <Award className="w-6 h-6 text-[#1A382B] mx-auto opacity-60" />
                  <p className="text-[9px] font-bold tracking-widest uppercase text-[#1C1C1C]/40">Certificate</p>
                </div>
              )}
            </div>

            {/* Certificate Meta Details */}
            <div className="space-y-3 w-full">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#1A382B] uppercase">
                  Research Workshop
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-[#1C1C1C]">
                  {hasCertificate ? research.workshopName : "(Workshop Name)"}
                </h3>
                <p className="text-[11px] text-[#1C1C1C]/70">
                  Organized by {hasCertificate ? research.organization : "(Organization)"}
                </p>
                {research.date && <p className="text-[11px] text-[#1C1C1C]/60">Date: {research.date}</p>}
              </div>

              {/* View Certificate Link */}
              <div>
                {hasCertificate && research.certificateUrl ? (
                  <a
                    href={research.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-[10px] font-extrabold tracking-[0.18em] uppercase text-[#1A382B] hover:underline group pt-1"
                  >
                    <span>View Certificate</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </a>
                ) : (
                  <span className="inline-flex items-center space-x-2 text-[10px] font-extrabold tracking-[0.18em] uppercase text-[#1C1C1C]/40 cursor-not-allowed pt-1">
                    <span>View Certificate</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Neural / AI Visual Banner (Col Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 relative h-[180px] overflow-hidden border border-[#1C1C1C]/10 bg-[#0F1E17] flex items-center px-8"
          >
            <Image
              src="/images/model-banner.jpg"
              alt="Smarter solutions, a new standard — AI and machine learning visual"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

