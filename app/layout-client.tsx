"use client";
import { split } from "@apollo/client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

import { usePathname } from "next/navigation";

export default function ThemeProvider({ children, ...props }) {
  const pathname = usePathname()
  useEffect(() => {
    try {
      // @ts-ignore
      fbq('track', 'PageView');
    } catch (e) {
      console.log('facebook pixel tracker blocked')
    }
  }, [pathname])


  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
