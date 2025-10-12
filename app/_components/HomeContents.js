"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaRegLightbulb } from "react-icons/fa";
import Button from "../_components/Button";

// Import images from /public
import img1 from "@/public/img1.jpg";
import img2 from "@/public/img2.jpg";
import img3 from "@/public/img3.jpg";
import ceoImg from "@/public/profile1.jpg";
import { FaBullseye } from "react-icons/fa6";

const images = [img1, img2, img3];

export default function HomeContent() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-text mx-auto mt-10 w-full">
      {/* Hero with carousel */}
      <section className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 lg:flex-row lg:items-center lg:gap-12">
        {/* Left side - text */}
        <div className="mx-auto flex max-w-[500px] min-w-[260px] flex-col justify-center text-center lg:mx-0 lg:w-1/2 lg:text-left">
          <h1 className="text-primary text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
            Welcome to {process.env.NEXT_PUBLIC_COMPANY_NAME}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-gray-700 sm:text-lg lg:mx-0">
            We provide premium-quality corn silage and feed solutions for your
            livestock — fresh, nutritious, and sustainable.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
            <Button href="/gallery" variant="secondary">
              View Gallery
            </Button>
          </div>
        </div>

        {/* Right side - carousel */}
        <div className="md:min-h-[340px]lg:w-full relative mx-auto min-h-[220px] w-sm overflow-hidden rounded-xl shadow-lg sm:min-h-[280px] md:w-2xl lg:min-h-[400px] lg:w-1/2">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                placeholder="blur"
                src={src}
                alt={`Carousel ${index}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </div>
      </section>
      {/* CEO Message */}

      <section className="relative mx-auto flex w-full flex-col gap-4 bg-white px-2 py-10 lg:flex-row-reverse lg:items-center lg:gap-10">
        {/* Left side - text */}
        <div className="mx-auto flex max-w-[500px] min-w-[260px] flex-col justify-center text-center lg:text-left">
          <h1 className="text-primary text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
            Message from Our CEO
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-gray-700 sm:text-lg lg:mx-0">
            <FaQuoteLeft className="mr-2 inline text-green-700" />
            At {process.env.NEXT_PUBLIC_COMPANY_NAME}, we are driven by a
            mission to empower farmers with sustainable, high-quality fodder
            solutions. Our vision is not only to provide feed but also to
            nurture the prosperity of every livestock owner we serve.
          </p>
          <p className="mt-4 font-semibold text-green-800">&#x2D; CEO Name</p>
        </div>

        {/* Right side - photo */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-xl shadow-lg lg:max-w-sm">
          <Image
            src={ceoImg}
            alt="CEO"
            fill
            className="object-cover object-center"
            placeholder="blur"
            priority
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-green-900">
          Our Mission & Vision
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-4 flex flex-col items-center text-2xl font-semibold text-green-800">
              <FaBullseye />
              <span>Our Mission</span>
            </h3>
            <p className="leading-relaxed text-gray-700">
              To provide farmers with innovative, reliable, and sustainable
              silage solutions that enhance livestock health, increase
              productivity, and secure a brighter agricultural future.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-4 flex flex-col items-center text-2xl font-semibold text-green-800">
              <FaRegLightbulb />
              <span>Our Vision</span>
            </h3>
            <p className="leading-relaxed text-gray-700">
              To be recognized as Nepal’s most trusted provider of cattle feed
              solutions — setting new standards for quality, sustainability, and
              customer satisfaction across the agricultural sector.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
