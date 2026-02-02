"use client";
import { motion } from "framer-motion";

function ScrollRevealLeftRight({ direction = "left", children, className }) {
  if (direction === "left") {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        {children}
      </motion.div>
    );
  } else {
    return (
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        {children}
      </motion.div>
    );
  }
}

export default ScrollRevealLeftRight;
