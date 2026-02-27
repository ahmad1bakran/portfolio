"use client";

import { useLanguage } from "./LanguageContext";
import { portfolioData } from "../lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import { getPublicUrl } from "../lib/utils";

const LOGO_SRC = "../images/logo2.png";

export function NavLogo() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <Code2 className="w-6 h-6 text-gray-400 shrink-0" aria-hidden />;
  }
  return (
    <Image
      src={getPublicUrl(LOGO_SRC)}
      alt=""
      width={32}
      height={32}
      className="shrink-0"
      onError={() => setFailed(true)}
    />
  );
}

export default function Nav() {
  const { lang, toggleLang, dir } = useLanguage();
  const pathname = usePathname();
  const t = portfolioData[lang];
  const isProjectsPage = pathname.includes("/projects");

  const [activeSection, setActiveSection] = useState(
    isProjectsPage ? "projects" : "hero",
  );

  useEffect(() => {
    if (isProjectsPage) {
      setActiveSection("projects");
      return;
    }
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
  }, [isProjectsPage]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full min-w-full border-b border-white/10 bg-black/70 backdrop-blur-2xl"
      aria-label="Main"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
        {isProjectsPage ? (
          <Link
            href={`/${lang}`}
            className="flex items-center gap-2 text-gray-100 font-semibold tracking-tight hover:opacity-80 transition-opacity shrink-0"
          >
            <NavLogo />
            <span className="truncate">{t.hero.name}</span>
          </Link>
        ) : (
          <motion.button
            initial={{ opacity: 0, x: dir === "ltr" ? -12 : 12 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-gray-100 font-semibold tracking-tight hover:opacity-80 transition-opacity shrink-0"
          >
            <NavLogo />

            <span className="truncate">{t.hero.name}</span>
          </motion.button>
        )}

        <div className="hidden md:flex items-center justify-center gap-1 flex-1 min-w-0">
          {Object.entries(t.nav).map(([key]) => {
            const isProjects = key === "projects";
            const isActive =
              (isProjectsPage && isProjects) ||
              (!isProjectsPage && activeSection === key);
            if (isProjects) {
              return (
                <Link
                  key={key}
                  href={`/${lang}/projects`}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors shrink-0 ${
                    isActive
                      ? "text-gray-100 bg-white/10"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {t.nav[key as keyof typeof t.nav]}
                </Link>
              );
            }
            if (isProjectsPage) {
              return (
                <Link
                  key={key}
                  href={`/${lang}#${key}`}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors shrink-0 ${
                    isActive
                      ? "text-gray-100 bg-white/10"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {t.nav[key as keyof typeof t.nav]}
                </Link>
              );
            }
            return (
              <button
                key={key}
                onClick={() => scrollToSection(key === "about" ? "about" : key)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors shrink-0 ${
                  isActive
                    ? "text-gray-100 bg-white/10"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {t.nav[key as keyof typeof t.nav]}
              </button>
            );
          })}
        </div>

        <button
          onClick={toggleLang}
          className="text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors px-3 py-2 rounded-lg hover:bg-white/5 shrink-0"
        >
          {lang === "en" ? "عربي" : "English"}
        </button>
      </div>
    </nav>
  );
}
