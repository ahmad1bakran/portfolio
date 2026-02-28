"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 400);
    return () => clearTimeout(t);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] h-0.5 bg-emerald-500/80 animate-navigation-progress origin-left"
      aria-hidden
    />
  );
}
