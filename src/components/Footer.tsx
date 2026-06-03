import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/logo.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Trainers", href: "#about" },
  { label: "Gallery", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090d0f]">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.8fr_1fr_1fr]">
          <div className="border-white/20 md:border-r md:pr-9">
          <motion.a
            href="#home"
            className="focus-ring inline-flex items-center gap-3 rounded text-white"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
                <img
  src={logo}
  alt="Nisha's Fitness Studio"
  className="h-12 w-12 object-contain"
/>
            <span className="leading-none">
              <span className="block text-2xl font-black uppercase tracking-[0.1em] text-orange-500">
                Nisha's
              </span>
              <span className="block text-[0.68rem] font-bold uppercase tracking-[0.36em] text-sky-400">
                Fitness Studio
              </span>
            </span>
          </motion.a>
            <p className="mt-5 max-w-56 text-sm leading-6 text-stone-400">
              Stronger Body. Stronger Mind. Better You.
            </p>
          </div>

          <div className="border-white/20 md:border-r md:pr-9">
            <h3 className="text-sm font-black uppercase tracking-[0.12em] text-orange-500">
              Quick Links
            </h3>
            <nav className="mt-4 grid gap-2" aria-label="Footer navigation">
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="focus-ring rounded text-sm text-stone-300 hover:text-orange-300"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          <div className="border-white/20 md:border-r md:pr-9">
            <h3 className="text-sm font-black uppercase tracking-[0.12em] text-orange-500">
              Contact Us
            </h3>
            <div className="mt-4 grid gap-3 text-sm text-stone-300">
              <a className="focus-ring flex items-center gap-3 rounded hover:text-orange-300" href="tel:+919866150617">
                <Phone className="h-4 w-4 text-orange-500" /> +91 98661 50617
              </a>
                <a
                 href="https://maps.app.goo.gl/465RRbwXa4m8KKqH7"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-white-400 transition-all duration-300 hover:text-orange-300"
                >
                <MapPin className="h-4 w-4 text-orange-500" />
                Click here to find us on the map
                </a>   
                <a
                 href="https://www.instagram.com/nisha_fitness_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-white-400 transition-all duration-300 hover:text-orange-300"
                >
                <FaInstagram className="h-4 w-4 text-orange-500" />
                Instagram: @nisha_fitness_studio
                </a>        
                <a
                 href="https://wa.me/919866150617?text=Hi%20Nisha%27s%20Fitness%20Studio%2C%20I%27d%20like%20to%20join."
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-white-400 transition-all duration-300 hover:text-orange-300"
                >
                <FaWhatsapp className="h-4 w-4 text-orange-500" />
                Message us on WhatsApp
                </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.12em] text-orange-500">
              Hours
            </h3>
            <div className="mt-4 flex gap-4 text-sm leading-6 text-stone-300">
              <Clock className="mt-1 h-8 w-8 shrink-0 text-orange-500" />
              <div>
                <p className="font-bold flex text-orange-500">Monday - Saturday</p>
                <p className="font-bold">4:30 AM - 10:30 AM</p>

                <p className="mt-3 font-bold">4:30 PM - 10:30 PM</p>                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="orange-gradient px-1.5 py-1.5 text-center text-sm text-white">
        © {new Date().getFullYear()} Nisha's Fitness Studio. All Rights Reserved.
      </div>
    </footer>
  );
}
