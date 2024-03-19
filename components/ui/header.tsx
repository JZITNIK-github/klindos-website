import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import logo from "@/public/logo/logo.png";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 mr-4">
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                alt="KLIND OS logo"
                src={logo}
                height={50}
                width={50}
              ></Image>
            </Link>
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/blog"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/changelog"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  href="/compiler"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Vytváření aplikací
                </Link>
              </li>
              <li>
                <Link
                  href="/developers"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Developers
                </Link>
              </li>

              <li>
                <Link
                  href="/download"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
                >
                  Stáhnout
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
