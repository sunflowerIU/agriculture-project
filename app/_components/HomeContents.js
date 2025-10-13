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
import ceoImg from "@/public/profile2.jpg";
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
    <div className="text-text mx-auto mt-10 w-full space-y-10">
      {/* Hero with carousel */}
      <section className="relative mx-auto flex max-w-6xl px-1 py-6 text-xs sm:gap-4 sm:px-4 sm:py-8 sm:text-sm lg:py-10 lg:text-lg">
        {/* Left side - text */}
        <div className="mx-auto flex max-w-1/3 flex-col justify-center px-2 text-center sm:max-w-[300px] md:max-w-[400px] lg:max-w-1/2 lg:text-left">
          <h1 className="text-primary text-base leading-tight font-bold sm:text-3xl lg:text-5xl">
            Welcome to {process.env.NEXT_PUBLIC_COMPANY_NAME}
          </h1>
          <p className="mx-auto mt-4 text-gray-700">
            We provide premium-quality corn silage and feed solutions for your
            livestock — fresh, nutritious, and sustainable.
          </p>
          <div className="mx-auto flex max-w-fit flex-col justify-center md:flex-row md:gap-6 lg:items-start lg:gap-8">
            <Button href="/contact">Contact Us</Button>
            <Button href="/gallery" variant="secondary">
              View Gallery
            </Button>
          </div>
        </div>

        {/* Right side - carousel */}
        <div className="h-sm relative mx-auto w-3/5 overflow-hidden rounded-xl shadow-lg sm:min-h-[280px] sm:w-xs md:min-h-[340px] md:w-md lg:w-1/3">
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
      <section className="relative mx-auto flex max-w-6xl flex-row-reverse gap-6 px-4 py-6 text-xs sm:px-6 sm:py-8 sm:text-sm lg:py-10 lg:text-lg">
        {/* Left side - text */}
        <div className="mx-auto flex max-w-1/2 flex-col justify-center text-left sm:max-w-[300px] md:max-w-[400px] lg:max-w-1/2">
          <h1 className="text-primary text-base leading-tight font-bold sm:text-3xl lg:text-5xl">
            Message from Our CEO
          </h1>
          <p className="mx-auto mt-4 text-gray-700 lg:mx-0">
            <FaQuoteLeft className="mr-2 inline text-green-700" />
            At {process.env.NEXT_PUBLIC_COMPANY_NAME}, we are driven by a
            mission to empower farmers with sustainable, high-quality fodder
            solutions. Our vision is not only to provide feed but also to
            nurture the prosperity of every livestock owner we serve.
          </p>
          <p className="mt-4 font-semibold text-green-800">&#x2D; CEO Name</p>
        </div>

        {/* Right side - photo */}
        <div className="relative mx-auto min-h-[200px] w-1/2 overflow-hidden rounded-xl shadow-lg sm:min-h-[280px] sm:w-xs md:min-h-[340px] md:w-md lg:w-1/3">
          <Image
            src={ceoImg}
            alt="CEO"
            fill
            className="object-cover"
            placeholder="blur"
            priority
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-xs sm:px-6 sm:py-12 sm:text-sm lg:flex-row lg:items-center lg:gap-12 lg:py-16 lg:text-lg">
        {/* Left side - text */}
        <div className="mx-auto flex w-full max-w-[500px] flex-col justify-center text-center lg:mx-0 lg:w-1/2 lg:text-left">
          <h1 className="text-primary mb-4 text-base leading-tight font-bold sm:text-3xl lg:text-5xl">
            Our Mission & Vision
          </h1>
          <p className="mx-auto mb-6 max-w-md text-gray-700 sm:text-lg lg:mx-0">
            We are committed to empowering farmers and livestock owners with
            innovative, sustainable, and high-quality feed solutions. Our
            mission and vision drive us to set new standards in Nepal’s
            agricultural sector.
          </p>
        </div>
        {/* Right side - cards */}
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 sm:flex-row lg:w-1/2">
          <div className="flex-1 rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-4 flex flex-col items-center text-lg font-semibold text-green-800">
              <FaBullseye className="mb-1 text-2xl" />
              <span>Our Mission</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              To provide farmers with innovative, reliable, and sustainable
              silage solutions that enhance livestock health, increase
              productivity, and secure a brighter agricultural future.
            </p>
          </div>
          <div className="flex-1 rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-4 flex flex-col items-center text-lg font-semibold text-green-800">
              <FaRegLightbulb className="mb-1 text-2xl" />
              <span>Our Vision</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
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
