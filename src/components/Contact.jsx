import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCopy, FiCheck, FiLinkedin, FiGithub } from "react-icons/fi";
import avatarImg from "../assets/nagasree_avatar.jpg";

const Contact = ({ personalInfo }) => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    let tempErrors = {};
    if (!formState.name.trim()) tempErrors.name = "Name is required.";
    if (!formState.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!formState.message.trim()) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 4000);
      }, 1500);
    }
  };

  const contactDetails = [
    {
      id: "email",
      label: "EMAIL",
      value: personalInfo.email,
      icon: <FiMail className="w-5 h-5 text-primary" />,
      link: `mailto:${personalInfo.email}`
    },
    {
      id: "phone",
      label: "PHONE",
      value: personalInfo.phone,
      icon: <FiPhone className="w-5 h-5 text-accent" />,
      link: `tel:${personalInfo.phone.replace(/\s+/g, "")}`
    },
    {
      id: "linkedin",
      label: "LINKEDIN",
      value: "linkedin.com/in/kakarala-dundi-nagasree-167a30364",
      icon: <FiLinkedin className="w-5 h-5 text-primary" />,
      link: "https://www.linkedin.com/in/kakarala-dundi-nagasree-167a30364"
    },
    {
      id: "github",
      label: "GITHUB",
      value: "github.com/2400030015",
      icon: <FiGithub className="w-5 h-5 text-accent" />,
      link: "https://github.com/2400030015"
    },
    {
      id: "location",
      label: "LOCATION",
      value: "Vijayawada, Andhra Pradesh, India",
      icon: <FiMapPin className="w-5 h-5 text-primary" />,
      link: "https://maps.google.com/?q=Vijayawada, Andhra Pradesh, India"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC] dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 text-left flex flex-col space-y-6">
            
            {/* Header: Profile & Titles */}
            <div className="flex items-center gap-4 mb-2">
              <img
                src={avatarImg}
                alt="Kakarala Dundi Nagasree"
                className="w-14 h-14 rounded-full object-cover border-2 border-primary/20 shadow-xs"
              />
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                  Get in Touch
                </h3>
                <p className="text-xs font-bold text-accent uppercase tracking-wider mt-0.5">
                  DUNDI KAKARALA PORTFOLIO
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-medium">
              Have a question or want to discuss a project proposal? Feel free to contact me via email, phone, or LinkedIn. I am always open to discussing new development ventures, cloud-native deployments, and DevOps ideas.
            </p>

            {contactDetails.map((detail) => (
              <div
                key={detail.id}
                className="p-5 rounded-[20px] bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-2xs flex items-center justify-between transition-all duration-300 hover:shadow-xs"
              >
                <div className="flex items-center space-x-4 flex-1 min-w-0">
                  <div className="p-3.5 rounded-xl bg-slate-55 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-3xs flex items-center justify-center flex-shrink-0">
                    {detail.icon}
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <span className="block text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider">
                      {detail.label}
                    </span>
                    <a
                      href={detail.link}
                      target={detail.id === "email" || detail.id === "phone" ? undefined : "_blank"}
                      rel="noreferrer"
                      className="block font-sans text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-accent transition-colors mt-0.5 break-all truncate hover:underline"
                    >
                      {detail.value}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(detail.value, detail.id)}
                  className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-primary hover:scale-105 active:scale-95 transition-all cursor-pointer relative flex-shrink-0 ml-4"
                  aria-label={`Copy ${detail.label}`}
                >
                  <AnimatePresence mode="wait">
                    {copiedField === detail.id ? (
                      <motion.span
                        key="copied"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <FiCheck className="w-4 h-4 text-emerald-500" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <FiCopy className="w-4 h-4" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-[20px] bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md text-left transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 font-display">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-[10px] font-bold text-slate-450 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                    errors.name ? "border-red-400" : "border-slate-200 dark:border-slate-850"
                  } text-slate-800 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-primary transition-all`}
                />
                {errors.name && <span className="text-xs text-red-500 mt-1 font-semibold">{errors.name}</span>}
              </div>

              {/* Email Input */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-[10px] font-bold text-slate-455 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="name@example.com"
                  className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                    errors.email ? "border-red-400" : "border-slate-200 dark:border-slate-850"
                  } text-slate-800 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-primary transition-all`}
                />
                {errors.email && <span className="text-xs text-red-500 mt-1 font-semibold">{errors.email}</span>}
              </div>

              {/* Message Input */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-[10px] font-bold text-slate-455 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Write your message here..."
                  className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                    errors.message ? "border-red-400" : "border-slate-200 dark:border-slate-850"
                  } text-slate-800 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-primary transition-all resize-none`}
                />
                {errors.message && <span className="text-xs text-red-500 mt-1 font-semibold">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold bg-primary hover:bg-primary-hover text-white shadow-xs transition-all active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <FiSend className="w-4.5 h-4.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Success Notification */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-455 text-sm font-semibold text-center"
                  >
                    Thank you! Your message was sent successfully.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
