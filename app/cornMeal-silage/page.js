import fodder from "@/public/fodder.jpg";
import Image from "next/image";
import Button from "../_components/Button";

export const metadata = {
  title: "CornMeal Silage",
  description:
    "High-quality CornMeal Silage, processed for better digestibility, energy, and nutrition to improve livestock productivity.",
  openGraph: {
    title: `CornMeal Silage | ${process.env.COMPANY_NAME}`,
    description:
      "Discover our nutrient-packed CornMeal Silage — a perfect feed solution for dairy cattle and livestock.",
    url: "/cornMeal-silage",
    images: ["/fodder.jpg"],
  },
};

export default function CornMealSilagePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-8 lg:px-8">
      {/* Hero Section */}
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-primary text-4xl font-bold sm:text-5xl">
            Premium CornMeal Silage
          </h1>
          <p className="text-text mt-6 text-lg">
            Our CornMeal Silage is carefully prepared to provide a balanced mix
            of energy and fiber, ensuring optimum nutrition for livestock. It is
            finely chopped, easily digestible, and stored in airtight packaging
            to maintain freshness.
          </p>

          <ul className="text-text mt-6 space-y-3">
            <li>✅ Provides high energy for dairy and beef cattle</li>
            <li>✅ Improves digestion and feed efficiency</li>
            <li>✅ Enhances milk production and growth rate</li>
            <li>✅ Well-packed for long-term storage</li>
          </ul>

          <Button href="/contact">Contact Us</Button>
        </div>

        {/* Product Image */}
        <div className="relative h-[350px] w-full sm:h-[450px]">
          <Image
            placeholder="blur"
            src={fodder}
            alt="CornMeal Silage"
            fill
            className="rounded-2xl object-cover shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-20">
        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
          Why Farmers Choose Our CornMeal Silage?
        </h2>
        <p className="text-text mt-4 max-w-3xl">
          We deliver top-quality CornMeal Silage that is nutrient-dense,
          cost-effective, and helps farmers maximize livestock health and
          productivity with every feed cycle.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-green-50 p-6 shadow-md">
            <h3 className="text-primary text-xl font-semibold">Energy Boost</h3>
            <p className="text-text mt-3">
              High starch content ensures sufficient energy for dairy and beef
              cattle.
            </p>
          </div>

          <div className="rounded-xl bg-green-50 p-6 shadow-md">
            <h3 className="text-primary text-xl font-semibold">
              Improved Digestion
            </h3>
            <p className="text-text mt-3">
              Finely chopped and fermented for better digestibility and higher
              feed intake.
            </p>
          </div>

          <div className="rounded-xl bg-green-50 p-6 shadow-md">
            <h3 className="text-primary text-xl font-semibold">
              Long-Lasting Freshness
            </h3>
            <p className="text-text mt-3">
              Packed under strict hygienic conditions for a long shelf life.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-secondary bg-primary mt-20 rounded-2xl px-8 py-12 text-center shadow-xl">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Strengthen Your Herd with Premium CornMeal Silage
        </h2>
        <p className="mt-4 text-lg">
          Place your order today and give your livestock the best nutrition for
          growth and productivity.
        </p>
        <Button variant="secondary" href="/contact">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
