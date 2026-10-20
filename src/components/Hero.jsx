import { motion, useReducedMotion } from "framer-motion";
import { HiOutlineArrowDown } from "react-icons/hi";

const title = "Lior Hale";
const letters = title.split("");

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.3 },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(https://picsum.photos/id/1018/1920/1080)" }}
        initial={{ scale: 1 }}
        animate={{ scale: shouldReduceMotion ? 1 : 1.12 }}
        transition={{ duration: 18, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/50 to-ink" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.p
          className="mb-4 text-xs uppercase tracking-[0.4em] text-paper/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Fine Art &amp; Documentary Photography
        </motion.p>

        <motion.h1
          className="font-display text-5xl font-semibold leading-tight text-paper sm:text-6xl md:text-8xl"
          variants={container}
          initial="hidden"
          animate="visible"
          aria-label={title}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              variants={letterVariant}
              className="inline-block"
            >
              {letter === " " ? " " : letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-md text-base text-paper/70 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          Stories told in light and silence — portraits, landscapes, and the
          moments in between.
        </motion.p>
      </div>

      <motion.a
        href="#gallery"
        aria-label="Scroll to gallery"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-paper/70 hover:text-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.span
          className="block"
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiOutlineArrowDown size={24} />
        </motion.span>
      </motion.a>
    </section>
  );
}
