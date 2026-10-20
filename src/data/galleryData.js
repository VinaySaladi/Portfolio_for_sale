// Placeholder imagery via picsum.photos — swap `src` with real photo URLs/imports when ready.
// `id` must stay stable and unique; it powers the lightbox shared-layout animation.
export const galleryImages = [
  {
    id: "frame-01",
    src: "https://picsum.photos/id/1011/1200/1500",
    alt: "Portrait in natural light",
    title: "Quiet Light",
    category: "Portrait",
  },
  {
    id: "frame-02",
    src: "https://picsum.photos/id/1015/1400/1000",
    alt: "River cutting through a forested valley",
    title: "Valley Current",
    category: "Landscape",
  },
  {
    id: "frame-03",
    src: "https://picsum.photos/id/1025/1200/1500",
    alt: "Candid street portrait",
    title: "Passing Glance",
    category: "Street",
  },
  {
    id: "frame-04",
    src: "https://picsum.photos/id/1035/1400/1000",
    alt: "Mountain ridge at dawn",
    title: "First Light",
    category: "Landscape",
  },
  {
    id: "frame-05",
    src: "https://picsum.photos/id/1041/1200/1500",
    alt: "Architectural lines against the sky",
    title: "Vertical City",
    category: "Architecture",
  },
  {
    id: "frame-06",
    src: "https://picsum.photos/id/1050/1400/1000",
    alt: "Bride and groom walking under trees",
    title: "The Long Way Round",
    category: "Wedding",
  },
  {
    id: "frame-07",
    src: "https://picsum.photos/id/1059/1200/1500",
    alt: "Fog rolling over a pine forest",
    title: "Hush",
    category: "Nature",
  },
  {
    id: "frame-08",
    src: "https://picsum.photos/id/1062/1400/1000",
    alt: "Market street bustling with motion",
    title: "Rush",
    category: "Street",
  },
  {
    id: "frame-09",
    src: "https://picsum.photos/id/1074/1200/1500",
    alt: "Close portrait with soft shadow",
    title: "Half Shade",
    category: "Portrait",
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(galleryImages.map((img) => img.category))),
];
