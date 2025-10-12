import cover from "@/public/cover.png";
// import img2 from "@/public/img2.jpg";
// import img3 from "@/public/img3.jpg";
import Image from "next/image";
import Button from "./_components/Button";
import ContactFooter from "./_components/ContactFooter";
import HomeContent from "./_components/HomeContents";
import PhoneNumber from "./_components/PhoneNumber";

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
    <div className="w-full text-lime-50">
      <header className="shadow-primary relative h-[500px] shadow-sm">
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
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-4 text-center">
          <h1 className="text-4xl font-bold drop-shadow-lg md:text-6xl">
            Welcome to Our Farm
          </h1>
          <p className="mt-4 max-w-2xl text-lg drop-shadow-md md:text-2xl">
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
