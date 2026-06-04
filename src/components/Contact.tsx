import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Mail} from "lucide-react";
import { fadeUp, staggerContainer } from "../App";
import AnimatedButton from "./AnimatedButton";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import LeadModal from "./LeadModal";

const phone = "+91 9866150617";
const phoneHref = "tel:+919866150617";
const whatsAppHref =
  "https://wa.me/919866150617?text=Hi%20Nisha%27s%20Fitness%20Studio%2C%20I%27d%20like%20to%20join.";

export default function Contact() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  return (
    <section id="contact" className="bg-[#070a0b] px-4 py-14 sm:px-6 lg:px-8">
      <motion.div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-lg border border-[#F0C34A]/35 bg-black/55 px-6 py-12 shadow-[0_30px_110px_rgba(0,0,0,0.55)] sm:px-10 lg:px-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.24 }}
        variants={staggerContainer}
        whileHover={{ y: -5, scale: 1.008 }}
        transition={{ type: "spring", stiffness: 170, damping: 26, mass: 0.9 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_24%,rgba(22,121,191,0.24),transparent_26rem)]" />
        <div className="luxury-grid absolute inset-0 opacity-30" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <motion.p
              className="text-sm font-black uppercase tracking-[0.18em] text-[#F0C34A]"
              variants={fadeUp}
            >
              Contact Us
            </motion.p>
            <motion.h2
              className="gym-heading mt-3 max-w-3xl text-5xl leading-none text-white sm:text-6xl"
              variants={fadeUp}
            >
              Start Your Fitness Journey <span className="text-[#F0C34A]">Today</span>
            </motion.h2>
            <motion.p className="mt-5 text-xl font-bold text-stone-200" variants={fadeUp}>
              Phone Number: <a className="focus-ring rounded text-[#F0C34A]" href={phoneHref}>{phone}</a>
            </motion.p>
          </div>
          <motion.div className="flex flex-col gap-4 sm:flex-row lg:flex-col" variants={fadeUp}>
            <AnimatedButton href={phoneHref}>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </span>
            </AnimatedButton>
<AnimatedButton
  onClick={() => setLeadModalOpen(true)}
  variant="secondary"
  className="bg-transparent border-white/30 hover:border-[#F0C34A] hover:border-[#F0C34A]"
>
  <span className="inline-flex items-center gap-2 bg-transparent">
  <FaWhatsapp className="h-4 w-4" />
  WhatsApp
  </span>
</AnimatedButton>
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
          </motion.div>
        </div>
      </motion.div>
<div className="mt-10 border-t border-white/10 pt-8">
<div className="mb-8 flex flex-col items-center">
  <h3 className="text-2xl font-black uppercase tracking-[0.18em] text-white">
    Connect With Us
  </h3>

  <div className="mt-3 flex items-center gap-3">
    <div className="h-[2px] w-12 bg-[#1679BF]" />
    <div className="h-2 w-2 rounded-full bg-[#F0C34A]" />
    <div className="h-[2px] w-12 bg-[#F0C34A]" />
  </div>
</div>

  <div className="flex items-center justify-center gap-4">
    <a
      href="https://www.instagram.com/nisha_fitness_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-24 w-24 items-center justify-center rounded-3xl border border-[#F0C34A]/30 bg-[#1679BF]/10 transition-all duration-300 hover:-translate-y-2 hover:border-[#F0C34A] hover:bg-[#1679BF]/20 hover:shadow-[0_0_30px_rgba(22,121,191,0.35)]"
    >
      <FaInstagram className="h-10 w-10 text-[#F0C34A] transition-transform duration-300 group-hover:scale-110" />
    </a>

    <button
     onClick={() => setLeadModalOpen(true)}
     className="group flex h-24 w-24 items-center justify-center rounded-3xl border border-[#F0C34A]/30 bg-[#1679BF]/10 transition-all duration-300 hover:-translate-y-2 hover:border-[#F0C34A] hover:bg-[#1679BF]/20 hover:shadow-[0_0_30px_rgba(22,121,191,0.35)]"
>
     <FaWhatsapp className="h-10 w-10 text-[#F0C34A] transition-transform duration-300 group-hover:scale-110" />
    </button>

    <a
      onClick={() => setLeadModalOpen(true)}
      className="group flex h-24 w-24 items-center justify-center rounded-3xl border border-[#F0C34A]/30 bg-[#1679BF]/10 transition-all duration-300 hover:-translate-y-2 hover:border-[#F0C34A] hover:bg-[#1679BF]/20 hover:shadow-[0_0_30px_rgba(22,121,191,0.35)]"
    >
      <Mail className="h-10 w-10 text-[#F0C34A] transition-transform duration-300 group-hover:scale-110" />
    </a>

    <a
      href="tel:+91 9866150617"
      className="group flex h-24 w-24 items-center justify-center rounded-3xl border border-[#F0C34A]/30 bg-[#1679BF]/10 transition-all duration-300 hover:-translate-y-2 hover:border-[#F0C34A] hover:bg-[#1679BF]/20 hover:shadow-[0_0_30px_rgba(22,121,191,0.35)]"
    >
      <Phone className="h-10 w-10 text-[#F0C34A] transition-transform duration-300 group-hover:scale-110" />
    </a>
  </div>
</div>

<LeadModal
  isOpen={leadModalOpen}
  onClose={() => setLeadModalOpen(false)}
/>
    </section>
  );
}

