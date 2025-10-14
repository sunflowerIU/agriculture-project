"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import profile2 from "@/public/profile2.jpg";
import { FaQuoteLeft } from "react-icons/fa6";

function Testimonials() {
  return (
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
  );
}

export default Testimonials;
