"use client";

import { useEffect } from "react";
import AOS from "aos";
export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration (ms)
      once: true, // whether animation should happen only once
      offset: 100, // offset (in px) from the original trigger point
    });
  }, []);

  return <>{children}</>;
}
