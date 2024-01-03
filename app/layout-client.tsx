"use client";
import { split } from "@apollo/client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

export default function ThemeProvider({ children, ...props }) {

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
