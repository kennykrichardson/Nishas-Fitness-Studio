import { AnimatePresence, motion } from "framer-motion";
import { Mail, MessageCircle, X, ChevronDown } from "lucide-react";
import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({
  isOpen,
  onClose,
}: LeadModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const goals = [
    "Weight Loss",
    "Muscle Gain",
    "General Fitness",
    "Personal Training",
  ];

  const times = [
    "Morning",
    "Afternoon",
    "Evening",
  ];

  const [goal, setGoal] = useState(goals[2]);
  const [time, setTime] = useState(times[2]);

  const buildMessage = () => {
    return `
Hi Nisha's Fitness Studio,

Name: ${name}
Phone: ${phone}
Age: ${age}

Goal: ${goal}
Preferred Time: ${time}

Message:
${message || "No additional message."}
`;
  };

  const validateForm = () => {
    if (
      !name.trim() ||
      !phone.trim() ||
      !age.trim() ||
      !goal.trim() ||
      !time.trim()
    ) {
      setError(
        "Please complete all fields before continuing."
      );
      return false;
    }

    setError("");
    return true;
  };

  const sendWhatsApp = () => {
    if (!validateForm()) return;

    const text = encodeURIComponent(buildMessage());

    window.open(
      `https://wa.me/919866150617?text=${text}`,
      "_blank"
    );
  };

  const sendEmail = () => {
    if (!validateForm()) return;

    const subject = encodeURIComponent(
      "Fitness Studio Enquiry"
    );

    const body = encodeURIComponent(buildMessage());

    window.location.href =
      `mailto:nishasfitnessstudio@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}

          <motion.div
            className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}

          <motion.div
            className="fixed left-1/2 top-1/2 z-[9999] w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-[32px] border border-[#1679BF]/30 bg-[#071018] p-6 shadow-[0_0_60px_rgba(22,121,191,0.22)]"
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {/* Header */}

            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-black uppercase text-white">
                  Check Out Our Gym!
                </h2>

                <p className="mt-1 text-stone-400">
                  Tell us a little about yourself.
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-xl border border-white/10 p-2 text-stone-300 transition hover:border-[#1679BF] hover:text-[#F0C34A]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form */}

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#1679BF]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#1679BF]"
              />

              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) =>
                  setAge(e.target.value)
                }
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#1679BF]"
              />

              <Listbox
                value={goal}
                onChange={setGoal}
              >
                <div className="relative">
                  <Listbox.Button className="relative w-full cursor-pointer rounded-xl border border-white/10 bg-[#050505] px-4 py-3 text-left text-white transition hover:border-[#1679BF]/40 focus:border-[#1679BF]">
                    <span>{goal}</span>

                    <ChevronDown className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1679BF]" />
                  </Listbox.Button>

                  <Transition
                    as={Fragment}
                    leave="transition duration-100 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-xl border border-[#1679BF]/20 bg-[#050505] py-2 shadow-[0_0_30px_rgba(22,121,191,0.2)]">
                      {goals.map((item) => (
                        <Listbox.Option
                          key={item}
                          value={item}
                          className={({ active }) =>
                            `cursor-pointer px-4 py-3 text-white transition ${
                              active
                                ? "bg-[#1679BF] text-white"
                                : "bg-transparent"
                            }`
                          }
                        >
                          {item}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>

              <Listbox
                value={time}
                onChange={setTime}
              >
                <div className="relative md:col-span-2">
                  <Listbox.Button className="relative w-full cursor-pointer rounded-xl border border-white/10 bg-[#050505] px-4 py-3 text-left text-white transition hover:border-[#1679BF]/40 focus:border-[#1679BF]">
                    <span>{time}</span>

                    <ChevronDown className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1679BF]" />
                  </Listbox.Button>

                  <Transition
                    as={Fragment}
                    leave="transition duration-100 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-xl border border-[#1679BF]/20 bg-[#050505] py-2 shadow-[0_0_30px_rgba(22,121,191,0.2)]">
                      {times.map((item) => (
                        <Listbox.Option
                          key={item}
                          value={item}
                          className={({ active }) =>
                            `cursor-pointer px-4 py-3 text-white transition ${
                              active
                                ? "bg-[#1679BF] text-white"
                                : "bg-transparent"
                            }`
                          }
                        >
                          {item}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>

              <textarea
                placeholder="Anything else you'd like us to know? (optional)"
                rows={5}
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#1679BF] md:col-span-2"
              />
            </div>

            {error && (
              <p className="mt-4 text-center text-sm font-semibold text-[#F0C34A]">
                {error}
              </p>
            )}

            {/* Buttons */}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={sendWhatsApp}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#1679BF] px-5 py-4 font-bold text-white transition hover:bg-[#1469A6]"
              >
                <MessageCircle className="h-5 w-5" />
                Send via WhatsApp
              </button>

              <button
                onClick={sendEmail}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#F0C34A]/40 bg-[#F0C34A]/10 px-5 py-4 font-bold text-[#F0C34A] transition hover:bg-[#F0C34A]/20"
              >
                <Mail className="h-5 w-5" />
                Send via Email
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}