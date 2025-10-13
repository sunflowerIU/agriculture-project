import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";

function Logo({ setIsOpen }) {
  return (
    <div className="bg-secondary relative h-10 w-10 cursor-pointer rounded-full">
      <Link onClick={() => setIsOpen(false)} href="/">
        <Image
          className="scale-200"
          src={logo}
          placeholder="blur"
          width={60}
          height={60}
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default Logo;
