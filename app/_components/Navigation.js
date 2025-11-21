"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa6";
import Logo from "./Logo";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products And Services",
    type: "dropdown",
    dropdownItems: [
      {
        name: "Cattle Feed",
        href: "/feed",
      },
      {
        name: "Corn Silage",
        href: "/silage",
      },
    ],
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
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    //turn off nav when clicking outside
    function handleClickOutside(e) {
      if (navRef && !navRef.current.contains(e.target)) {
        // console.log(navRef);
        setIsOpen(false);
        setOpenDropdown(null);
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const handleDropdownToggle = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
    setIsOpen(false);
  };

  const handleKeyDown = (e, itemName) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleDropdownToggle(itemName);
    } else if (e.key === "Escape") {
      setOpenDropdown(null);
    }
  };

  return (
    <div
      ref={navRef}
      className="bg-gray-20 z-20 w-full text-lg text-lime-50 shadow-2xs"
    >
      <nav className="bg-primary flex flex-row items-center justify-between p-4">
        {/* logo */}
        <Logo setIsOpen={setIsOpen} />
        {/* desktop nav */}
        <ul className="hidden flex-row items-center justify-between gap-1 font-semibold md:flex lg:gap-4">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              {item.type === "dropdown" ? (
                <div className="relative">
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    onKeyDown={(e) => handleKeyDown(e, item.name)}
                    className={`${navItemsClass} flex items-center gap-1`}
                    aria-expanded={openDropdown === item.name}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <FaChevronDown
                      className={`transition-transform duration-200 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                      size={12}
                    />
                  </button>
                  {openDropdown === item.name && (
                    <div className="bg-primary absolute top-full left-0 z-50 mt-1 w-48 rounded-md shadow-lg">
                      <ul className="py-1">
                        {item.dropdownItems.map((dropdownItem) => (
                          <li key={dropdownItem.href}>
                            <Link
                              href={dropdownItem.href}
                              onClick={closeAllDropdowns}
                              className="block px-6 py-3 text-xs font-medium text-lime-50 transition-colors duration-200 hover:text-lime-200 sm:text-sm lg:text-lg"
                            >
                              {dropdownItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  onClick={closeAllDropdowns}
                  href={item.href}
                  className={navItemsClass}
                >
                  {item.name}
                </Link>
              )}
            </li>
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

      {/* mobile nav */}
      <div
        role="menu"
        id="mobile-nav"
        className={`bg-primary absolute w-full overflow-hidden transition-all duration-500 ease-in-out md:max-h-0 md:opacity-0 ${isOpen ? "z-100 max-h-screen border-t border-b p-4 opacity-100" : "max-h-0 opacity-0"} `}
      >
        <ul className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.type === "dropdown" ? (
                <div>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    onKeyDown={(e) => handleKeyDown(e, item.name)}
                    className={`${navItemsClass} flex w-full items-center justify-between text-left`}
                    aria-expanded={openDropdown === item.name}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <FaChevronDown
                      className={`transition-transform duration-200 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                      size={12}
                    />
                  </button>
                  {openDropdown === item.name && (
                    <ul className="mt-2 ml-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <li key={dropdownItem.href}>
                          <Link
                            href={dropdownItem.href}
                            onClick={closeAllDropdowns}
                            className="block px-2 py-1 text-xs font-medium text-lime-50 transition-colors duration-200 hover:text-lime-200 sm:text-sm lg:text-lg"
                          >
                            {dropdownItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  role="menuitem"
                  onClick={closeAllDropdowns}
                  href={item.href}
                  className={navItemsClass}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
