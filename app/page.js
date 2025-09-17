import img1 from "@/public/img1.avif";
// import img2 from "@/public/img2.avif";
// import img3 from "@/public/img3.jpg";
import Image from "next/image";
import Button from "./_components/Button";

export const metadata = {
  title: {
    template: "%s | Nepal Silage Seller",
    default: "Nepal Silage Seller",
  },
  description:
    "Welcome to Nepal Silage Seller. Nepal’s trusted provider of high-quality Corn Silage and CornMeal Silage. Explore our premium products and boost livestock productivity.",
  keywords: [
    "Corn Silage Nepal",
    "Quality CornMeal Silage",
    "Livestock Feed",
    "Premium Silage Supplier",
    "Best Corn Silage",
  ],
  openGraph: {
    title: "Premium Corn Silage & CornMeal | Nepal Silage Seller",
    description:
      "Discover high-quality Corn Silage and CornMeal Silage from Nepal Silage Seller. Ensuring superior nutrition for livestock.",
    // url: "https://yourdomain.com",
    siteName: "Nepal Silage Seller",
    images: [
      {
        url: "/img1.avif",
        width: 1200,
        height: 630,
        alt: "Premium Corn Silage Cover Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="relative -mt-20 h-screen w-full">
      <Image
        src={img1}
        priority
        fill
        alt="cover image"
        placeholder="blur"
        className="-z-10 object-cover object-center shadow-xl shadow-green-50"
      />
      {/* overlay */}
      <div className="bg-primary/30 absolute inset-0 -z-5"></div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-4 text-center">
        <h1 className="text-4xl font-bold text-lime-50 drop-shadow-lg md:text-6xl">
          Welcome to Our Farm
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-lime-50 drop-shadow-md md:text-2xl">
          Discover premium-quality corn silage and feed solutions for your
          livestock. Fresh, nutritious, and grown with care to maximize
          productivity and sustainability.
        </p>

        <Button href="/contact" variant="primary">
          Contact Us Now
        </Button>
      </div>
    </div>
  );
}
