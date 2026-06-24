import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCloud, FiGithub, FiCpu, FiGlobe, FiAward, FiEye, FiExternalLink, FiX, FiShield, FiDownload } from "react-icons/fi";
import nptelMlCert from "../assets/nptel_ml_cert.png";
import awsDeveloperCert from "../assets/aws_developer_cert.png";
import awsCloudPractitionerCert from "../assets/aws_cloud_practitioner_cert.png";
import githubCopilotCert from "../assets/github_copilot_cert.png";
import linguaskillReport from "../assets/linguaskill_report.png";

const Certifications = ({ certificationsData }) => {
  const [activeCert, setActiveCert] = useState(null);

  const getIcon = (title) => {
    if (title.includes("AWS")) return <FiCloud className="w-5 h-5 text-sky-500" />;
    if (title.includes("GitHub")) return <FiGithub className="w-5 h-5 text-slate-800 dark:text-white" />;
    if (title.includes("NPTEL")) return <FiCpu className="w-5 h-5 text-amber-500" />;
    if (title.includes("Cambridge")) return <FiGlobe className="w-5 h-5 text-teal-500" />;
    if (title.includes("Adobe")) return <FiAward className="w-5 h-5 text-red-500" />;
    return <FiAward className="w-5 h-5 text-primary" />;
  };

  const getCertImage = (key) => {
    switch (key) {
      case "aws_developer": return awsDeveloperCert;
      case "aws_cloud_practitioner": return awsCloudPractitionerCert;
      case "nptel_ml": return nptelMlCert;
      case "github_copilot": return githubCopilotCert;
      case "linguaskill": return linguaskillReport;
      default: return null;
    }
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
    <section id="certifications" className="py-24 bg-[#F8FAFC] dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            Certifications & Credentials
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg font-medium">
            Professional certifications and training achievements validating expertise in cloud-native technologies, DevOps, machine learning, and software engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-[20px] p-6 shadow-xs hover:shadow-md hover:border-primary/20 transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Year */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-slate-900 text-primary border border-blue-100/50 dark:border-slate-800 shadow-2xs flex items-center justify-center">
                    <FiShield className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-655 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-1 leading-snug">
                  {cert.title}
                </h3>
                <h4 className="text-[11px] font-bold text-accent dark:text-accent uppercase tracking-wider mb-3">
                  {cert.issuer}
                </h4>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Action Buttons Section */}
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                {/* Preview Button (Wide, light blue bg) */}
                {cert.imageKey ? (
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-primary/5 hover:bg-primary/10 dark:bg-primary/10 dark:hover:bg-primary/20 text-primary dark:text-accent transition-all duration-200 cursor-pointer"
                  >
                    <FiEye className="w-4 h-4" />
                    <span>Preview Certificate</span>
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-slate-50 dark:bg-slate-800/40 text-slate-350 dark:text-slate-600 transition-all duration-200 cursor-not-allowed"
                  >
                    <FiEye className="w-4 h-4" />
                    <span>No Preview Available</span>
                  </button>
                )}

                {/* Split Row for Download and View Full */}
                <div className="flex gap-3">
                  {/* Download Button */}
                  {cert.imageKey ? (
                    <button
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = getCertImage(cert.imageKey);
                        link.download = `${cert.title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}.png`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700 transition-all duration-200 cursor-pointer"
                    >
                      <FiDownload className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  ) : (
                    <button
                      disabled
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold bg-slate-50/50 dark:bg-slate-800/20 text-slate-350 dark:text-slate-600 border border-slate-200/30 dark:border-slate-800 transition-all duration-200 cursor-not-allowed"
                    >
                      <FiDownload className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  )}

                  {/* View Full Button */}
                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700 transition-all duration-200 cursor-pointer"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>View Full</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold bg-slate-50/50 dark:bg-slate-800/20 text-slate-350 dark:text-slate-600 border border-slate-200/30 dark:border-slate-800 transition-all duration-200 cursor-not-allowed"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>View Full</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Overlay Viewer */}
        <AnimatePresence>
          {activeCert && (
            <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-xs flex items-center justify-center z-50 p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="max-w-3xl max-h-[90vh] bg-white dark:bg-slate-900 p-3 rounded-2xl shadow-2xl relative border border-slate-200 dark:border-slate-800 flex flex-col"
              >
                {/* Header title */}
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100 dark:border-slate-800">
                  <h4 className="font-display font-bold text-sm sm:text-base text-slate-850 dark:text-white px-2">
                    {activeCert.title} - Verification Preview
                  </h4>
                  <button
                    onClick={() => setActiveCert(null)}
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-600 dark:text-slate-350 transition-colors cursor-pointer"
                    aria-label="Close"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>

                {/* Main image container */}
                <div className="overflow-auto flex-1 flex items-center justify-center">
                  <img
                    src={getCertImage(activeCert.imageKey)}
                    alt={activeCert.title}
                    className="max-w-full max-h-[75vh] object-contain rounded-lg"
                  />
                </div>
              </motion.div>
              {/* Clicking backdrop closes modal */}
              <div onClick={() => setActiveCert(null)} className="absolute inset-0 -z-10 cursor-zoom-out" />
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Certifications;
