"use client";

import { useLanguage } from "./components/LanguageContext";
import { portfolioData } from "./lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Code2,
  Download,
  MapPin,
  Phone,
  Award,
  GraduationCap,
  Briefcase,
  Sparkles,
  ArrowDown,
  ExternalLink,
} from "lucide-react";
import { useEffect, useState } from "react";

const scrollReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const viewportConfig = { once: true, margin: "-80px" };

export default function Home() {
  const { lang, toggleLang, dir } = useLanguage();
  const t = portfolioData[lang];
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "achievements",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-gray-100 relative overflow-x-hidden">
      {/* Subtle gradient orbs — Apple-style ambient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 inset-s-1/4 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 inset-e-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Frosted glass navbar — full width, minimal, strong backdrop blur */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 w-full min-w-full border-b border-white/10 bg-black/70 backdrop-blur-2xl"
        aria-label="Main"
      >
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
          <motion.button
            initial={{ opacity: 0, x: dir === "ltr" ? -12 : 12 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-gray-100 font-semibold tracking-tight hover:opacity-80 transition-opacity"
          >
            <Code2 className="w-5 h-5 text-gray-400" aria-hidden />
            <span>{t.hero.name.split(" ")[0]}</span>
          </motion.button>

          <div className="hidden md:flex items-center gap-1">
            {Object.entries(t.nav).map(([key]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key === "about" ? "about" : key)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeSection === key
                    ? "text-gray-100 bg-white/10"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {t.nav[key as keyof typeof t.nav]}
              </button>
            ))}
          </div>

          <button
            onClick={toggleLang}
            className="text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
          >
            {lang === "en" ? "عربي" : "English"}
          </button>
        </div>
      </nav>

      {/* Hero — full viewport, massive type, cinematic spacing */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-24 pb-32"
      >
        <div className="max-w-5xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10"
          >
            <Sparkles className="w-4 h-4 text-gray-400" aria-hidden />
            <span className="text-sm text-gray-400">{t.hero.greeting}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[1.05] text-gray-100"
          >
            <span className="block">{t.hero.name.split(" ")[0]}</span>
            <span className="block bg-gradient-to-e from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {t.hero.name.split(" ")[1]}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-gray-300"
          >
            {t.hero.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 flex flex-wrap justify-center gap-4"
          >
            <a
              href="mailto:ahmadbakran02@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition-colors"
            >
              <Mail size={18} aria-hidden />
              <span>{t.hero.email}</span>
            </a>
            <a
              href="https://linkedin.com/in/ahmad-bakran-80735b226"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-gray-300 font-medium hover:bg-white/5 hover:text-gray-100 transition-colors"
            >
              <Linkedin size={18} aria-hidden />
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" aria-hidden />
            </a>
            <a
              href="https://github.com/ahmad1bakran"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-gray-300 font-medium hover:bg-white/5 hover:text-gray-100 transition-colors"
            >
              <Github size={18} aria-hidden />
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" aria-hidden />
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-gray-300 font-medium hover:bg-white/5 hover:text-gray-100 transition-colors"
            >
              <Download size={18} aria-hidden />
              <span>{t.hero.downloadCV}</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" aria-hidden />
              {t.hero.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="w-4 h-4" aria-hidden />
              {t.hero.phone}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, repeat: Infinity, repeatType: "reverse", duration: 2 }}
          className="absolute bottom-12 inset-s-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="p-3 rounded-full border border-white/10 text-gray-500 hover:text-gray-300 hover:border-white/20 transition-colors"
            aria-label={lang === "en" ? "Scroll to about" : "التمرير إلى النبذة"}
          >
            <ArrowDown className="w-5 h-5 animate-bounce" aria-hidden />
          </button>
        </motion.div>
      </section>

      {/* About — full-height section, scroll reveal */}
      <section
        id="about"
        className="relative min-h-screen flex items-center py-32 px-6 sm:px-8 lg:px-12"
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex items-center gap-4 mb-20"
          >
            <div className="h-px w-16 bg-gradient-to-e from-emerald-500/60 to-cyan-500/60 rounded-full" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-100">
              {t.about.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl text-gray-500 leading-[1.7]">
                {t.about.description}
              </p>
            </motion.div>
            <motion.div
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="rounded-3xl p-8 lg:p-10 bg-white/3 border border-white/6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-white/5">
                  <GraduationCap className="w-6 h-6 text-emerald-400/80" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-gray-100">
                  {t.about.education.title}
                </h3>
              </div>
              <p className="text-lg font-medium text-gray-200">
                {t.about.education.degree}
              </p>
              <p className="text-emerald-400/90 font-medium mt-1">
                {t.about.education.university}
              </p>
              <p className="text-gray-500 mt-2">{t.about.education.year}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills — cinematic spacing, scroll reveal */}
      <section
        id="skills"
        className="relative min-h-screen flex items-center py-32 px-6 sm:px-8 lg:px-12"
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex items-center gap-4 mb-20"
          >
            <div className="h-px w-16 bg-gradient-to-e from-cyan-500/60 to-emerald-500/60 rounded-full" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-100">
              {t.skills.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {Object.values(t.skills.categories).map((category, idx) => (
              <motion.div
                key={idx}
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl p-8 lg:p-10 bg-white/3 border border-white/6"
              >
                <h3 className="text-lg font-semibold text-gray-200 mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-4 py-2 rounded-xl text-sm text-gray-400 bg-white/4 border border-white/6"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience — scroll reveal, timeline feel with spacing */}
      <section
        id="experience"
        className="relative min-h-screen flex items-center py-32 px-6 sm:px-8 lg:px-12"
      >
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex items-center gap-4 mb-20"
          >
            <Briefcase className="w-8 h-8 text-gray-500" aria-hidden />
            <div className="h-px w-16 bg-gradient-to-e from-emerald-500/60 to-cyan-500/60 rounded-full" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-100">
              {t.experience.title}
            </h2>
          </motion.div>

          <div className="space-y-12">
            {t.experience.items.map((item, idx) => (
              <motion.div
                key={idx}
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl p-8 lg:p-10 bg-white/3 border border-white/6"
              >
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {item.role}
                </h3>
                <p className="text-sm text-emerald-400/90 font-medium mb-4">
                  {item.date}
                </p>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements — scroll reveal */}
      <section
        id="achievements"
        className="relative min-h-screen flex items-center py-32 px-6 sm:px-8 lg:px-12"
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex items-center gap-4 mb-20"
          >
            <Award className="w-8 h-8 text-gray-500" aria-hidden />
            <div className="h-px w-16 bg-gradient-to-e from-cyan-500/60 to-emerald-500/60 rounded-full" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-100">
              {t.achievements.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {t.achievements.items.map((item, idx) => (
              <motion.div
                key={idx}
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl p-8 lg:p-10 bg-white/3 border border-white/6"
              >
                <h3 className="text-lg font-semibold text-gray-200 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyan-400/80" aria-hidden />
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="rounded-3xl p-8 lg:p-10 bg-white/3 border border-white/6"
          >
            <h3 className="text-xl font-semibold text-gray-200 mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-400/80" aria-hidden />
              {t.achievements.certifications.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.achievements.certifications.items.map((cert, certIdx) => (
                <div
                  key={certIdx}
                  className="px-5 py-4 rounded-xl text-gray-400 text-sm bg-white/3 border border-white/6"
                >
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects — full-width feature blocks, alternating layout, RTL-safe */}
      <section
        id="projects"
        className="relative py-32 px-6 sm:px-8 lg:px-12"
      >
        <div className="max-w-6xl mx-auto w-full mb-24">
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex items-center gap-4"
          >
            <Globe className="w-8 h-8 text-gray-500" aria-hidden />
            <div className="h-px w-16 bg-gradient-to-e from-emerald-500/60 to-cyan-500/60 rounded-full" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-100">
              {t.projects.title}
            </h2>
          </motion.div>
        </div>

        <div className="space-y-0">
          {t.projects.items.map((project, idx) => {
            const isAlternate = idx % 2 === 1;
            return (
              <motion.div
                key={idx}
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                transition={{ delay: 0.1 }}
                className={`min-h-screen flex flex-col md:flex-row items-center gap-12 lg:gap-20 py-24 lg:py-32 px-0 ${
                  isAlternate ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 w-full max-w-2xl mx-auto md:mx-0 text-start pe-0 md:pe-12 lg:pe-16 order-2 md:order-1">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-100 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-500 leading-relaxed mb-6">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full text-sm text-gray-400 bg-white/4 border border-white/6"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className={`flex-1 w-full max-w-2xl mx-auto md:mx-0 order-1 md:order-2 ${
                    isAlternate ? "md:ps-0 md:pe-12 lg:pe-16" : "md:ps-12 lg:ps-16"
                  }`}
                >
                  <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-white/3 border border-white/6">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Globe className="w-20 h-20 text-gray-600" aria-hidden />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact — full viewport, centered, scroll reveal */}
      <section
        id="contact"
        className="relative min-h-screen flex items-center justify-center py-32 px-6 sm:px-8 lg:px-12"
      >
        <div className="max-w-2xl mx-auto w-full text-center">
          <motion.h2
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-100 mb-6"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-xl text-gray-500 leading-relaxed mb-12"
          >
            {t.contact.subtitle}
          </motion.p>
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="mailto:ahmadbakran02@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition-colors"
            >
              <Mail size={20} aria-hidden />
              <span>{t.contact.email}</span>
            </a>
            <a
              href="tel:+96393870119"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-gray-300 font-medium hover:bg-white/5 hover:text-gray-100 transition-colors"
            >
              <Phone size={20} aria-hidden />
              <span>{t.contact.phone}</span>
            </a>
          </motion.div>
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex justify-center gap-4"
          >
            <a
              href="https://linkedin.com/in/ahmad-bakran-80735b226"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-white/20 text-gray-400 hover:text-gray-100 hover:bg-white/5 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} aria-hidden />
            </a>
            <a
              href="https://github.com/ahmad1bakran"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-white/20 text-gray-400 hover:text-gray-100 hover:bg-white/5 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} aria-hidden />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-8 lg:px-12 border-t border-white/6">
        <div className="max-w-6xl mx-auto w-full text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} {t.hero.name}.{" "}
            {lang === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}
          </p>
        </div>
      </footer>
    </div>
  );
}
