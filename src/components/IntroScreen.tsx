import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import logo from "../assets/logo.png";

export default function IntroScreen() {
  const [visible, setVisible] = useState(
  !sessionStorage.getItem("nisha-intro-seen")
);

useEffect(() => {
  if (!visible) return;

  const timer = setTimeout(() => {
    sessionStorage.setItem(
      "nisha-intro-seen",
      "true"
    );

    setVisible(false);
  }, 1800);

  return () => clearTimeout(timer);
}, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          exit={{
            opacity: 0,
            transition: {
              delay: 0.9,
              duration: 0.4,
            },
          }}
        >
          {/* Left Curtain */}

          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 bg-white"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{
              x: "-100%",
              transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          />

          {/* Right Curtain */}

          <motion.div
            className="absolute right-0 top-0 h-full w-1/2 bg-white"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{
              x: "100%",
              transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          />

          {/* Center Content */}

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            exit={{
              opacity: 0,
              scale: 0.9,
              transition: {
                duration: 0.4,
              },
            }}
          >
            <img
              src={logo}
              alt="Nisha's Fitness Studio"
              className="h-36 w-36 object-contain"
            />

            <h1 className="mt-6 text-center text-4xl font-black uppercase tracking-[0.25em] text-black">
              Nisha's
            </h1>

            <p className="mt-2 text-center text-lg font-bold uppercase tracking-[0.5em] text-orange-600">
              Fitness Studio
            </p>
            <p className="mt-4 px-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-stone-500"> 
              Strength • Discipline • Transformation 
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}