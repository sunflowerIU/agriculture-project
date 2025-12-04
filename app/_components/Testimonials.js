"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

const testimonialsList = [
  {
    id: 1,
    name: "Salaka Dairy Farm Limited -Kathmandu",
    img: "/testimonials/salaka-farm.jpg",
    message:
      "Cattle Fodder Nepal has completely changed the health of my cows. The feed quality is excellent, fresh, and nutrient-rich. I’ve noticed higher milk production within weeks. Highly recommended for every dairy farmer.",
  },
  {
    id: 2,
    name: "Aapsika Gai Farm Pvt.Ltd",
    img: "/testimonials/aapsika-gai-farm.jpg",
    message:
      "I used to struggle finding consistent and hygienic fodder. After switching to Cattle Fodder Nepal, my animals look healthier and more energetic. Their customer service and fast delivery are a big plus.",
  },
  {
    id: 3,
    name: "Ghimire Cow Farm Pvt.Ltd -Kapan,Kathmandu",
    img: "/testimonials/ghimire-cow-farm.jpg",
    message:
      "The quality of the cattle mash and pellet feed is far better than anything I’ve bought locally. My buffaloes love it, and I’m seeing real improvement in their weight and milk output. Very satisfied.",
  },
  {
    id: 4,
    name: "Kalash Cattle Farm Pvt.Ltd",
    img: "/testimonials/kalash-cattle-farm.jpg",
    message:
      "Affordable price, top-class quality, and timely delivery — exactly what every farmer needs. Thank you Cattle Fodder Nepal for providing trustworthy products for our livestock.",
  },
  {
    id: 5,
    name: "Budhanilkantha School -Kathmandu, Nepal",
    img: "/testimonials/budhanilkantha-school.jpg",
    message:
      "I’ve been buying from Cattle Fodder Nepal for months now. The feed is always fresh and well-packed. My farm’s overall productivity has increased. Will definitely continue ordering!",
  },
];

function Testimonials() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-8 text-base font-bold text-green-900 sm:text-2xl lg:text-4xl">
          What Our Clients Say
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsList.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-left shadow-md"
            >
              <FaQuoteLeft className="text-lg text-green-700 opacity-70 sm:text-xl lg:text-2xl" />
              <p className="mt-3 text-xs text-gray-700 sm:text-sm lg:text-base">
                &ldquo; {testimonial.message} &ldquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Image
                  src={testimonial.img}
                  alt="Client"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <div>
                  <h4 className="text-xs font-semibold text-green-800 sm:text-sm lg:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500 sm:text-sm">
                    Happy Customer
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
