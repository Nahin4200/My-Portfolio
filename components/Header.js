"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Menu, X } from "lucide-react";

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "JOURNEY", href: "#journey" },
  { name: "RESEARCH", href: "#research" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("HOME");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F4F1EA]/80 backdrop-blur-md border-b border-[#E6E2D6]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo: M / N */}
        <Link href="#home" className="flex items-center group">
          <div className="font-serif text-2xl tracking-wider text-[#1C231F] flex items-center font-medium">
            <span>M</span>
            <span className="text-[#2F5233] font-light mx-0.5">/</span>
            <span>N</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className="relative py-2 text-xs font-semibold tracking-widest text-[#1C231F]/80 hover:text-[#1C231F] transition-colors"
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2F5233]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Social Icons & Mobile Menu Toggle */}
        <div className="flex items-center space-x-5">
          <div className="hidden md:flex items-center space-x-4 text-[#1C231F]">
            <a
              href="https://github.com/Nahin4200"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-[#2F5233] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1C231F] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[#F4F1EA] border-b border-[#E6E2D6] px-6 py-4 space-y-3"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveTab(item.name);
                setMobileMenuOpen(false);
              }}
              className={`block text-xs font-semibold tracking-widest py-2 ${
                activeTab === item.name ? "text-[#2F5233]" : "text-[#1C231F]/80"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 pt-4 border-t border-[#E6E2D6]">
            <a href="https://github.com/Nahin4200" target="_blank" rel="noopener noreferrer" className="p-2 text-[#1C231F]">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
