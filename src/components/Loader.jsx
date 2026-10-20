import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function Loader({ isLoading }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: shouldReduceMotion ? 0.2 : 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <motion.span
            className="font-display text-2xl tracking-[0.3em] text-paper uppercase"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Lior Hale
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
