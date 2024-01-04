"use client";
import { split } from "@apollo/client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

import { usePathname } from "next/navigation";

const ReactPixel = import('react-facebook-pixel').then(x => x.default).catch(e => {
  console.log('error importing facebook pixel\n\n', e)
  return {};
})

export default function ThemeProvider({ children, ...props }) {
  useEffect(() => {

    ReactPixel.then((ReactPixel) => {
      // @ts-ignore
      ReactPixel.init(process.env.PIXEL_ID!)
    }).catch(e => console.log('error initializing facebook pixel:\n\n', e))

  }, [])

  const pathname = usePathname()
  useEffect(() => {
    ReactPixel.then(ReactPixel => {
      // @ts-ignore
      ReactPixel.pageView()
    }).catch(e => {
      console.log('error tracking pageView:\n\n', e)
    })
  }, [pathname])


  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
