import Image from "next/image";
import cornSilage from "@/public/corn-silage.jpg";
import Button from "../_components/Button";

export const metadata = {
  title: "Corn Silage",
  description:
    "Premium quality corn silage that ensures high nutrition, long shelf life, and increased milk production for dairy farmers.",
  openGraph: {
    title: "Quality Corn Silage | Your Brand Name",
    description:
      "Discover our premium corn silage, carefully processed to retain freshness and nutrients for your livestock.",
    url: "https://yourdomain.com/quality-corn-silage",
    images: ["/images/corn-silage-og.jpg"],
  },
};

export default function QualityCornSilagePage() {
  return (
    <section className="mx-auto max-w-7xl py-10 sm:px-8 lg:px-8">
      {/* Hero Section */}
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-primary text-4xl font-bold sm:text-5xl">
            Premium Quality Corn Silage
          </h1>
          <p className="text-text mt-6 text-lg">
            Our corn silage is harvested at the right stage and preserved under
            ideal conditions to provide your cattle with the best nutrition.
            Rich in energy, fiber, and digestibility, it helps boost milk yield
            and livestock health.
          </p>

          <ul className="text-text mt-6 space-y-3">
            <li>✅ High nutritional value with optimal starch content</li>
            <li>✅ Naturally fermented for improved digestibility</li>
            <li>✅ Long shelf life with proper preservation</li>
            <li>✅ Suitable for dairy cows, buffaloes, and other livestock</li>
          </ul>

          <Button href="/contact">Contact Us</Button>
        </div>

        {/* Product Image */}
        <div className="relative h-[350px] w-full sm:h-[450px]">
          <Image
            src={cornSilage}
            alt="Quality Corn Silage"
            fill
            className="rounded-2xl object-cover shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-20">
        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
          Why Choose Our Corn Silage?
        </h2>
        <p className="text-text mt-4 max-w-3xl">
          We combine advanced harvesting methods with modern preservation
          techniques to deliver high-quality silage that supports better milk
          production, animal growth, and cost efficiency for farmers.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-green-50 p-6 shadow-md">
            <h3 className="text-primary text-xl font-semibold">
              Nutrient-Rich
            </h3>
            <p className="text-text mt-3">
              Packed with essential fibers, starch, and vitamins for livestock
              health.
            </p>
          </div>

          <div className="rounded-xl bg-green-50 p-6 shadow-md">
            <h3 className="text-primary text-xl font-semibold">
              Cost-Effective
            </h3>
            <p className="text-text mt-3">
              Reduce feed costs while improving productivity and animal welfare.
            </p>
          </div>

          <div className="rounded-xl bg-green-50 p-6 shadow-md">
            <h3 className="text-primary text-xl font-semibold">
              Long Shelf Life
            </h3>
            <p className="text-text mt-3">
              Properly packed to last longer while maintaining freshness.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 rounded-2xl bg-green-900 px-8 py-12 text-center text-white shadow-xl">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Ready to Boost Your Farm’s Productivity?
        </h2>
        <p className="mt-4 text-lg">
          Get in touch with us today and order premium quality corn silage for
          your livestock.
        </p>
        <Button href="/contact" variant="secondary">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
