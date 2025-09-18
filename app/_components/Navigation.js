"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Logo from "./Logo";

const navItems = [
  {
    name: "Corn Silage",
    href: "/corn-silage",
  },
  {
    name: "CornMeal Silage",
    href: "/cornMeal-silage",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },

  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

const navItemsClass = `
  relative px-3 py-2 font-medium text-lime-50
  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
  after:bg-lime-200 after:transition-all after:duration-300
  hover:after:w-full hover:text-lime-200
`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-20 fixed top-0 left-0 z-20 w-full text-lg text-lime-50 shadow-2xs">
      <nav className="bg-primary flex flex-row items-center justify-between p-4">
        {/* logo */}
        <Logo />
        {/* desktop nav */}
        <ul className="hidden flex-row justify-between gap-2 font-semibold md:flex">
          {navItems.map((items) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={items.href}
              href={items.href}
              className={navItemsClass}
            >
              <li>{items.name}</li>
            </Link>
          ))}
        </ul>

        {/* button for nav-mobile */}
        <button
          aria-controls="mobile-nav"
          role="menu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((state) => !state)}
          className="cursor-pointer md:hidden"
        >
          <FaBars size={32} />
        </button>
      </nav>

      {/* dropdown nav */}
      <div
        id="mobile-nav"
        className={`bg-primary overflow-hidden border-t border-b transition-all duration-500 ease-in-out md:max-h-0 md:opacity-0 ${isOpen ? "max-h-screen p-4 opacity-100" : "max-h-0 opacity-0"} `}
      >
        <ul className="flex flex-col space-y-3">
          {navItems.map((items) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={items.href}
              href={items.href}
              className={navItemsClass}
            >
              <li>{items.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
