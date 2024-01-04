"use client";
import { split } from "@apollo/client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

import { usePathname } from "next/navigation";

const ReactPixel = import('react-facebook-pixel').then(x => x.default)

export default function ThemeProvider({ children, ...props }) {
  useEffect(() => {
    ReactPixel.then((ReactPixel) => {
      ReactPixel.init(process.env.PIXEL_ID!)
    })
  }, [])
  const pathname = usePathname()
  useEffect(() => {
    ReactPixel.then(ReactPixel => ReactPixel.pageView())
  }, [pathname])


  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
