import React from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiAward, FiFolder } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const Education = ({ educationData }) => {
  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-950 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            Education
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical central timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-slate-200 dark:to-slate-800 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {educationData.map((item, index) => {
              // Alternates sides on desktop
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline node dot indicator */}
                  <div className="absolute left-4 md:left-1/2 top-8 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-primary transform -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      whileHover={{ y: -4 }}
                      className="bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                    >
                      {/* Year badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-4">
                        <FiCalendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>

                      {/* Degree / Institution */}
                      <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white leading-snug">
                        {item.degree}
                      </h3>
                      
                      <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base mt-2 flex items-center gap-1.5">
                        <FaGraduationCap className="w-4.5 h-4.5 text-accent" />
                        <span>{item.institution}</span>
                      </p>

                      {/* Score Tag */}
                      <div className="mt-4 flex items-center gap-2 py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800 w-fit border border-slate-200/50 dark:border-slate-700/50">
                        <FiAward className="w-4 h-4 text-primary" />
                        <span className="text-xs font-semibold text-slate-455 dark:text-slate-400 uppercase tracking-wider">
                          Score:
                        </span>
                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                          {item.grade.includes(":") ? item.grade.split(":")[1].trim() : item.grade}
                        </span>
                      </div>

                      {item.description && (
                        <p className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-500 dark:text-slate-450 leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      {item.focusAreas && (
                        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                          <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <FiFolder className="w-3.5 h-3.5 text-accent" />
                            <span>Key Focus Areas</span>
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.focusAreas.map(tag => (
                              <span key={tag} className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-800 text-slate-655 dark:text-slate-350 border border-slate-200 dark:border-slate-700 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Empty placeholder column for layout spacing */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
