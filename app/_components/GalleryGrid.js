"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "@/public/silage-section2.jpg";
import img2 from "@/public/gallery/products/silage-section1.jpg";
import img3 from "@/public/gallery/products/img3.jpg";
import img4 from "@/public/gallery/products/feed-section2.png";
import logo from "@/public/logo.png";
import Spinner from "./Spinner";

const productImages = [img1, img2, img3, img4];

const companyImages = [logo];

function GalleryGrid({ filter }) {
  const [selectedImg, setSelectedImg] = useState(null);
  const displayImages = filter === "products" ? productImages : companyImages;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const t = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(t);
  }, [filter]);

  if (loading) return <Spinner />;
  return (
    <>
      {/* Grid Gallery */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {displayImages.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => setSelectedImg(src)}
            >
              <Image
                placeholder="blur"
                src={src}
                alt={`Product ${index + 1}`}
                width={500}
                height={500}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="bg-opacity-40 bg-primary/50 absolute inset-0 flex items-center justify-center text-lg font-semibold text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
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
          className="bg-opacity-80 bg-primary/50 fixed inset-0 z-50 flex items-center justify-center"
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
              className="max-h-[80vh] max-w-[80vw] rounded-lg shadow-xl"
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
    </>
  );
}

export default GalleryGrid;
