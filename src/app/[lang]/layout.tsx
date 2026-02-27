import React from "react";
import { redirect } from "next/navigation";
import { LanguageProvider } from "../components/LanguageContext";
import type { Language } from "../lib/data";

const VALID_LANGS: Language[] = ["en", "ar"];

export function generateStaticParams() {
  return VALID_LANGS.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const normalized = (VALID_LANGS.includes(lang as Language) ? lang : "en") as Language;
  if (lang !== normalized) {
    redirect(`/${normalized}`);
  }
  return <LanguageProvider lang={normalized}>{children}</LanguageProvider>;
}
