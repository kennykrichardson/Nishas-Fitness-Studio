import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedButton from "./AnimatedButton";
import logo from "../assets/logo.png";
import { MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "About Us", href: "#about" },
  { label: "Trainers", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const navPadding = useTransform(scrollY, [0, 120], [18, 10]);
  const navScale = useTransform(scrollY, [0, 120], [1, 0.985]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
        style={{ scale: navScale }}
      >
        <motion.nav
          className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-black/50 px-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:px-7"
          style={{ paddingTop: navPadding, paddingBottom: navPadding }}
          aria-label="Primary navigation"
          transition={{ type: "spring", stiffness: 180, damping: 24 }}
        >
<div className="flex items-center">
  <motion.button
    type="button"
    className="focus-ring mr-13 grid h-11 w-11 place-items-center rounded border border-orange-500/60 bg-orange-500/10 text-orange-300 shadow-[0_0_28px_rgba(249,115,22,0.18)] md:hidden"
    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
    aria-expanded={isOpen}
    aria-controls="mobile-sidebar"
    onClick={() => setIsOpen((current) => !current)}
    whileHover={{ scale: 1.05, y: -1 }}
    whileTap={{ scale: 0.92 }}
    transition={{ type: "spring", stiffness: 320, damping: 23 }}
  >
    <AnimatePresence mode="wait" initial={false}>
      {isOpen ? (
        <motion.span
          key="close"
          initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.22 }}
        >
          <X className="h-5 w-5" />
        </motion.span>
      ) : (
        <motion.span
          key="menu"
          initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.22 }}
        >
          <Menu className="h-5 w-5" />
        </motion.span>
      )}
    </AnimatePresence>
  </motion.button>

  <motion.a
    href="#home"
    className="focus-ring flex items-center gap-3 rounded text-white"
    whileHover={{ scale: 1.025 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 260, damping: 22 }}
    onClick={closeMenu}
  >
    <img
  src={logo}
  alt="Nisha's Fitness Studio"
  className="h-12 w-12 object-contain"
/>
    <span className="leading-none">
      <span className="block text-xl font-black uppercase tracking-[0.1em] text-orange-500">
        Nisha's
      </span>
      <span className="block text-[0.65rem] font-bold uppercase tracking-[0.36em] text-white/80">
        Fitness Studio
      </span>
    </span>
  </motion.a>

  <div className="ml-auto hidden items-center gap-7 lg:flex">
    {navLinks.map((link) => (
      <motion.a
        key={link.label}
        href={link.href}
        className="focus-ring group relative rounded text-xs font-black uppercase tracking-[0.08em] text-stone-200 transition-colors duration-300 hover:text-orange-400"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 260, damping: 23 }}
      >
        {link.label}
        <motion.span
          className="absolute -bottom-2 left-0 h-0.5 w-full origin-left rounded-full bg-orange-500"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.a>
    ))}
  </div>

  <div className="ml-6 hidden md:block">
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
  </div>
</div>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              onClick={closeMenu}
            />
<motion.aside
  id="mobile-sidebar"
  className="fixed bottom-0 left-0 top-0 z-50 flex w-[min(86vw,22rem)] flex-col border-r border-orange-500/35 bg-[#070707]/95 px-6 pb-8 pt-6 shadow-[24px_0_80px_rgba(0,0,0,0.65)] backdrop-blur-2xl md:hidden"
  initial={{ x: "-105%", opacity: 0.7 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: "-105%", opacity: 0.75 }}
>
              <div className="flex items-center justify-between">
                <a href="#home" className="focus-ring flex items-center gap-3 rounded" onClick={closeMenu}>
                     <img
  src={logo}
  alt="Nisha's Fitness Studio"
  className="h-12 w-12 object-contain"
/>
                  <span className="leading-none">
<span className="block font-gym text-3xl leading-none tracking-[0.12em] text-orange-500">
  NISHA'S
</span>

<span className="block font-gym text-sm leading-none tracking-[0.35em] text-white/80">
  FITNESS STUDIO
</span>
                  </span>
                </a>

                <motion.button
                  type="button"
                  className="focus-ring grid h-10 w-10 place-items-center rounded border border-white/15 bg-white/5 text-stone-100"
                  aria-label="Close navigation menu"
                  onClick={closeMenu}
                  whileHover={{ scale: 1.05, rotate: 4 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              <motion.div
                className="mt-10 grid gap-3"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
                  },
                }}
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="focus-ring group flex items-center justify-between rounded border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-black uppercase tracking-[0.12em] text-stone-100 transition-colors duration-300 hover:border-orange-500/70 hover:bg-orange-500/10 hover:text-orange-300"
                    onClick={closeMenu}
                    variants={{
                      hidden: { opacity: 0, x: 24, filter: "blur(6px)" },
                      visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: -4, scale: 1.015 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {link.label}
                    <span className="h-px w-8 bg-orange-500/70 transition-all duration-300 group-hover:w-12" />
                  </motion.a>
                ))}
              </motion.div>

              <div className="mt-auto grid gap-4 border-t border-white/10 pt-6">
                <AnimatedButton href="https://maps.app.goo.gl/465RRbwXa4m8KKqH7" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="w-full">
                  Find Us Here
                </AnimatedButton>
                <AnimatedButton href="tel:+919866150617" variant="secondary" onClick={closeMenu} className="w-full">
                  Call Now
                </AnimatedButton>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
