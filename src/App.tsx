import { motion, type Variants } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Packages from "./components/Packages";
import Gallery from "./components/Gallery";
import abstractBg from "./assets/backgrounds/abstract-bg.png";
import IntroScreen from "./components/IntroScreen";
import Reviews from "./components/Reviews";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 42, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.92, ease: easeOutExpo },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

function App() {
  return (
    <motion.div
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
    >
      <div
  className="pointer-events-none fixed inset-0 opacity-[0.12]"
  style={{
    backgroundImage: `url(${abstractBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
/>
<IntroScreen />

      <Navbar />
      <main>
        <Hero />
        <Packages />
        <About />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
