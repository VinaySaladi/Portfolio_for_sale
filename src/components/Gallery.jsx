import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { galleryImages, categories } from "../data/galleryData";
import GalleryItem from "./GalleryItem";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  const filteredImages = useMemo(
    () =>
      activeCategory === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  const activeIndex = activeImage
    ? filteredImages.findIndex((img) => img.id === activeImage.id)
    : -1;

  const showRelative = (offset) => {
    if (activeIndex === -1) return;
    const nextIndex =
      (activeIndex + offset + filteredImages.length) % filteredImages.length;
    setActiveImage(filteredImages[nextIndex]);
  };

  return (
    <section id="gallery" className="px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-accent">
            Selected Work
          </p>
          <h2 className="font-display text-4xl text-paper sm:text-5xl">
            Gallery
          </h2>
        </motion.div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-wider transition-colors ${
                activeCategory === category
                  ? "border-accent bg-accent text-ink"
                  : "border-paper/20 text-paper/70 hover:border-accent hover:text-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image) => (
            <GalleryItem
              key={image.id}
              image={image}
              onOpen={setActiveImage}
              className="aspect-[4/5]"
            />
          ))}
        </div>
      </div>

      <Lightbox
        image={activeImage}
        onClose={() => setActiveImage(null)}
        onPrev={() => showRelative(-1)}
        onNext={() => showRelative(1)}
      />
    </section>
  );
}
