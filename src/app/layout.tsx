import "../globals.css";
import { LanguageProvider } from "./components/LanguageContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmad Bakran | Frontend Web & Mobile Developer",
  description:
    "Portfolio of Ahmad Bakran — Frontend web and mobile developer specializing in React.js, Next.js, and React Native.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-emerald-500/30 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
