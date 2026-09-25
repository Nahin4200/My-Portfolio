"use client";

import { identityStats } from "@/data/content";

export default function IdentityStrip() {
  return (
    <section aria-label="Quick facts" className="w-full bg-[#F4F1EA] text-[#1C1C1C] border-b border-[#1C1C1C]/15">
      <div className="max-w-7xl mx-auto grid grid-cols-2 border-t border-[#1C1C1C]/15 lg:grid-cols-4 lg:border-t-0">
        {identityStats.map((stat, i) => {
          const isRightEdgeMobile = i % 2 === 1;
          const isRightEdgeDesktop = i === identityStats.length - 1;
          const isBottomRowMobile = i >= identityStats.length - 2;

          return (
            <div
              key={stat.number}
              className={[
                "flex flex-col gap-1.5 py-6 pl-4 pr-6 transition-colors hover:bg-[#EFECE4]/50",
                "lg:py-8 lg:pl-8 lg:pr-6",
                !isRightEdgeMobile ? "border-r border-[#1C1C1C]/15" : "",
                !isBottomRowMobile ? "border-b border-[#1C1C1C]/15 lg:border-b-0" : "",
                "lg:border-r lg:border-t lg:border-[#1C1C1C]/15",
                isRightEdgeDesktop ? "lg:border-r-0" : "",
              ].join(" ")}
            >
              <span className="font-mono text-xs font-bold text-[#1A382B] tracking-wider">{stat.number}</span>
              <span className="text-base font-bold text-[#1C1C1C] sm:text-lg">
                {stat.value}
              </span>
              <span className="text-xs text-[#1C1C1C]/70 sm:text-sm font-medium">{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}