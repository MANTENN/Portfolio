"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "react-feather";
import { GitHub, Twitter, Youtube, Instagram, Linkedin } from "react-feather";

const IconLink = ({
  icon: Icon,
  href,
  alt,
  title,
  onClick,
  ariaLabel,
  className: customClassName,
  ...props
}) => {
  const className =
    "flex w-8 p-2 h-8 items-center justify-center rounded-full hover:bg-yellow-200 dark:hover:text-yellow-300 focus:bg-yellow-200 focus:outline-green-800 focus:outline focus:outline-solid dark:hover:text-green-800 dark:focus:text-green-800 transition-all duration-300	ease-in-out";
  if (onClick) {
    return (
      <button
        aria-label={ariaLabel}
        type="button"
        className={[className, customClassName].join(" ")}
        onClick={onClick}
        {...props}
      >
        <Icon size={18} />
      </button>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      className={className}
      rel="nofollow noreferrer noopener"
      alt={alt}
      title={title || alt}
    >
      <Icon size={22} />
    </a>
  );
};

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const headerMenuLinks = [
    { href: "posts", text: "Posts" },
    { href: "about", text: "About" },
    { href: "contact", text: "Contact" },
  ];

  return (
    <header className="sticky top-4 bg-white bg-opacity-70 backdrop-filter backdrop-blur-md dark:bg-gray-800 shadow-md rounded-2xl container padded-container mx-auto z-10">
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
          <IconLink
            href="https://github.com/MANTENN"
            alt="github"
            icon={GitHub}
          />
          <IconLink
            href="https://twitter.com/MANTENNN"
            alt="Twitter"
            icon={Twitter}
          />
          <IconLink
            href="https://www.youtube.com/@nazarm6215/videos"
            alt="Youtube"
            icon={Youtube}
          />
          <IconLink
            href="https://www.instagram.com/mantennn/"
            alt="Instagram"
            icon={Instagram}
          />
          <IconLink
            href="https://linkedin.com/in/nmaksymchuk"
            alt="LinkedIn"
            icon={Linkedin}
          />
          <IconLink
            ariaLabel={`Toggle ${theme != "dark" ? "Dark" : "light"} Mode`}
            icon={theme != "dark" ? Moon : Sun}
            className={"ml-4"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </div>
      </div>
    </header>
  );
};
