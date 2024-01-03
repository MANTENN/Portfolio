import Link from "./link";
import { GitHub, Twitter, Youtube, Instagram, Linkedin } from "react-feather";
import { IconLink } from "./icon-link";
import { ToggleDarkAndLightModeIcon } from "./toggle-theme";
import { Suspense } from "react";

import { Menu } from './menu'

export const Header = () => {
  const headerMenuLinks = [
    { href: "posts", title: "Posts" },
    { href: "pricing", title: "Pricing" },
    { href: "about", title: "About" },
    { href: "contact", title: "Contact" },
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
    <>
      <header className="sticky top-4 bg-white bg-opacity-70 dark:bg-opacity-80 backdrop-filter backdrop-blur-md dark:bg-gray-800 shadow-xs border border-solid border-gray-600 dark:border-gray-100 border-opacity-10 dark:border-opacity-10 rounded-2xl container padded-container mx-auto z-10">
        <div className="container mx-auto block py-4 px-4 2xl:px-0 grid grid-cols-4 gap-4 items-center">
          <h1 className="block col-span-1 md:col-span-1 text-2xl font-bold">
            <Link
              href="/"
              className="hover:bg-yellow-200 dark:hover:text-black cursor-pointer"
            >
              N<span className="hidden lg:inline-block">azar Maksymchuk</span>
            </Link>
          </h1>
          <div className="hidden md:block md:col-span-2">
            {headerMenuLinks.map(({ title, href }, i) => (
              <span className="px-3 py-1" key={i}>
                <Link
                  href={href}
                  className="hover:text-black hover:bg-yellow-200"
                >
                  {title}
                </Link>
              </span>
            ))}
          </div>
          <div className="col-span-3 md:col-span-1 flex gap-2 text-right justify-end">
            <div className="hidden md:flex col-span-3 md:col-span-1 gap-2 text-right justify-end">
              {socialLinks.map(({ href, alt, icon }) => (
                <IconLink href={href} alt={alt} icon={icon} key={alt} />
              ))}
            </div>
            <Suspense fallback={null}>
              <ToggleDarkAndLightModeIcon className={"ml-10"} />
              <Menu items={headerMenuLinks} socialLinks={socialLinks.map(({ href, alt, icon }) => (
                <IconLink href={href} alt={alt} icon={icon} key={alt} />
              ))} />
            </Suspense>
          </div>
        </div>
      </header>
      <div id="menu_portal" />
    </>
  );
};
