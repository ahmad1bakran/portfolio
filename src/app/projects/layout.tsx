import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Projects",
  description:
    "Explore web and mobile projects by Ahmad Bakran — Next.js, React.js, React Native, and full-stack applications. E-commerce, dashboards, landing pages, and more.",
  openGraph: {
    title: "Featured Projects | Ahmad Bakran",
    description:
      "Explore web and mobile projects by Ahmad Bakran — Next.js, React.js, React Native, and full-stack applications.",
  },
  twitter: {
    title: "Featured Projects | Ahmad Bakran",
    description:
      "Explore web and mobile projects by Ahmad Bakran — Next.js, React.js, React Native, and full-stack applications.",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
