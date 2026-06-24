import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiDatabase, FiSettings } from "react-icons/fi";

const Skills = ({ skillsData }) => {
  const categories = [
    {
      key: "programming",
      name: "Programming",
      icon: <FiCode className="w-5.5 h-5.5" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      key: "web",
      name: "Web Technologies",
      icon: <FiLayout className="w-5.5 h-5.5" />,
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      key: "databases",
      name: "Databases & Tools",
      icon: <FiDatabase className="w-5.5 h-5.5" />,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      key: "competencies",
      name: "Professional Competencies",
      icon: <FiSettings className="w-5.5 h-5.5" />,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#F8FAFC] dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            My Skills
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-xl mx-auto text-base sm:text-lg font-medium">
            A comprehensive overview of my technical capabilities, ranging from low-level programming to cloud-connected DevOps and software delivery.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-[20px] p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full group"
            >
              {/* Header */}
              <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white shadow-xs group-hover:scale-105 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {skillsData[category.key]?.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-slate-50 dark:bg-slate-800 text-slate-655 dark:text-slate-300 hover:bg-primary hover:text-white dark:hover:bg-primary border border-slate-200/80 dark:border-slate-700 hover:border-primary transition-all duration-200 cursor-default shadow-2xs hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
