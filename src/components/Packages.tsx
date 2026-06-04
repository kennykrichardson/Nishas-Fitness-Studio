import { motion } from "framer-motion";
import { CalendarDays, Crown, Dumbbell, Star, Ticket, UserRoundCheck } from "lucide-react";
import { fadeUp, staggerContainer } from "../App";
import { membershipPackages } from "../data/packages";
import AnimatedButton from "./AnimatedButton";

const icons = {
  basic: CalendarDays,
  standard: Dumbbell,
  premium: Star,
  ultimate: Crown,
  "personal-training": UserRoundCheck,
  "daily-pass": Ticket,
};

export default function Packages() {
  return (
    <section id="packages" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(22,121,191,0.12),transparent_28rem)]" />
      <motion.div
        className="relative mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        variants={staggerContainer}
      >
        <motion.div className="flex items-center justify-center gap-6" variants={fadeUp}>
          <span className="h-px w-16 bg-white/45" />
          <h2 className="gym-heading grit-text text-center text-5xl">Our Packages</h2>
          <span className="h-px w-16 bg-white/45" />
        </motion.div>

        <motion.div
          className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
        >
          {membershipPackages.map((item) => (
            (() => {
              const Icon = icons[item.id as keyof typeof icons];

              return (
                <motion.article
                  key={item.id}
                  className={`relative grid min-h-52 grid-cols-[4.5rem_1fr] gap-5 rounded-lg border p-7 shadow-[0_20px_70px_rgba(0,0,0,0.34)] backdrop-blur ${
                    item.recommended
                      ? "border-[#F0C34A]/80 bg-[#F0C34A]/[0.08]"
                      : "border-white/35 bg-black/28"
                  }`}
                  variants={fadeUp}
                  whileHover={{
                    y: -10,
                    scale: 1.025,
                    boxShadow: "0 30px 90px rgba(0,0,0,0.48)",
                  }}
                  transition={{ type: "spring", stiffness: 190, damping: 25, mass: 0.85 }}
                >
                  <Icon className="mt-1 h-12 w-12 text-[#1679BF]" strokeWidth={2.4} />
                  <div>
                    {item.recommended ? (
                      <div className="mb-2 text-xs font-black uppercase tracking-[0.12em] text-[#F0C34A]">
                        Recommended
                      </div>
                    ) : null}
                    <h3 className="gym-heading text-3xl leading-none text-white">{item.name}</h3>
                    <div className="mt-4 space-y-2 text-base text-stone-100">
                      {item.duration ? <p>- Duration: {item.duration}</p> : null}
                      <p>- Price: {item.price}</p>
                    </div>
                    <AnimatedButton
                      href="#contact"
                      className="mt-7 w-full min-h-11 py-2"
                    >
                      {item.action}
                    </AnimatedButton>
                  </div>
                </motion.article>
              );
            })()
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
