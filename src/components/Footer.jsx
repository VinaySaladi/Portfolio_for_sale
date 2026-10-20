import { FiInstagram, FiTwitter, FiMail } from "react-icons/fi";

const socials = [
  { icon: FiInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FiMail, href: "mailto:hello@liorhale.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-display text-sm tracking-widest text-paper/60">
          © {new Date().getFullYear()} Lior Hale. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-paper/60 transition-all hover:-translate-y-1 hover:text-accent"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
