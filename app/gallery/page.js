"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import img1 from "@/public/img1.avif";
import img2 from "@/public/img2.avif";
import img3 from "@/public/img3.jpg";
import profile1 from "@/public/profile1.jpg";
import profile2 from "@/public/profile2.jpg";

// export const metadata = {
//   title: "Product Gallery",
//   description:
//     "Browse our gallery of premium products including Corn Silage, CornMeal Silage, and livestock feed solutions.",
//   keywords: [
//     "Corn Silage Gallery",
//     "CornMeal Silage Gallery",
//     "Livestock Feed Products",
//     "Silage Images Nepal",
//   ],
//   openGraph: {
//     title: "Product Gallery | [Your Brand Name]",
//     description:
//       "Take a closer look at our high-quality Corn Silage and CornMeal Silage products in our gallery.",
//     // url: "https://yourdomain.com/gallery",
//     // images: [
//     //   {
//     //     url: "/images/gallery-cover.jpg",
//     //     width: 1200,
//     //     height: 630,
//     //     alt: "Product Gallery",
//     //   },
//     // ],
//     type: "website",
//   },
// };

const productImages = [img1, img2, img3, profile1, profile2];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="bg-secondary min-h-screen py-16">
      {/* Page Header */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-green-900">Our Gallery</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Explore our collection of premium products. Each item is crafted with
          care and passion to deliver the best quality.
        </p>
      </section>

      {/* Grid Gallery */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productImages.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => setSelectedImg(src)}
            >
              <Image
                src={src}
                alt={`Product ${index + 1}`}
                width={500}
                height={500}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="bg-opacity-40 absolute inset-0 flex items-center justify-center bg-black text-lg font-semibold text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                View Product
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="bg-opacity-80 fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Image
              src={selectedImg}
              alt="Selected product"
              width={1000}
              height={1000}
              className="max-h-[80vh] w-auto rounded-lg shadow-xl"
            />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute -top-6 -right-6 rounded-full bg-white p-2 text-black shadow-lg hover:bg-gray-200"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
