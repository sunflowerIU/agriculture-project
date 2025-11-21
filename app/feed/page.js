import Image from "next/image";
import Button from "../_components/Button";
import feedSection1 from "@/public/feed-section1.jpg";
import feedSection2 from "@/public/feed-section2.png";

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
export default function FeederPage() {
  return (
    <section className="mx-auto max-w-7xl px-2 py-6 text-xs sm:px-6 sm:py-8 sm:text-sm lg:py-10 lg:text-lg">
      {/* Hero Section */}
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-primary mb-4 text-base leading-tight font-bold sm:text-3xl lg:text-5xl">
            Feeder Solutions for Livestock
          </h1>
          <p className="text-text mb-4">
            Mash Cattle Feed is a complete, balanced formulation created to meet
            the nutritional needs of cattle at every growth stage. The mash form
            ensures fast digestion and smooth mixing with other feed
            ingredients, making it ideal for both small and large farms.
          </p>
          <p className="text-text mb-4">
            Made using premium maize, soya, Mustard cake, DORB, Maize DDGS, Rice
            DDGS and other essential mineral mixes according to feed formulation
          </p>
          <ul className="text-text mb-4 list-inside list-disc space-y-2">
            <li>Higher milk production</li>
            <li>Improved digestibility and gut health</li>
            <li>Enhanced immunity and energy levels</li>
            <li>Healthy weight gain and body condition</li>
            <li>Optimal growth for calves and heifers</li>
          </ul>
          <Button href="/contact" variant="primary">
            Contact for Bulk Orders
          </Button>
        </div>
        <div className="relative mx-auto h-[300px] w-[80%] sm:h-[280px] md:h-[340px] lg:h-[400px]">
          <Image
            placeholder="blur"
            src={feedSection1}
            alt="cattle feed"
            fill
            className="rounded-2xl object-center shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-center">
        <div className="relative mx-auto h-[300px] w-[80%] sm:h-[280px] md:h-[340px] lg:h-[400px]">
          <Image
            placeholder="blur"
            src={feedSection2}
            alt="cattle feed"
            fill
            className="rounded-2xl object-center shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-primary mb-2 text-base font-bold sm:text-2xl lg:text-4xl">
            Why Choose Our Feeder Products?
          </h2>
          <ul className="text-text list-inside space-y-2">
            <li>✅ Improves milk and meat production</li>
            <li>✅ Enhances animal health, growth, and fertility</li>
            <li>✅ Cost-effective, easy to store, and long shelf life</li>
            <li>✅ Locally sourced and processed for maximum freshness</li>
            <li>✅ Expert support and guidance for your feeding needs</li>
          </ul>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-12 rounded-xl bg-white p-6 shadow-md">
        <h3 className="text-primary mb-2 text-base font-bold sm:text-xl lg:text-2xl">
          How to use effectively
        </h3>
        <p className="text-text mb-2">
          Introduce our product gradually into your animals&apos; diet. Ensure
          clean storage and regular monitoring for best results. Our team is
          always ready to help you with feeding plans and technical advice.
        </p>
        <p className="text-text">
          Contact us for custom solutions and expert recommendations tailored to
          your farm&apos;s needs.
        </p>
      </div>
    </section>
  );
}
