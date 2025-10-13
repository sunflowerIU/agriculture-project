"use client";

import Link from "next/link";

export default function Button({
  children,
  href = "",
  onClick,
  variant = "primary", // primary, secondary, outline
  className = "",
}) {
  // Define variant styles
  const baseClasses =
    "inline-block font-semibold px-2 sm:px-6 py-3 rounded-lg hover:scale-110  shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-400 mt-6 cursor-pointer";

  const variants = {
    primary: "bg-primary hover:bg-lime-600 text-lime-50",
    secondary:
      "bg-secondary hover:bg-primary hover:text-secondary text-primary",
    outline: "border border-lime-500 text-lime-500 hover:bg-lime-50",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  // Render as <a> if href is provided, otherwise <button>
  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
