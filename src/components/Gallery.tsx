import { motion } from "framer-motion";
import {
  Dumbbell,
  Star,
  CircleDot,
  ArrowRight,
} from "lucide-react";

import logo from "../assets/logo.png";

import gym1 from "../assets/gallery/gallery1.png";
import gym2 from "../assets/gallery/gallery2.png";
import gym3 from "../assets/gallery/gallery3.png";

const galleryItems = [
  {
    image: gym1,
    icon: Dumbbell,
    title: "Premium Machines",
    description:
      "Top-of-the-line equipment for every workout.",
  },
  {
    image: gym2,
    icon: CircleDot,
    title: "Free Weights",
    description:
      "Everything you need to build strength.",
  },
  {
    image: gym3,
    icon: Star,
    title: "Modern Facilities",
    description:
      "Clean, spacious, and built for performance.",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-transparent py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.04),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-black uppercase tracking-[0.4em] text-orange-500">
            Gallery
          </p>

          <h2 className="text-4xl font-black uppercase text-white md:text-6xl">
            Inside{" "}
            <span className="text-orange-500">
              Our Studio
            </span>
          </h2>

          <div className="mt-6 flex items-center justify-center gap-5">
  <div className="h-[2px] w-24 rounded-full bg-orange-500" />

  <img
    src={logo}
    alt="Nisha's Fitness Studio"
    className="h-14 w-14 object-contain"
  />

  <div className="h-[2px] w-24 rounded-full bg-orange-500" />
</div>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-stone-400">
            Take a look at our premium equipment,
            modern facilities, and the high-energy
            environment that fuels your transformation.
          </p>
        </motion.div>

        {/* Filter Pills */}

        <div className="mb-12 flex flex-wrap justify-center gap-4 hidden">
          {[
            "All",
            "Equipment",
            "Facilities",
            "Ambience",
          ].map((item, index) => (
            <button
              key={item}
              className={`rounded-full border px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                index === 0
                  ? "border-orange-500 bg-orange-500/15 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.25)]"
                  : "border-white/10 bg-white/5 text-stone-300 hover:border-orange-500/40 hover:text-orange-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}

        <div className="grid gap-8 lg:grid-cols-3">
          {galleryItems.map(
            (
              {
                image,
                icon: Icon,
                title,
                description,
              },
              index
            ) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
              >
                {/* Image */}

                <div className="relative h-[420px] overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                </div>

                {/* Content */}

                <div className="flex items-start gap-4 p-6">
                  <div className="rounded-xl border border-orange-500/40 bg-orange-500/10 p-3 text-orange-500">
                    <Icon
                      className="h-6 w-6"
                      strokeWidth={2.4}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-black uppercase text-white">
                      {title}
                    </h3>

                    <p className="mt-2 text-stone-400">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Button */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="mt-14 flex justify-center hidden"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full border border-orange-500/50 bg-orange-500/10 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-orange-400 transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/20"
          >
            View All Photos

            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}