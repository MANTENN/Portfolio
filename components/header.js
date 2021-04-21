import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "react-feather";
import { GitHub } from "react-feather";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const links = [
    { href: "posts", text: "Posts" },
    { href: "about", text: "About" },
  ];

  return (
    <header className="container mx-auto block py-4 grid grid-cols-4 gap-4 items-center">
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
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="text-base hover:text-blue-700 ml-2 dark:text-gray-200 dark:hover:text-yellow-300"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme != "dark" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
      <div className="col-span-1 text-right">
        <a
          href="https://github.com/MANTENN"
          className="flex w-8 p-2 h-8 items-center justify-center rounded-full hover:bg-yellow-200 dark:hover:text-yellow-300"
          alt="github"
        >
          <GitHub size={22} />
        </a>
      </div>
    </header>
  );
};
