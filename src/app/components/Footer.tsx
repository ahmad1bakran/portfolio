"use client";

import { useLanguage } from "./LanguageContext";
import { portfolioData } from "../lib/data";
import { NavLogo } from "./Nav";
import Image from "next/image";

export default function Footer() {
  const { lang } = useLanguage();
  const t = portfolioData[lang];
  return (
    <footer className="py-12 px-6 sm:px-8 lg:px-12 border-t border-white/6">
      <div className="max-w-6xl mx-auto w-full text-center text-sm text-gray-500">
        <p className="flex items-center justify-center gap-2">
          <Image
            src={"../images/logo2.webp"}
            alt=""
            width={32}
            height={32}
            className="shrink-0"
          />
          © {new Date().getFullYear()} {t.hero.name}.{" "}
          {lang === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}
        </p>
      </div>
    </footer>
  );
}
