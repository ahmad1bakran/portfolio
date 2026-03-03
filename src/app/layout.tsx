import "../globals.css";
import type { Metadata } from "next";
import NavigationProgress from "./components/NavigationProgress";

const siteName = "Ahmad Bakran";
const role = "Frontend Web & Mobile Developer";
const defaultDescription =
  "Portfolio of Ahmad Bakran — Frontend web and mobile developer specializing in React.js, Next.js, and React Native. Building scalable, user-friendly web and mobile applications.";
const keywords = [
  "Ahmad Bakran",
  "Frontend Developer",
  "Web Developer",
  "Mobile Developer",
  "React.js",
  "Next.js",
  "React Native",
  "TypeScript",
  "Tailwind CSS",
  "portfolio",
  "Syria",
  "Hama",
];

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://ahmadbakran.dev",
  ),
  title: {
    default: `${siteName} | ${role}`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: keywords.join(", "),
  authors: [
    { name: siteName, url: "https://linkedin.com/in/ahmad-bakran-80735b226" },
  ],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    siteName,
    title: `${siteName} | ${role}`,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | ${role}`,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    // Add your verification IDs when you have them (e.g. Google Search Console)
    // google: "your-google-verification-id",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahmad Bakran",
  jobTitle: "Frontend Web & Mobile Developer",
  description: defaultDescription,
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://ahmad1bakran.github.io/portfolio",
  sameAs: [
    "https://linkedin.com/in/ahmad-bakran-80735b226",
    "https://github.com/ahmad1bakran",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hama",
    addressCountry: "SY",
  },
};

function getFaviconPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base.replace(/\/$/, "")}${normalized}` : normalized;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faviconLight = "../images/logo2.webp";
  const faviconDark = "../images/logo2.webp";
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Light mode tab icon */}
        <link
          rel="icon"
          href={faviconLight}
          media="(prefers-color-scheme: light)"
        />
        {/* Dark mode tab icon */}
        <link
          rel="icon"
          href={faviconDark}
          media="(prefers-color-scheme: dark)"
        />
        {/* Fallback for browsers  */}
        <link rel="icon" href={faviconLight} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-emerald-500/30 selection:text-white">
        <NavigationProgress />
        {children}
      </body>
    </html>
  );
}
