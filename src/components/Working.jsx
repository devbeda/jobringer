import React from "react";
import { motion } from "framer-motion";

function Working() {
  const text = "We are now Unable to Process, Currently we are working on it...";
  const typingEffect = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Time delay between each character
      },
    },
  };

  const characterEffect = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="h-[90vh] w-screen flex justify-center items-center md:text-3xl font-Logo text-center px-3">
      <motion.div
        variants={typingEffect}
        initial="hidden"
        animate="visible"
        className="inline-block"
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={characterEffect}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default Working;
