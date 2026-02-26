"use client";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiFigma,
  SiGithub,
} from "react-icons/si";
import { Webhook, LayoutTemplate, Languages, Code2 } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "HTML5": SiHtml5,
  "CSS3": SiCss3,
  "JavaScript (ES6+)": SiJavascript,
  "TypeScript": SiTypescript,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "React Native": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Bootstrap": SiBootstrap,
  "SASS": SiSass,
  "Figma": SiFigma,
  "Git & GitHub": SiGithub,
  "REST APIs": Webhook,
  "Responsive Design": LayoutTemplate,
  "التصميم المتجاوب": LayoutTemplate,
  "Arabic: Native": Languages,
  "English: B2": Languages,
  "العربية: اللغة الأم": Languages,
  "الإنجليزية: B2": Languages,
};

const defaultIcon = Code2;

export function SkillIcon({
  name,
  className = "w-4 h-4",
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? defaultIcon;
  return <Icon className={className} aria-hidden />;
}
