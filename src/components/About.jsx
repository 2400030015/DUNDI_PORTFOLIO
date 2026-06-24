import React from "react";
import { motion } from "framer-motion";
import { FiUser, FiSettings } from "react-icons/fi";
import avatarImg from "../assets/nagasree_avatar.jpg";

const About = ({ aboutData }) => {
  const focusAreas = [
    "Cloud Computing",
    "DevOps",
    "Full-Stack Development",
    "REST APIs",
    "SDLC",
    "Agile Methodologies"
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            About Me
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Summary paragraphs */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <FiUser className="w-5.5 h-5.5" />
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                My Professional Profile
              </h3>
            </div>
            
            <p className="text-slate-655 dark:text-slate-400 leading-relaxed text-base sm:text-lg font-medium">
              I am an ambitious Computer Science Engineering undergraduate student with a specialized passion for **Cloud Computing**, **DevOps**, and **Cloud-Native Technologies**. My technical journey is driven by the desire to build containerized, highly scalable, and automated cloud systems to solve complex, real-world problems.
            </p>

            <p className="text-slate-655 dark:text-slate-400 leading-relaxed text-base sm:text-lg font-medium">
              Throughout my academic career at **KL University**, I have maintained an outstanding CGPA of **9.85** while actively developing MERN stack and cloud applications, leading development teams (HopeDrop, LCH Hub, AIArtCritic), and representing my institution at national-level hackathons like SIH.
            </p>

            <p className="text-slate-655 dark:text-slate-400 leading-relaxed text-base sm:text-lg font-medium">
              I thrive in environments where I can apply my skills in automated deployment, REST APIs, and full-stack development. My ultimate objective is to contribute to scalable cloud infrastructures, containerized solutions, and intelligent applications that make a tangible difference in daily life.
            </p>
          </motion.div>

          {/* Right Column: ECE/Developer Profile Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-[20px] p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              
              {/* Header Info */}
              <div className="flex flex-col items-center mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-primary/20 shadow-xs mb-3">
                  <img
                    src={avatarImg}
                    alt="Kakarala Dundi Nagasree"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold font-display text-slate-900 dark:text-white text-center uppercase">
                  Kakarala Dundi Nagasree
                </h4>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mt-1">
                  B.TECH CSE STUDENT
                </p>
              </div>

              {/* Technical key values */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-slate-200/50 dark:border-slate-800/50 last:border-0">
                  <span className="text-slate-450 dark:text-slate-400 font-bold text-sm">Degree</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold text-sm text-right">B.Tech CSE</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200/50 dark:border-slate-800/50 last:border-0">
                  <span className="text-slate-450 dark:text-slate-400 font-bold text-sm">University</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold text-sm text-right">KL University</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200/50 dark:border-slate-800/50 last:border-0">
                  <span className="text-slate-450 dark:text-slate-400 font-bold text-sm">CGPA</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold text-sm text-right">9.85 / 10</span>
                </div>
              </div>

              {/* Bottom Focus Areas */}
              <div>
                <h5 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FiSettings className="w-4 h-4" />
                  <span>CORE FOCUS AREAS</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 dark:bg-slate-800 text-slate-655 dark:text-slate-350 border border-slate-200 dark:border-slate-700 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
