import { useState } from "react";
import { motion } from "framer-motion";

const initialForm = { name: "", email: "", message: "" };

function FloatingField({ id, label, type = "text", value, onChange }) {
  const Component = type === "textarea" ? "textarea" : "input";

  return (
    <div className="relative">
      <Component
        id={id}
        name={id}
        type={type === "textarea" ? undefined : type}
        rows={type === "textarea" ? 4 : undefined}
        value={value}
        onChange={onChange}
        placeholder=" "
        required
        className="peer w-full resize-none border-b border-paper/20 bg-transparent py-3 text-paper placeholder-transparent outline-none transition-colors focus:border-accent"
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-3 origin-left text-paper/50 transition-all duration-200 peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("sent");
    setForm(initialForm);
  };

  return (
    <section id="contact" className="px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-2xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-accent">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl text-paper sm:text-5xl">
            Let&apos;s Create Together
          </h2>
          <p className="mt-4 text-paper/60">
            Available for editorial, travel, and wedding commissions.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <FloatingField
            id="name"
            label="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <FloatingField
            id="email"
            label="Email Address"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <FloatingField
            id="message"
            label="Tell me about your project"
            type="textarea"
            value={form.message}
            onChange={handleChange}
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full rounded-full bg-accent py-4 text-sm font-medium uppercase tracking-widest text-ink transition-colors hover:bg-paper"
          >
            {status === "sent" ? "Message Sent ✓" : "Send Message"}
          </motion.button>

          {status === "sent" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm text-accent"
            >
              Thanks for reaching out — I&apos;ll reply within 48 hours.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
