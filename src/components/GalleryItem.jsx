import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function GalleryItem({ image, onOpen, className = "" }) {
  return (
    <motion.figure
      variants={item}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`group relative cursor-pointer overflow-hidden rounded-sm bg-ink/40 ${className}`}
      onClick={() => onOpen(image)}
    >
      <motion.img
        layoutId={`gallery-image-${image.id}`}
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="translate-y-4 p-3 transition-transform duration-500 group-hover:translate-y-0 sm:p-5">
          <p className="text-[10px] uppercase tracking-widest text-accent sm:text-xs">
            {image.category}
          </p>
          <h3 className="font-display text-sm text-paper sm:text-xl">{image.title}</h3>
        </div>
      </div>
    </motion.figure>
  );
}
