import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Эч ким мени кармап алат",
    role: "Local Guide • 287 Reviews",
    rating: 5,
    review:
      "Nishanka is more than a coach, she's a true inspiration. Her training style combines discipline, motivation, and personal attention. The gym is clean, modern, and fully equipped for strength training and overall fitness. Highly recommended for anyone serious about building strength, stamina, and confidence.",
  },

  {
    name: "Shiva Sai",
    role: "Local Guide • 8 Reviews",
    rating: 5,
    review:
      "The gym is modern, spacious, and extremely well-maintained. The trainers are knowledgeable and genuinely invested in helping members achieve their goals. Every workout feels challenging, enjoyable, and motivating. A fantastic environment for anyone looking to transform their health.",
  },

  {
    name: "Ajay Kumar Kayala",
    role: "Verified Member",
    rating: 5,
    review:
      "The atmosphere is motivating and supportive, and the trainer is genuinely encouraging. The facility is clean, professional, and welcoming, especially for women. Whether you're a beginner or experienced, every session feels effective, enjoyable, and worth it.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="text-center">
          <h2 className="gym-heading text-5xl text-white">
            What Our Members Say
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-[2px] w-14 bg-[#1679BF]" />
            <div className="h-2 w-2 rounded-full bg-[#1679BF]" />
            <div className="h-[2px] w-14 bg-[#1679BF]" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-stone-400">
            Real feedback from members who train with us every day.
          </p>
        </div>

        {/* Review Cards */}

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              className="
                relative
                rounded-3xl
                border border-[#1679BF]/25
                bg-black/30
                p-6
                backdrop-blur-xl
                transition-all
              "
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 22,
              }}
            >
              {/* Quote Icon */}

              <Quote className="absolute right-5 top-5 h-8 w-8 text-[#1679BF]/30" />

              {/* Stars */}

              <div className="mb-5 flex gap-1">
                {[...Array(review.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-[#F0C34A] text-[#F0C34A]"
                  />
                ))}
              </div>

              {/* Review */}

              <p className="leading-7 text-stone-300">
                "{review.review}"
              </p>

              {/* Reviewer */}

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-full
                      border border-[#F0C34A]/30
                      bg-[#1679BF]/10
                      font-black
                      text-[#1679BF]
                    "
                  >
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-bold text-white">
                      {review.name}
                    </h4>

                    <p className="text-sm text-[#F0C34A]">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating Banner */}

        <motion.div
          className="
            mt-10
            rounded-3xl
            border border-[#1679BF]/25
            bg-[#1679BF]/10
            p-6
            text-center
            backdrop-blur-xl
          "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className="h-6 w-6 fill-[#F0C34A] text-[#F0C34A]"
              />
            ))}
          </div>

          <p className="mt-4 text-2xl font-black text-white">
            5.0 ★ Rating from 100+ Happy Members
          </p>

          <p className="mt-2 text-stone-300">
            Trusted by beginners, athletes, and fitness enthusiasts across Hanamkonda.
          </p>
        </motion.div>
      </div>
    </section>
  );
}