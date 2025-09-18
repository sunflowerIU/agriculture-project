"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import profile1 from "@/public/profile1.jpg";
import profile2 from "@/public/profile2.jpg";
import Button from "../_components/Button";

// export const metadata = {
//   title: "About Us ",
//   description:
//     `Learn more about ${process.env.COMPANY_NAME} – a trusted provider of Corn Silage and CornMeal Silage in Nepal. Our mission: quality feed, healthier livestock, happier farmers.`,
//   keywords: [
//     "About Corn Silage Supplier",
//     "Corn Silage Nepal Company",
//     "Livestock Feed Supplier",
//     "About Us Nepal Silage Seller",
//   ],
//   openGraph: {
//     title: `About Us | ${process.env.COMPANY_NAME}`,
//     description:
//       "Discover our journey and commitment to delivering top-quality livestock nutrition in Nepal.",
//     // url: "https://yourdomain.com/about",
//     // images: [
//     //   {
//     //     url: "/images/about-us.jpg",
//     //     width: 1200,
//     //     height: 630,
//     //     alt: "About Us - Corn Silage Supplier",
//     //   },
//     // ],
//     type: "profile",
//   },
// };

export default function About() {
  return (
    <div className="text-text -mt-10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-green-800 to-green-700 py-20 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold md:text-6xl"
        >
          About Us
        </motion.h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-lime-100">
          We are committed to delivering quality and building trust with our
          customers through innovation, excellence, and sustainability.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-green-900">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            To provide high-quality products and services that bring value to
            our clients and positively impact communities. We believe in
            sustainable practices and long-term growth for all stakeholders.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-green-900">
            Our Vision
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            To be recognized as a trusted leader in our industry, setting new
            standards for innovation, integrity, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-12 text-3xl font-bold text-green-900">
            Meet Our Team
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {[1, 2, 3].map((id) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl bg-white p-6 shadow-lg"
              >
                <Image
                  src={profile1}
                  alt="Team member"
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                />
                <h3 className="mt-4 text-lg font-semibold text-green-800">
                  John Doe
                </h3>
                <p className="text-gray-600">Position Title</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-12 text-3xl font-bold text-green-900">
            What Our Clients Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((id) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-left shadow-md"
              >
                <FaQuoteLeft className="text-3xl text-green-700 opacity-70" />
                <p className="mt-4 text-gray-700">
                  &ldquo;This company has truly exceeded our expectations. The
                  quality of their service and dedication is unmatched.&ldquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Image
                    src={profile2}
                    alt="Client"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-green-800">Jane Smith</h4>
                    <p className="text-sm text-gray-500">Happy Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="space-y-2.5 bg-green-800 py-16 text-center text-lime-50">
        <h2 className="text-3xl font-bold">Let’s Work Together</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-lime-100">
          Ready to grow with us? Get in touch today and discover how we can help
          you succeed.
        </p>
        <Button variant="secondary" href="/contact">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
