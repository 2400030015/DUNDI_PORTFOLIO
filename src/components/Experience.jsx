import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiBookOpen } from "react-icons/fi";

const Experience = ({ experienceData }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "agricultural":
        return <FiTrendingUp className="w-6 h-6 text-emerald-500" />;
      case "education":
        return <FiBookOpen className="w-6 h-6 text-accent" />;
      default:
        return <FiTrendingUp className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section id="experience" className="py-24 bg-[#F8FAFC] dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-left">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            Experience & Volunteering
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-[20px] p-6 md:p-8 shadow-xs hover:shadow-md hover:border-primary/20 transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Details */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex items-center justify-center">
                    {getIcon(exp.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/10">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-slate-500 dark:text-slate-400 font-semibold text-base mb-4">
                  {exp.organization}
                </h4>

                <p className="text-slate-655 dark:text-slate-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
