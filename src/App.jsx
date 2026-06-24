import React, { useState, useEffect } from "react";
import { portfolioData } from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Certifications from "./components/Certifications";
import GitHubStats from "./components/GitHubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false); // Default to light theme

  // Apply dark mode theme class to HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-primary/30">
      <div className="relative overflow-hidden w-full">
        {/* Sticky navigation header */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Hero Section (Contains Metrics Grid) */}
        <Hero personalInfo={portfolioData.personalInfo} />
        
        {/* About Section */}
        <About aboutData={portfolioData.about} />
        
        {/* Resume Section */}
        <Resume personalInfo={portfolioData.personalInfo} aboutData={portfolioData.about} />
        
        {/* Education Section */}
        <Education educationData={portfolioData.education} />
        
        {/* Skills Section */}
        <Skills skillsData={portfolioData.skills} />
        
        {/* Projects Section */}
        <Projects projectsData={portfolioData.projects} />
        
        {/* Experience Section */}
        <Experience experienceData={portfolioData.experience} />
        
        {/* Leadership Section */}
        <Leadership leadershipData={portfolioData.leadership} />
        
        {/* Certifications Section */}
        <Certifications certificationsData={portfolioData.certifications} />
        
        {/* GitHub Stats Section */}
        <GitHubStats />
        
        {/* Contact Section */}
        <Contact personalInfo={portfolioData.personalInfo} />
        
        {/* Footer */}
        <Footer personalInfo={portfolioData.personalInfo} />
      </div>
    </div>
  );
}

export default App;
