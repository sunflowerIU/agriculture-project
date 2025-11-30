import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo({ setIsOpen }) {
  return (
    <Link href="/" onClick={() => setIsOpen(false)}>
      <div className="relative h-10 w-10 cursor-pointer rounded-full">
        <Image
          src={logo}
          quality={100}
          alt="logo"
          fill
          className="scale-120 object-cover"
          placeholder="blur"
        />
      </div>
    </Link>
  );
}

export default Logo;
