import Image from "next/image";
import Button from "../_components/Button";
import fodderImg from "@/public/fodder.jpg";
import cornSilageImg from "@/public/corn-silage.jpg";

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
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-8 lg:px-8">
      {/* Hero Section */}
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-primary mb-4 text-4xl font-bold sm:text-5xl">
            Feeder Solutions for Livestock
          </h1>
          <p className="text-text mb-6 text-lg">
            Discover our range of nutritious maize and corn silage products,
            specially formulated to boost the health and productivity of your
            cattle, buffalo, sheep, and goats. Our silage is harvested and
            processed with care to ensure maximum freshness and nutritional
            value.
          </p>
          <ul className="text-text mb-6 list-inside list-disc space-y-3">
            <li>
              <span className="text-primary font-semibold">Maize:</span> High in
              carbohydrates and energy, perfect for fattening and daily feeding.
            </li>
            <li>
              <span className="text-primary font-semibold">Corn Silage:</span>{" "}
              Fermented, high-moisture fodder that improves digestion and feed
              efficiency.
            </li>
            <li>
              <span className="text-primary font-semibold">Fodder Mixes:</span>{" "}
              Balanced blends for optimal animal growth and health.
            </li>
          </ul>
          <Button href="/contact" variant="primary">
            Contact for Bulk Orders
          </Button>
        </div>
        <div className="relative h-[320px] w-full sm:h-[400px]">
          <Image
            placeholder="blur"
            src={fodderImg}
            alt="Nutritious Fodder"
            fill
            className="rounded-2xl object-cover shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center">
        <div className="relative h-[260px] w-full">
          <Image
            placeholder="blur"
            src={cornSilageImg}
            alt="Corn Silage"
            fill
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-primary mb-4 text-3xl font-bold">
            Why Choose Our Feeder Products?
          </h2>
          <ul className="text-text list-inside space-y-3">
            <li>✅ Improves milk and meat production</li>
            <li>✅ Enhances animal health, growth, and fertility</li>
            <li>✅ Cost-effective, easy to store, and long shelf life</li>
            <li>✅ Locally sourced and processed for maximum freshness</li>
            <li>✅ Expert support and guidance for your feeding needs</li>
          </ul>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-16 rounded-xl bg-white p-8 shadow-md">
        <h3 className="text-primary mb-2 text-2xl font-semibold">
          How to Use Silage Effectively
        </h3>
        <p className="text-text mb-2">
          Introduce silage gradually into your animals&apos; diet. Ensure clean
          storage and regular monitoring for best results. Our team is always
          ready to help you with feeding plans and technical advice.
        </p>
        <p className="text-text">
          Contact us for custom solutions and expert recommendations tailored to
          your farm&apos;s needs.
        </p>
      </div>
    </section>
  );
}
