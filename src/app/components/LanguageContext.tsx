"use client";

import React, { createContext, useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { Language } from "../lib/data";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
  lang: urlLang,
}: {
  children: React.ReactNode;
  lang: Language;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const lang = urlLang === "ar" ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [dir, lang]);

  const toggleLang = () => {
    const otherLang = lang === "en" ? "ar" : "en";
    // pathname is e.g. /en or /en/projects — replace first segment with other lang
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = otherLang;
    const newPath = "/" + segments.join("/");
    router.push(newPath);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
