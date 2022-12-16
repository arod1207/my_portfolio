import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="my-10 mx-3 flex flex-col items-center justify-center md:my-0 md:h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        <h1 className="text-center text-2xl font-bold md:text-6xl">
          In this world, creations are limitless
        </h1>
      </motion.div>
      <div className="my-10 md:my-20">
        <p className="text-center  md:text-2xl">
          My name is Armando and I always knew that I was meant for something
          more. For the past twelve years, I had worked in the oil and gas
          industry, but I couldn't shake the feeling that I was meant to do
          something more fulfilling.
        </p>
        <p className="text-center md:text-2xl">
          So, at the age of 38, I made the difficult decision to leave my job
          and pursue my dream of becoming a web developer. It was a risky move,
          but I was determined to follow my passion and use my skills to make a
          difference in the world through technology.
        </p>
        <p className="text-center md:text-2xl">
          My journey from the oil and gas industry to web developer was not an
          easy one, but it was worth it. I am grateful for the opportunity to
          pursue my dreams and I can't wait to see where my new career will take
          me next.
        </p>
      </div>
    </div>
  );
}

export default Hero;
