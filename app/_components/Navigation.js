"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";
import Logo from "./Logo";

const navItems = [
  {
    name: "Products And Services",
    href: "/products",
  },
  {
    name: "Cattle Feed",
    href: "/feed",
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
  relative px-2 py-1 font-medium text-lime-50 text-xs sm:text-sm lg:text-lg
  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
  after:bg-lime-200 after:transition-all after:duration-300
  hover:after:w-full hover:text-lime-200
`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    //turn off nav when clicking outside
    function handleClickOutside(e) {
      if (navRef && !navRef.current.contains(e.target)) {
        // console.log(navRef);
        setIsOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      ref={navRef}
      className="bg-gray-20 z-20 w-full text-lg text-lime-50 shadow-2xs"
    >
      <nav className="bg-primary flex flex-row items-center justify-between p-4">
        {/* logo */}
        <Logo setIsOpen={setIsOpen} />
        {/* desktop nav */}
        <ul className="hidden flex-row justify-between gap-1 font-semibold md:flex lg:gap-4">
          {navItems.map((items) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={items.href}
              href={items.href}
              className={navItemsClass}
            >
              {items.name}
            </Link>
          ))}
        </ul>

        {/* button for nav-mobile */}
        <button
          aria-controls="mobile-nav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((state) => !state)}
          className="cursor-pointer md:hidden"
        >
          <FaBars size={32} />
        </button>
      </nav>

      {/* dropdown nav */}
      <div
        role="menu"
        id="mobile-nav"
        className={`bg-primary absolute w-full overflow-hidden transition-all duration-500 ease-in-out md:max-h-0 md:opacity-0 ${isOpen ? "z-100 max-h-screen border-t border-b p-4 opacity-100" : "max-h-0 opacity-0"} `}
      >
        <ul className="flex flex-col space-y-2">
          {navItems.map((items) => (
            <Link
              role="menuitem"
              onClick={() => setIsOpen(false)}
              key={items.href}
              href={items.href}
              className={navItemsClass}
            >
              {items.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
