import cover from "@/public/cover.png";
// import img2 from "@/public/img2.jpg";
// import img3 from "@/public/img3.jpg";
import Image from "next/image";
import Button from "./_components/Button";
import ContactFooter from "./_components/ContactFooter";
import HomeContent from "./_components/HomeContents";
import PhoneNumber from "./_components/PhoneNumber";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

export const metadata = {
  title: process.env.NEXT_PUBLIC_COMPANY_NAME,
  description: `Welcome to ${process.env.NEXT_PUBLIC_COMPANY_NAME}. Nepal’s trusted provider of high-quality Corn Silage and CornMeal Silage. Explore our premium products and boost livestock productivity.`,
  keywords: [
    "Corn Silage Nepal",
    "Quality CornMeal Silage",
    "Livestock Feed",
    "Premium Silage Supplier",
    "Best Corn Silage",
  ],
  openGraph: {
    title: `Premium Corn Silage & CornMeal | ${process.env.NEXT_PUBLIC_COMPANY_NAME}`,
    description:
      "Discover high-quality Corn Silage and CornMeal Silage from Nepal Silage Seller. Ensuring superior nutrition for livestock.",
    siteName: process.env.NEXT_PUBLIC_COMPANY_NAME,
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: `${process.env.NEXT_PUBLIC_COMPANY_NAME} cover page`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  // console.log(process.env.NEXT_PUBLIC_COMPANY_NAME);
  return (
    <div className="w-full text-xs text-lime-50 sm:text-sm lg:text-lg">
      <header className="shadow-primary relative h-[400px] shadow-sm sm:h-[500px]">
        <Image
          src={cover}
          priority
          fill
          alt="cover image"
          placeholder="blur"
          className="-z-10 object-cover object-center shadow-xl shadow-green-50"
        />
        {/* overlay */}
        <div className="bg-primary/10 absolute inset-0 -z-5"></div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-2 text-center">
          <h1 className="text-primary bg-secondary text-bold rounded-xl px-4 py-1 text-xl leading-tight font-bold drop-shadow-lg sm:text-3xl lg:text-5xl">
            Welcome to {process.env.NEXT_PUBLIC_COMPANY_NAME}
          </h1>
          <p className="mt-2 max-w-2xl drop-shadow-md">
            Discover premium-quality corn silage and feed solutions for your
            livestock. Fresh, nutritious, and grown with care to maximize
            productivity and sustainability.
          </p>

          <Button href="/contact" variant="primary">
            Contact Us Now
          </Button>

          <PhoneNumber />
        </div>
      </header>

      {/* contents */}
      <HomeContent />

      {/* footer */}
      <ContactFooter />
    </div>
  );
}
