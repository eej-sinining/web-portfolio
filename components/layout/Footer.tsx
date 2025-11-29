"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full py-6 mt-10 shadow-sm border-t transition-colors duration-300"
      style={{ borderColor: "var(--foreground)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center space-y-3">
        <p className="text-sm">
          © {year} Ean Endrew Jade Sinining. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
