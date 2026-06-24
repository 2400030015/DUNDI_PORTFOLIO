import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiCpu, FiGlobe, FiZap, FiAward } from "react-icons/fi";
import { FaPalette } from "react-icons/fa";

const Leadership = ({ leadershipData }) => {
  const getIcon = (role) => {
    if (role.includes("Joint Secretary")) return <FiUsers className="w-5 h-5 text-indigo-500" />;
    if (role.includes("President")) return <FaPalette className="w-5 h-5 text-accent" />;
    if (role.includes("Vice Chair")) return <FiUsers className="w-5 h-5 text-purple-500" />;
    if (role.includes("Smart India")) return <FiCpu className="w-5 h-5 text-emerald-500" />;
    if (role.includes("National Level")) return <FiCpu className="w-5 h-5 text-emerald-500" />;
    if (role.includes("Bharatiya Antariksh")) return <FiGlobe className="w-5 h-5 text-primary" />;
    if (role.includes("Samsung")) return <FiZap className="w-5 h-5 text-amber-500" />;
    if (role.includes("Art Competition")) return <FiAward className="w-5 h-5 text-red-500" />;
    return <FiAward className="w-5 h-5 text-primary" />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="leadership" className="py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            Leadership & Achievements
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Leadership Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {leadershipData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-[20px] p-6 shadow-xs hover:shadow-md hover:border-primary/20 transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Organization */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 shadow-2xs flex items-center justify-center">
                    {getIcon(item.role)}
                  </div>
                  <span className="text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider">
                    {item.organization}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.role}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
