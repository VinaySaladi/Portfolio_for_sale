import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function About() {
  return (
    <section id="about" className="px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          className="relative aspect-[4/5] overflow-hidden rounded-sm"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ clipPath: "inset(0 0 0% 0)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <img
            src="https://picsum.photos/id/1027/900/1100"
            alt="Photographer holding a camera"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div>
          <motion.p
            className="mb-3 text-xs uppercase tracking-[0.4em] text-accent"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            About
          </motion.p>

          <motion.h2
            className="font-display text-4xl text-paper sm:text-5xl"
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            Lior Hale
          </motion.h2>

          <motion.p
            className="mt-6 text-base leading-relaxed text-paper/70 sm:text-lg"
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            For over a decade I&apos;ve chased light across coastlines,
            mountains, and city blocks — looking for the quiet frame inside
            the noise. My work moves between documentary portraits and
            landscape studies, always in search of stillness.
          </motion.p>

          <motion.p
            className="mt-4 text-base leading-relaxed text-paper/70 sm:text-lg"
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            Based between the mountains and the coast, available for travel,
            editorial, and wedding commissions worldwide.
          </motion.p>

          <motion.div
            className="mt-10 grid grid-cols-3 gap-6 border-t border-paper/10 pt-8"
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            {[
              { value: "12+", label: "Years" },
              { value: "230+", label: "Projects" },
              { value: "18", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-paper">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-paper/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
