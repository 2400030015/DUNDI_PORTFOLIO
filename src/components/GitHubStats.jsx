import React from "react";
import { motion } from "framer-motion";
import { FiGitCommit, FiGitPullRequest, FiStar, FiGitBranch } from "react-icons/fi";

const GitHubStats = () => {
  const rows = 7;
  const cols = 40;
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const colors = [
    "bg-slate-100 dark:bg-slate-800",
    "bg-emerald-100 dark:bg-emerald-950",
    "bg-emerald-300 dark:bg-emerald-800",
    "bg-emerald-500 dark:bg-emerald-600",
    "bg-emerald-600 dark:bg-emerald-450"
  ];

  const getWeight = (r, c) => {
    const seed = (r * 123 + c * 456) % 100;
    if (seed < 40) return 0;
    if (seed < 65) return 1;
    if (seed < 85) return 2;
    if (seed < 95) return 3;
    return 4;
  };

  const stats = [
    { label: "Total Commits", value: "1,428", icon: <FiGitCommit className="w-5 h-5 text-emerald-500" /> },
    { label: "Pull Requests", value: "184", icon: <FiGitPullRequest className="w-5 h-5 text-accent" /> },
    { label: "Repository Stars", value: "32", icon: <FiStar className="w-5 h-5 text-amber-500" /> },
    { label: "Total Repositories", value: "24", icon: <FiGitBranch className="w-5 h-5 text-purple-500" /> }
  ];

  return (
    <section id="github" className="py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            GitHub Activity
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Calendar Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 p-6 md:p-8 rounded-[20px] bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  Contributions in the Last Year
                </h3>
                <p className="font-sans text-xs text-slate-450 dark:text-slate-400 mt-1">
                  2400030015 / contributions calendar
                </p>
              </div>
              <a
                href="https://github.com/2400030015"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-primary hover:underline cursor-pointer"
              >
                View on GitHub
              </a>
            </div>

            {/* Grid Container */}
            <div className="overflow-x-auto pb-4">
              <div className="min-w-[620px] flex space-x-2">
                {/* Y-axis days */}
                <div className="grid grid-rows-7 gap-[3px] text-[10px] font-sans text-slate-400 dark:text-slate-500 pt-[14px]">
                  {days.map((day, idx) => (
                    <div key={day} className="h-2.5 flex items-center">
                      {idx % 2 === 1 ? day : ""}
                    </div>
                  ))}
                </div>

                {/* Calendar grid boxes */}
                <div className="grid grid-flow-col grid-rows-7 gap-[3px] flex-1">
                  {Array.from({ length: cols }).map((_, c) =>
                    Array.from({ length: rows }).map((_, r) => {
                      const weight = getWeight(r, c);
                      return (
                        <div
                          key={`${r}-${c}`}
                          className={`w-2.5 h-2.5 rounded-[2px] transition-all duration-300 hover:scale-130 hover:shadow-xs ${colors[weight]}`}
                          title={`${weight * 2 + 1} contributions`}
                        />
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            {/* Calendar Legend */}
            <div className="flex items-center justify-between text-[11px] font-sans text-slate-400 dark:text-slate-500 mt-4 border-t border-slate-100 dark:border-slate-800 pt-4">
              <span>Learn how we count contributions</span>
              <div className="flex items-center space-x-1.5">
                <span>Less</span>
                {colors.map((c, i) => (
                  <div key={i} className={`w-2.5 h-2.5 rounded-[2px] ${c}`} />
                ))}
                <span>More</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stats Cards Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-[20px] bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md text-left flex flex-col justify-between transition-all duration-300"
              >
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs self-start mb-4">
                  {stat.icon}
                </div>
                <div>
                  <div className="font-display text-2xl font-black text-slate-900 dark:text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="font-sans text-xs font-semibold text-slate-450 dark:text-slate-400 mt-2">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GitHubStats;
