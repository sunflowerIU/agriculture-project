"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import PhoneNumber from "./PhoneNumber";

function HeroFrontText() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-primary bg-secondary text-bold rounded-xl px-4 py-1 text-xl leading-tight font-bold drop-shadow-lg sm:text-3xl lg:text-5xl"
      >
        Welcome to {process.env.NEXT_PUBLIC_COMPANY_NAME}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-2 max-w-2xl drop-shadow-md"
      >
        Discover premium-quality corn silage and feed solutions for your
        livestock. Fresh, nutritious, and grown with care to maximize
        productivity and sustainability.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Button href="/contact" variant="primary">
          Contact Us Now
        </Button>
      </motion.div>
      <PhoneNumber />
    </>
  );
}

export default HeroFrontText;
