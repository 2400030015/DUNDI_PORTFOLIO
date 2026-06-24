import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Footer = ({ personalInfo }) => {
  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo/Name */}
        <div className="flex items-center space-x-2">
          <a href="#hero" className="font-display text-lg font-bold tracking-tight text-primary uppercase">
            DUNDI KAKARALA<span className="text-accent font-black text-xl">.</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs sm:text-sm text-slate-450 dark:text-slate-500 font-sans">
          Copyright © 2026 {personalInfo.name}. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-primary transition-colors duration-250"
            aria-label="GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-primary transition-colors duration-250"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-amber-500 transition-colors duration-250"
            aria-label="LeetCode"
          >
            <SiLeetcode className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
