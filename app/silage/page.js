import Image from "next/image";
import Button from "../_components/Button";
import silageSection1 from "@/public/silage-section1.jpg";
import silageSection2 from "@/public/silage-section2.jpg";

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
            Premium Bale Silage Solutions for Modern Livestock Farming
          </h1>

          <p className="text-text mb-4">
            PCFI Pvt. Ltd. is a trusted manufacturer of high-quality bale
            silage, dedicated to improving livestock nutrition and supporting
            sustainable agricultural practices. With over four years of
            expertise, we deliver scientifically prepared silage designed for
            maximum freshness, digestibility, and farm efficiency.
          </p>

          <p className="text-text mb-4">
            Our bale silage is expertly fermented and packed in convenient 100
            kg round bales—ideal for dairy farms, feedlot operations, and
            commercial livestock businesses. Every bale is produced using
            advanced technology to ensure consistent quality, long shelf life,
            and superior nutrient preservation.
          </p>

          <ul className="text-text mb-4 list-inside list-disc space-y-2">
            <li>Enhanced livestock nutrition and energy levels</li>
            <li>Consistent quality with advanced fermentation technology</li>
            <li>Easy storage, transport, and feeding</li>
            <li>Long shelf life and weather-resistant packaging</li>
            <li>Suitable for dairy cattle, buffaloes, goats, and sheep</li>
          </ul>

          <Button href="/contact" variant="primary">
            Contact for Bulk Orders
          </Button>
        </div>
        <div className="relative mx-auto h-[300px] w-[80%] sm:h-[280px] md:h-[340px] lg:h-[400px]">
          <Image
            placeholder="blur"
            src={silageSection1}
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
            src={silageSection2}
            alt="cattle feed"
            fill
            className="rounded-2xl object-center shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-primary mb-2 text-base font-bold sm:text-2xl lg:text-4xl">
            Why Choose Our Bale Silage?
          </h2>

          <ul className="text-text list-inside space-y-2">
            <li>
              ✅ Improves milk yield, body weight, and overall livestock health
            </li>
            <li>
              ✅ Packed in 100 kg durable round bales for convenience and
              flexibility
            </li>
            <li>
              ✅ Fermented using scientific standards to ensure optimal
              nutrition
            </li>
            <li>
              ✅ Cost-effective and reduces dependence on seasonal green fodder
            </li>
            <li>
              ✅ Expert consultation available for storage, feeding, and farm
              planning
            </li>
          </ul>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-12 rounded-xl bg-white p-6 shadow-md">
        <h3 className="text-primary mb-2 text-base font-bold sm:text-xl lg:text-2xl">
          Best Practices for Using Bale Silage
        </h3>

        <p className="text-text mb-2">
          Introduce silage gradually into your livestock’s diet to ensure smooth
          digestion and adaptation. Once opened, use the bale within the
          recommended time and store it in a clean, dry place to maintain
          quality.
        </p>

        <p className="text-text">
          Our team at PCFI also provides expert guidance on storage, feeding
          schedules, and farm-specific silage strategies to help maximize your
          livestock productivity.
        </p>
      </div>
    </section>
  );
}
