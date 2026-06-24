import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight, FiCode, FiAward, FiBriefcase, FiFileText } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import avatarImg from "../assets/nagasree_avatar.jpg";

const Hero = ({ personalInfo }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const specializations = [
    "Cloud Computing Specialist",
    "Cloud-Native Engineer",
    "DevOps Enthusiast",
    "Full-Stack Developer"
  ];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed]);

  const handleType = () => {
    const i = loopNum % specializations.length;
    const fullText = specializations[i];

    if (!isDeleting) {
      setText(fullText.substring(0, text.length + 1));
      setTypingSpeed(100);

      if (text === fullText) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      }
    } else {
      setText(fullText.substring(0, text.length - 1));
      setTypingSpeed(50);

      if (text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    }
  };

  const metrics = [
    { label: "CSE CGPA", value: "9.85", icon: <FaGraduationCap className="w-5.5 h-5.5" /> },
    { label: "PROJECTS", value: "5+", icon: <FiCode className="w-5.5 h-5.5" /> },
    { label: "INTERNSHIPS", value: "1+", icon: <FiBriefcase className="w-5.5 h-5.5" /> },
    { label: "CERTIFICATIONS", value: "5+", icon: <FiAward className="w-5.5 h-5.5" /> }
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-28 pb-16 bg-[#F8FAFC] dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          
          {/* Left Column: Intro */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <span className="text-primary font-bold text-base sm:text-lg tracking-wider block mb-2 uppercase">
                Hi, I'm
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-tight">
                KAKARALA DUNDI <br />
                <span className="text-primary">{personalInfo.name.split(" ").slice(-1)[0]}</span>
              </h1>
            </div>

            <div className="h-8 flex items-center">
              <span className="text-xl sm:text-2xl font-bold text-accent font-display">
                {text}
                <span className="animate-pulse text-primary ml-1">|</span>
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed font-medium">
              I am an enthusiastic Computer Science student specializing in Cloud Computing, Cloud-Native Engineering, and DevOps. Passionate about building scalable, AI-powered, and full-stack cloud applications that solve real-world problems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary-hover font-bold text-sm shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FiDownload className="w-4.5 h-4.5" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-bold text-sm shadow-xs transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Contact Me</span>
                <FiArrowRight className="w-4.5 h-4.5 text-primary" />
              </a>
            </div>

            {/* Social Connect Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-450 border border-slate-200 dark:border-slate-700 hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-xs"
                title="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-450 border border-slate-200 dark:border-slate-700 hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-xs"
                title="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-450 border border-slate-200 dark:border-slate-700 hover:text-amber-500 hover:border-amber-500/50 transition-all duration-300 shadow-xs"
                title="LeetCode"
              >
                <SiLeetcode className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300" />
              <div className="absolute inset-4 rounded-full overflow-hidden border border-slate-200 dark:border-slate-750 bg-white dark:bg-slate-850 shadow-md">
                <img
                  src={avatarImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Metrics Row */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 pt-8 border-t border-slate-200 dark:border-slate-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-[20px] p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-4"
            >
              <div className="p-3.5 rounded-xl bg-primary/5 dark:bg-primary/20 text-primary">
                {metric.icon}
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-450 dark:text-slate-400 tracking-wide uppercase mt-0.5">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
