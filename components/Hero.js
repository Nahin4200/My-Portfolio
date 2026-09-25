"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden border-b border-[#1C1C1C]/10 bg-[#F4F1EA] px-6 text-[#1C1C1C] sm:px-10 lg:h-[480px] lg:px-12">
      <div className="relative mx-auto h-full max-w-[1440px]">
        <div className="grid min-h-[calc(100svh-5rem)] grid-cols-1 items-center lg:min-h-0 lg:h-full lg:grid-cols-12 lg:gap-0">
          <div className="relative z-20 space-y-4 py-10 lg:col-span-7 lg:space-y-3 lg:py-0">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.22em] text-[#1C1C1C]/70 sm:text-[11px]">
              COMPUTER SCIENCE &amp; ENGINEERING<br />METROPOLITAN UNIVERSITY
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-display text-[clamp(5.5rem,7.5vw,9rem)] font-black uppercase leading-[0.78] tracking-[-0.045em] text-[#111214]">
              {profile.firstLine}<br />{profile.secondLine}
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 font-mono text-xs font-bold tracking-[0.12em] text-[#244b3e] sm:text-sm">
              <span>CSE STUDENT</span><span className="font-light">|</span><span>ASPIRING AI/ML ENGINEER</span>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="max-w-md text-sm font-normal leading-relaxed text-[#1C1C1C]/85 sm:text-base">
              Exploring artificial intelligence, machine learning<br className="hidden sm:block" /> and research to build a smarter, more innovative<br className="hidden sm:block" /> future.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="pt-2">
              <Link href="#journey" className="group inline-flex items-center space-x-3 text-[11px] font-bold uppercase tracking-[0.2em]"><span className="h-[1.5px] w-8 bg-[#1A382B] transition-all group-hover:w-12" /><span className="text-[#1C1C1C]">EXPLORE MY JOURNEY</span><ArrowRight className="h-3.5 w-3.5 text-[#1A382B] transition-transform group-hover:translate-x-1" /></Link>
            </motion.div>
          </div>
          <div className="relative flex h-[380px] items-end justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:z-10 lg:h-full lg:w-[52%] lg:justify-end">
            <div className="pointer-events-none absolute right-1/2 top-5 z-0 h-[280px] w-[280px] translate-x-1/2 rounded-full bg-[#21775f] sm:h-[340px] sm:w-[340px] lg:right-[7%] lg:top-[22%] lg:h-[340px] lg:w-[340px] lg:translate-x-0" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative z-10 h-full w-full max-w-[560px] lg:max-w-none">
              <Image src="/images/hero-Photoroom.png" alt={profile.name} fill priority className="object-contain object-bottom" />
            </motion.div>
            <div className="pointer-events-none absolute right-0 top-[22%] z-20 hidden space-y-1 text-right text-[9px] font-extrabold tracking-[0.25em] text-[#386a57] sm:block lg:right-0">
              <p>PYTHON</p><p>AI/ML</p><p>RESEARCH</p><div className="flex justify-end pt-1"><div className="relative flex h-12 w-px items-center justify-center bg-[#1C1C1C]/40"><span className="absolute text-xs font-black text-[#1A382B]">+</span></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

