import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "react-feather";
import { GitHub, Twitter, Youtube, Instagram } from "react-feather";

const SocialLink = ({ icon: Icon, href, alt, title }) => (
  <a
    href={href}
    target="_blank"
    className="flex w-8 p-2 h-8 items-center justify-center rounded-full hover:bg-yellow-200 dark:hover:text-yellow-300 focus:bg-yellow-200 focus:outline-green-800 focus:outline focus:outline-solid dark:hover:text-green-800"
    alt={alt}
    title={title || alt}
  >
    <Icon size={22} />
  </a>
);

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const links = [
    { href: "posts", text: "Posts" },
    { href: "about", text: "About" },
    { href: "contact", text: "Contact" },
  ];

  return (
    <header className="sticky top-4 bg-white dark:bg-gray-800 shadow-md rounded-2xl">
      <div className="container mx-auto block py-4 grid grid-cols-4 gap-4 items-center">
        <h1 className="block col-span-5 md:col-span-1 text-2xl font-bold">
          <Link href="/">
            <a className="hover:bg-yellow-200 dark:hover:text-black cursor-pointer">
              Nazar Maksymchuk
            </a>
          </Link>
        </h1>
        <div className="col-span-2">
          {links.map(({ text, href }, i) => (
            <Link href={href}>
              <a>{text + (i != links.length - 1 ? " | " : "")}</a>
            </Link>
          ))}
        </div>
        <div className="col-span-4 md:col-span-1 flex gap-2 text-right justify-end">
          <SocialLink
            href="https://github.com/MANTENN"
            alt="github"
            icon={GitHub}
          />
          <SocialLink
            href="https://twitter.com/MANTENNN"
            alt="Twitter"
            icon={Twitter}
          />
          <SocialLink
            href="https://www.youtube.com/@nazarm6215/videos"
            alt="Youtube"
            icon={Youtube}
          />
          <SocialLink
            href="https://www.instagram.com/mantennn/"
            alt="Instagram"
            icon={Instagram}
          />
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="ml-4 flex w-8 p-2 h-8 items-center justify-center rounded-full hover:bg-yellow-200 dark:hover:text-yellow-300 focus:bg-yellow-200 focus:outline-green-800 focus:outline focus:outline-solid dark:hover:text-green-800"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme != "dark" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};
