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
      <section className="relative mx-auto flex max-w-7xl flex-col gap-8 px-8 py-20 lg:flex-row lg:items-center">
        {/* Left side - text */}
        <div className="mx-auto flex max-w-[600px] min-w-[300px] flex-col justify-center text-center lg:mx-0 lg:w-1/2 lg:text-left">
          <h1 className="text-primary text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">
            Welcome to {process.env.COMPANY_NAME}
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-gray-700 sm:text-xl lg:mx-0">
            We provide premium-quality corn silage and feed solutions for your
            livestock — fresh, nutritious, and sustainable.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
            <Button href="/gallery" variant="secondary">
              View Gallery
            </Button>
          </div>
        </div>

        {/* Right side - carousel */}
        <div className="relative min-h-[300px] w-full overflow-hidden rounded-xl shadow-lg sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] lg:w-1/2">
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

      <section className="relative mx-auto flex w-full flex-col gap-6 bg-white px-4 py-20 lg:flex-row-reverse lg:items-center">
        {/* Left side - text */}
        <div className="mx-auto flex max-w-[600px] min-w-[300px] flex-col justify-center text-center lg:text-left">
          <h1 className="text-primary text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">
            Message from Our CEO
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-gray-700 sm:text-xl lg:mx-0">
            <FaQuoteLeft className="mr-2 inline text-green-700" />
            At {process.env.COMPANY_NAME}, we are driven by a mission to empower
            farmers with sustainable, high-quality fodder solutions. Our vision
            is not only to provide feed but also to nurture the prosperity of
            every livestock owner we serve.
          </p>
          <p className="mt-6 font-semibold text-green-800">&#x2D; CEO Name</p>
        </div>

        {/* Right side - photo */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl shadow-lg sm:max-w-md">
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
