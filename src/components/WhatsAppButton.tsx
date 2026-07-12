"use client";

const PHONE = "917977653450";
const MESSAGE = encodeURIComponent("Hi! I'd like to discuss interior design for my home.");

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 md:bottom-8 md:right-8"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.84.74 5.512 2.04 7.832L.7 31.3l7.468-1.34A15.92 15.92 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.2c-2.612 0-5.16-.68-7.368-1.96l-.528-.32-4.432.796.796-4.32-.344-.544A13.08 13.08 0 012.8 16c0-7.28 5.92-13.2 13.2-13.2S29.2 8.72 29.2 16 23.28 29.2 16 29.2zm7.36-10.04c-.4-.2-2.36-1.16-2.72-1.3-.36-.12-.64-.2-.92.2s-1.04 1.3-1.28 1.56c-.24.28-.48.32-.88.12-.4-.2-1.72-.64-3.28-2.04-1.2-1.08-2-2.4-2.24-2.8-.24-.4-.024-.64.18-.84.18-.2.4-.48.6-.72.2-.24.28-.4.4-.68.12-.28.06-.52-.02-.72-.08-.2-.92-2.2-1.24-3-.32-.8-.64-.68-.88-.68-.24-.02-.52-.02-.8-.02-.28 0-.72.1-1.1.52s-1.44 1.4-1.44 3.4c0 2 1.44 3.92 1.64 4.2.2.28 2.76 4.36 6.84 5.96.96.36 1.7.6 2.28.76.96.28 1.84.24 2.52.16.76-.08 2.36-.96 2.68-1.88.32-.92.32-1.72.24-1.88-.08-.16-.28-.28-.68-.48z"/>
      </svg>
    </a>
  );
}
