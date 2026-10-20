import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineX, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

export default function Lightbox({ image, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!image) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [image, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Close image"
            className="absolute right-5 top-5 z-10 text-paper/80 hover:text-accent"
            onClick={onClose}
          >
            <HiOutlineX size={30} />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-paper/70 hover:text-accent sm:left-6"
            onClick={(event) => {
              event.stopPropagation();
              onPrev();
            }}
          >
            <HiOutlineChevronLeft size={32} />
          </button>

          <motion.img
            layoutId={`gallery-image-${image.id}`}
            src={image.src}
            alt={image.alt}
            className="max-h-[85vh] max-w-[90vw] rounded-sm object-contain shadow-2xl shadow-black/50"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-paper/70 hover:text-accent sm:right-6"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
          >
            <HiOutlineChevronRight size={32} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-xs uppercase tracking-widest text-accent">
              {image.category}
            </p>
            <h3 className="font-display text-xl text-paper">{image.title}</h3>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
