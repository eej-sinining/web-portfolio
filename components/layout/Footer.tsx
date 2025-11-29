"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        w-full py-6 mt-10
        border-t border-white/20
        bg-white/10
        backdrop-blur-sm
        shadow-[0_8px_32px_rgba(255,255,255,0.15)]
        text-white
      "
    >
      <div className="max-w-6xl mx-auto px-4 text-center space-y-3">
        <p className="text-sm drop-shadow-md">
          © {year} Ean Endrew Jade Sinining. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
