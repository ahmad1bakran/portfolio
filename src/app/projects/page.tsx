"use client";

import { useLanguage } from "../components/LanguageContext";
import { portfolioData } from "../lib/data";
import { getPublicUrl } from "../lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { Globe } from "lucide-react";
import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const scrollReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const viewportConfig = { once: true, margin: "-80px" };

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <Globe className="w-20 h-20 text-gray-600" aria-hidden />
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
      onError={() => setFailed(true)}
    />
  );
}

export default function ProjectsPage() {
  const { lang } = useLanguage();
  const t = portfolioData[lang];

  return (
    <div className="min-h-screen bg-[#000000] text-gray-100 relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 inset-s-1/4 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 inset-e-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <Nav />

      <main className="relative pt-14 sm:pt-16">
        {/* Page title */}
        <section className="py-20 sm:py-24 px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <Globe className="w-8 h-8 text-gray-500" aria-hidden />
              <div className="h-px w-16 bg-gradient-to-e from-emerald-500/60 to-cyan-500/60 rounded-full" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-100">
                {t.projects.title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Full-width project blocks, alternating layout */}
        <div className="space-y-0">
          {t.projects.items.map((project, idx) => {
            const isAlternate = idx % 2 === 1;
            return (
              <motion.section
                key={idx}
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                transition={{ delay: 0.1 }}
                className={`min-h-screen flex flex-col md:flex-row items-center gap-12 lg:gap-20 py-24 lg:py-32 px-6 sm:px-8 lg:px-12 ${
                  isAlternate ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 w-full max-w-2xl mx-auto md:mx-0 text-start pe-0 md:pe-12 lg:pe-16 order-2 md:order-1">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-100 mb-4">
                    {project.title}
                  </h2>
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
                    isAlternate
                      ? "md:ps-0 md:pe-12 lg:pe-16"
                      : "md:ps-12 lg:ps-16"
                  }`}
                >
                  <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-white/3 border border-white/6">
                    {project.image ? (
                      <ProjectImage
                        src={getPublicUrl(project.image)}
                        alt={project.title}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Globe
                          className="w-20 h-20 text-gray-600"
                          aria-hidden
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
