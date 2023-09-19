import Link from "./link";
import { GitHub, Twitter, Youtube, Instagram, Linkedin } from "react-feather";
import { IconLink } from "./icon-link";
import { ToggleDarkAndLightModeIcon } from "./toggle-theme";
import { Suspense } from "react";

export const Header = () => {
  const headerMenuLinks = [
    { href: "posts", text: "Posts" },
    { href: "pricing", text: "Pricing" },
    { href: "about", text: "About" },
    { href: "contact", text: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/MANTENN",
      alt: "GitHub",
      icon: GitHub,
    },
    {
      href: "https://twitter.com/mantennn",
      alt: "Twitter",
      icon: Twitter,
    },
    {
      href: "https://www.youtube.com/@nazarm6215/videos",
      alt: "Youtube",
      icon: Youtube,
    },
    {
      href: "https://www.instagram.com/mantennn/",
      alt: "Instagram",
      icon: Instagram,
    },
    {
      href: "https://linkedin.com/in/nmaksymchuk",
      alt: "LinkedIn",
      icon: Linkedin,
    },
  ];

  return (
    <header className="sticky top-4 bg-white bg-opacity-70 backdrop-filter backdrop-blur-md dark:bg-gray-800 shadow-xs border border-solid border-white border-opacity-10 rounded-2xl container padded-container mx-auto z-10">
      <div className="container mx-auto block py-4 grid grid-cols-4 gap-4 items-center">
        <h1 className="block col-span-1 md:col-span-1 text-2xl font-bold">
          <Link
            href="/"
            className="hover:bg-yellow-200 dark:hover:text-black cursor-pointer"
          >
            N<span className="hidden md:inline-block">azar Maksymchuk</span>
          </Link>
        </h1>
        <div className="hidden md:block md:col-span-2 divide-x dark:divide-gray-600">
          {headerMenuLinks.map(({ text, href }, i) => (
            <span className="px-3 py-1" key={i}>
              <Link
                href={href}
                className="hover:text-black hover:bg-yellow-200"
              >
                {text}
              </Link>
            </span>
          ))}
        </div>
        <div className="col-span-3 md:col-span-1 flex gap-2 text-right justify-end">
          {socialLinks.map(({ href, alt, icon }) => (
            <IconLink href={href} alt={alt} icon={icon} key={alt} />
          ))}
          <Suspense fallback={null}>
            <ToggleDarkAndLightModeIcon className={"ml-10"} />
          </Suspense>
        </div>
      </div>
    </header>
  );
};
