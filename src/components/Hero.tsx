import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import heroImage from "../assets/hero.png";
import { MapPin } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 900], [0, 120]);
  const contentY = useTransform(scrollY, [0, 900], [0, -48]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-white/12 px-4 pb-16 pt-36 sm:px-6 lg:px-8"
    >
      <motion.div
        className="absolute inset-0 scale-110 bg-cover bg-center brightness-150 lg:bg-[center_top]"
style={{
  y: imageY,
  backgroundImage: `url(${heroImage})`,
}}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.96)_0%,rgba(5,5,5,0.78)_38%,rgba(5,5,5,0.28)_68%,rgba(5,5,5,0.72)_100%),linear-gradient(180deg,rgba(5,5,5,0.35),rgba(5,5,5,0.62))]" />
      <div className="luxury-grid absolute inset-0 opacity-45" />

      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]"
        style={{ y: contentY }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.16, delayChildren: 0.22 } },
        }}
      >
        <div>
          <motion.h1
            className="gym-heading max-w-3xl text-6xl leading-[0.9] sm:text-7xl lg:text-8xl"
            variants={{
              hidden: { opacity: 0, y: 34 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.82 } },
            }}
          >
            <span className="grit-text block">Your Fitness</span>
            <span className="block text-orange-500">Our Mission</span>
          </motion.h1>
          <motion.p
            className="mt-7 max-w-xl text-lg leading-8 text-stone-100 sm:text-xl"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.72 } },
            }}
          >
            Nisha's Fitness Studio is here to help you build strength, improve
            health, and become the best version of yourself.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row"
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.72 } },
            }}
          >
                <AnimatedButton
      href="https://maps.app.goo.gl/465RRbwXa4m8KKqH7"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="inline-flex items-center gap-2">
        <MapPin className="h-4 w-4" />
        Find Us
      </span>
    </AnimatedButton>
    
            <AnimatedButton href="#packages" variant="secondary">
              View Packages
            </AnimatedButton>
          </motion.div>
        </div>

        <motion.div
          className="hidden justify-end lg:flex"
          variants={{
            hidden: { opacity: 0, x: 42 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <div className="relative mr-2 mt-48 border border-white/80 px-10 py-8 text-center backdrop-blur-sm">
            <div className="absolute -bottom-px -left-px h-10 w-10 border-b-4 border-l-4 border-[#ff6900]" />
            <div className="absolute -bottom-px -right-px h-10 w-10 border-b-4 border-r-4 border-[#ff6900]" />
            <p className="gym-heading text-3xl leading-tight text-orange-500">
              Start Your
              <br />
              Fitness Journey
            </p>
            <p className="gym-heading grit-text mt-1 text-5xl">Today!</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
