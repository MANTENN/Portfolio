"use client";
import { IconLink } from "./icon-link";
import { useTheme } from "next-themes";

import { Moon, Sun } from "react-feather";

export const ToggleDarkAndLightModeIcon = ({ className }) => {
  const { theme, setTheme } = useTheme();

  return (
    <IconLink
      ariaLabel={`Toggle ${theme != "dark" ? "Dark" : "light"} Mode`}
      icon={theme != "dark" ? Moon : Sun}
      className={"ml-4"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
};
