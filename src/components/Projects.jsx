import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import hopedropImg from "../assets/hopedrop_preview.png";
import handloomImg from "../assets/handloom_preview.png";
import lchhubImg from "../assets/lchhub_preview.png";
import aiartcriticImg from "../assets/aiartcritic_preview.png";
import galleryImg from "../assets/gallery_preview.png";
import openenvHackathonImg from "../assets/openenv_hackathon.png";

const Projects = ({ projectsData }) => {
  const getProjectImage = (id) => {
    switch (id) {
      case 1: return hopedropImg;
      case 2: return handloomImg;
      case 3: return lchhubImg;
      case 4: return aiartcriticImg;
      case 5: return galleryImg;
      case 6: return openenvHackathonImg;
      default: return hopedropImg;
    }
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-xl mx-auto text-base sm:text-lg font-medium">
            Engineering solutions designed for hardware-software integration, cloud-native deployments, and web platform scale.
          </p>
        </div>

        {/* Vertical Projects Stack */}
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-[20px] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-0 group"
            >
              {/* Project Image Column */}
              <div className="relative h-56 md:h-auto md:col-span-4 overflow-hidden bg-slate-50 dark:bg-slate-900 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800">
                <img
                  src={getProjectImage(project.id)}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ position: "absolute", left: 0, top: 0 }}
                />
              </div>

              {/* Project Content Column */}
              <div className="md:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white leading-snug">
                      {project.title}
                    </h3>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">
                      {project.subtitle}
                    </span>
                  </div>

                  <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-4 font-medium">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-655 dark:text-slate-350 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 font-bold text-sm shadow-2xs transition-all duration-300 cursor-pointer"
                  >
                    <FiGithub className="w-4.5 h-4.5 text-slate-550 dark:text-slate-400" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white hover:bg-primary-hover font-bold text-sm shadow-2xs transition-all duration-300 cursor-pointer"
                  >
                    <FiExternalLink className="w-4.5 h-4.5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
