"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'm ${name} (${email}). ${message}`;
    const url = `https://wa.me/917977653450?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-ivory/50">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full border-b border-ivory/20 bg-transparent pb-3 text-ivory outline-none transition-colors focus:border-gold"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-ivory/50">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full border-b border-ivory/20 bg-transparent pb-3 text-ivory outline-none transition-colors focus:border-gold"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-ivory/50">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full resize-none border-b border-ivory/20 bg-transparent pb-3 text-ivory outline-none transition-colors focus:border-gold"
          placeholder="Tell us about your space..."
        />
      </div>
      <button
        type="submit"
        className="w-full border border-gold py-4 font-body text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-charcoal"
      >
        {sent ? "✓ Message sent via WhatsApp" : "Send via WhatsApp"}
      </button>
    </form>
  );
}
