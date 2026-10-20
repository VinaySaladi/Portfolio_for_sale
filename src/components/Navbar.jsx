import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const links = [
  { id: "home", label: "Home" },
  { id: "gallery", label: "Gallery" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeId }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          isScrolled ? "bg-ink/80 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
        }`}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="#home"
            className="font-display text-lg tracking-widest text-paper uppercase"
          >
            Lior Hale
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative text-sm uppercase tracking-wider transition-colors ${
                    activeId === link.id ? "text-accent" : "text-paper/80 hover:text-paper"
                  }`}
                >
                  {link.label}
                  {activeId === link.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 h-px w-full bg-accent"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Toggle menu"
            className="text-paper md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <HiOutlineMenu size={28} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-ink md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute right-6 top-6 text-paper"
              onClick={() => setIsMenuOpen(false)}
            >
              <HiOutlineX size={30} />
            </button>

            {links.map((link, index) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-3xl uppercase tracking-wider text-paper"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
