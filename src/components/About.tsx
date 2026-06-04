import { motion } from "framer-motion";
import {
  Dumbbell,
  Salad,
  UserRoundCheck,
  Users,
} from "lucide-react";

import { fadeUp, staggerContainer } from "../App";
import AnimatedButton from "./AnimatedButton";

import about1 from "../assets/about/about1.jpeg";
import about2 from "../assets/about/about2.png";

const features = [
  { title: "Professional Equipment", icon: Dumbbell },
  { title: "Expert Trainers", icon: UserRoundCheck },
  { title: "Nutrition Guidance", icon: Salad },
  { title: "Friendly Environment", icon: Users },
];

const trainers = [
  {
    src: about1,
    alt: "Nishanka",
    name: "Nishanka",
    role: "Founder and Certified Trainer",
  },
];

export default function About() {
  return (
    <>
      <section className="border-y border-white/10 bg-black/28 px-4 py-9 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                className={`flex items-center gap-5 ${
                  index > 0
                    ? "lg:border-l lg:border-white/25 lg:pl-10"
                    : ""
                }`}
                variants={fadeUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{
                  type: "spring",
                  stiffness: 190,
                  damping: 25,
                  mass: 0.85,
                }}
              >
                <Icon
                  className="h-12 w-12 shrink-0 text-orange-500"
                  strokeWidth={2.3}
                />

                <h3 className="gym-heading max-w-40 text-2xl leading-tight text-white">
                  {feature.title}
                </h3>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section
        id="about"
        className="bg-[#0a0f11] px-4 py-16 sm:px-6 lg:px-8"
      >
        <motion.div
          className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={staggerContainer}
        >
          {/* LEFT SIDE */}

          <motion.div variants={staggerContainer}>
            <motion.h2
              className="gym-heading grit-text text-5xl"
              variants={fadeUp}
            >
              About Us
            </motion.h2>

            <motion.div
              className="mt-2 h-0.5 w-52 bg-orange-500"
              variants={fadeUp}
            />

            <motion.p
              className="mt-8 text-lg leading-9 text-stone-100"
              variants={fadeUp}
            >
              At Nisha's Fitness Studio, we believe fitness is not
              just about working out, it is a lifestyle. Our
              certified trainers, modern equipment, and
              personalized programs are designed to help you
              achieve your goals in a motivating and supportive
              environment.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10">
              <AnimatedButton
                href="#contact"
                variant="secondary"
              >
                Learn More
              </AnimatedButton>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            className="grid gap-5 md:grid-cols-2"
            variants={staggerContainer}
          >
            {trainers.map((trainer) => (
              <motion.article
                key={trainer.name}
                className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]"
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{
                  type: "spring",
                  stiffness: 190,
                  damping: 25,
                  mass: 0.85,
                }}
              >
                <img
                  src={trainer.src}
                  alt={trainer.alt}
                  className="h-[420px] w-full object-cover object-top"
                  loading="lazy"
                />

                <div className="flex items-start gap-4 p-5">
                  <div className="rounded-xl border border-orange-500/40 bg-orange-500/10 p-3 text-orange-500">
                    <UserRoundCheck
                      className="h-5 w-5"
                      strokeWidth={2.4}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-black uppercase text-white">
                      {trainer.name}
                    </h3>

                    <p className="mt-1 text-stone-400">
                      {trainer.role}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}