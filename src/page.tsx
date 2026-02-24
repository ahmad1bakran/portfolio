"use client";
import { useLanguage } from "./app/components/LanguageContext";
import { portfolioData } from "./app/lib/data";
import { motion } from "framer-motion";
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
  ArrowDown
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const { lang, toggleLang, dir } = useLanguage();
  const t = portfolioData[lang];
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "achievements", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Code2 className="text-emerald-400" />
              {t.hero.name.split(" ")[0]}
            </motion.button>
            <div className="hidden md:flex items-center gap-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key === "about" ? "about" : key)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === key
                      ? "text-emerald-400"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
            <button
              onClick={toggleLang}
              className="px-4 py-2 bg-gray-800/50 hover:bg-gray-800 rounded-full text-sm font-semibold transition-all border border-gray-700/50 hover:border-emerald-500/50"
            >
              {lang === "en" ? "عربي" : "English"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-emerald-400 font-mono mb-4 text-lg flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              {t.hero.greeting}
            </motion.p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
              {t.hero.name.split(" ")[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500">
                {t.hero.name.split(" ")[1]}
              </span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-gray-300 mb-6"
            >
              {t.hero.role}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="mailto:ahmadbakran02@gmail.com"
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all flex items-center gap-2"
              >
                <Mail size={20} />
                {t.hero.email}
              </a>
              <a
                href="https://linkedin.com/in/ahmad-bakran-80735b226"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800/50 border border-gray-700 text-gray-200 rounded-full font-semibold hover:border-emerald-500 hover:text-emerald-400 transition-all flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://github.com/ahmad1bakran"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800/50 border border-gray-700 text-gray-200 rounded-full font-semibold hover:border-emerald-500 hover:text-emerald-400 transition-all flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                {t.hero.location}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                {t.hero.phone}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4"
          >
            <span className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500"></span>
            {t.about.title}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: dir === "ltr" ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                {t.about.description}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: dir === "ltr" ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800"
            >
              <div className="flex items-center gap-4 mb-6">
                <GraduationCap className="text-emerald-400 w-8 h-8" />
                <h3 className="text-2xl font-bold">{t.about.education.title}</h3>
              </div>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-gray-200">{t.about.education.degree}</p>
                <p className="text-emerald-400">{t.about.education.university}</p>
                <p className="text-gray-400">{t.about.education.year}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4"
          >
            <span className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500"></span>
            {t.skills.title}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(t.skills.categories).map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-6 text-emerald-400">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20"
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

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4"
          >
            <Briefcase className="text-emerald-400 w-10 h-10" />
            <span className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500"></span>
            {t.experience.title}
          </motion.h2>
          <div className="space-y-8 relative">
            <div className={`absolute ${dir === "ltr" ? "left-8" : "right-8"} top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-cyan-500`}></div>
            {t.experience.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: dir === "ltr" ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative ${dir === "ltr" ? "ml-16" : "mr-16"}`}
              >
                <div className={`absolute ${dir === "ltr" ? "-left-[57px]" : "-right-[57px]"} top-2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-950`}></div>
                <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-colors">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">{item.role}</h3>
                  <p className="text-emerald-400 font-mono text-sm mb-4">{item.date}</p>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4"
          >
            <Award className="text-cyan-400 w-10 h-10" />
            <span className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500"></span>
            {t.achievements.title}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {t.achievements.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-bold mb-6 text-emerald-400">{t.achievements.certifications.title}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.achievements.certifications.items.map((cert, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-gray-300"
                >
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4"
          >
            <Globe className="text-emerald-400 w-10 h-10" />
            <span className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500"></span>
            {t.projects.title}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.items.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Globe className="text-emerald-400 w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed min-h-[80px]">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-gray-900/50 to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg mb-12"
          >
            {t.contact.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <a
              href="mailto:ahmadbakran02@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all flex items-center gap-2"
            >
              <Mail size={20} />
              {t.contact.email}
            </a>
            <a
              href="tel:+96393870119"
              className="px-8 py-4 bg-gray-800/50 border border-gray-700 text-gray-200 rounded-full font-semibold hover:border-emerald-500 hover:text-emerald-400 transition-all flex items-center gap-2"
            >
              <Phone size={20} />
              {t.contact.phone}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center gap-6"
          >
            <a
              href="https://linkedin.com/in/ahmad-bakran-80735b226"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 rounded-full hover:bg-emerald-500 hover:text-white transition-all border border-gray-700 hover:border-emerald-500"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/ahmad1bakran"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 rounded-full hover:bg-emerald-500 hover:text-white transition-all border border-gray-700 hover:border-emerald-500"
            >
              <Github size={24} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} {t.hero.name}. {lang === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}</p>
        </div>
      </footer>
    </div>
  );
}
