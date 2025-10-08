import Link from "next/link";

function Logo({ setIsOpen }) {
  return (
    <div>
      <Link onClick={() => setIsOpen(false)} href="/">
        logo
      </Link>
    </div>
  );
}

export default Logo;
