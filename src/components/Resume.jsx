import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiEye, FiFileText } from "react-icons/fi";

const Resume = ({ personalInfo }) => {
  const [showViewer, setShowViewer] = useState(true);

  return (
    <section id="resume" className="py-24 bg-[#F8FAFC] dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            Resume
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-xl mx-auto text-base sm:text-lg font-medium">
            Review my professional background, key educational focus areas, and technical expertise in Cloud Computing & DevOps.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white hover:bg-primary-hover font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <FiDownload className="w-4.5 h-4.5" />
            <span>Download Resume</span>
          </a>
          
          <button
            onClick={() => setShowViewer(!showViewer)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 font-bold text-sm shadow-xs transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <FiEye className="w-4.5 h-4.5 text-primary" />
            <span>{showViewer ? "Hide Resume" : "View Resume"}</span>
          </button>
        </div>

        {/* Browser Mockup Document Viewer */}
        <AnimatePresence>
          {showViewer && (
            <motion.div
              id="pdf-viewer-frame"
              className="max-w-4xl mx-auto bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[20px] shadow-sm overflow-hidden text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Browser Window Header */}
              <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs text-slate-450 dark:text-slate-550 font-mono ml-4 truncate max-w-[200px] sm:max-w-none">
                    kakarala_dundi_nagasree_cv.pdf
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-450 dark:text-slate-550 font-semibold">
                  <FiFileText className="w-4 h-4 text-primary" />
                  <span className="hidden sm:inline">PDF Document Viewer</span>
                </div>
              </div>

              {/* Document Paper Layout */}
              <div className="w-full h-[650px] bg-slate-100 dark:bg-slate-900/60">
                <iframe
                  src={personalInfo.resumeUrl}
                  className="w-full h-full border-0"
                  title="Kakarala Dundi Nagasree Resume"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Resume;
