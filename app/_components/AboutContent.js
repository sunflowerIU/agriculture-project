"use client";

import profile1 from "@/public/profile1.jpg";
import profile2 from "@/public/profile2.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import ContactFooter from "./ContactFooter";

function AboutContent() {
  return (
    <div className="text-text text-xs sm:text-sm lg:text-lg">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-green-800 to-green-700 py-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-base font-bold sm:text-3xl lg:text-5xl"
        >
          About Us
        </motion.h1>
        <p className="mx-auto mt-4 max-w-3xl text-lime-100">
          We are committed to delivering quality and building trust with our
          customers through innovation, excellence, and sustainability.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2">
        <div>
          <h2 className="mb-2 text-base font-bold text-green-900 sm:text-2xl lg:text-4xl">
            Our Mission
          </h2>
          <p className="leading-relaxed text-gray-700">
            To provide high-quality products and services that bring value to
            our clients and positively impact communities. We believe in
            sustainable practices and long-term growth for all stakeholders.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-base font-bold text-green-900 sm:text-2xl lg:text-4xl">
            Our Vision
          </h2>
          <p className="leading-relaxed text-gray-700">
            To be recognized as a trusted leader in our industry, setting new
            standards for innovation, integrity, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-8 text-base font-bold text-green-900 sm:text-2xl lg:text-4xl">
            Meet Our Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[1, 2, 3].map((id) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl bg-white p-4 shadow-lg"
              >
                <Image
                  src={profile1}
                  alt="Team member"
                  width={120}
                  height={120}
                  className="mx-auto rounded-full"
                />
                <h3 className="mt-3 font-semibold text-green-800">John Doe</h3>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                  Position Title
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-8 text-base font-bold text-green-900 sm:text-2xl lg:text-4xl">
            What Our Clients Say
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((id) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-left shadow-md"
              >
                <FaQuoteLeft className="text-lg text-green-700 opacity-70 sm:text-xl lg:text-2xl" />
                <p className="mt-3 text-xs text-gray-700 sm:text-sm lg:text-base">
                  &ldquo;This company has truly exceeded our expectations. The
                  quality of their service and dedication is unmatched.&ldquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Image
                    src={profile2}
                    alt="Client"
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="text-xs font-semibold text-green-800 sm:text-sm lg:text-base">
                      Jane Smith
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

      {/* Call to Action */}
      <ContactFooter />
    </div>
  );
}

export default AboutContent;
