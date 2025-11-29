import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GalaxyBackground from "@/styles/GalaxyBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'EEJS | Portfolio',
  description: 'Welcome to my personal portfolio showcasing my projects, experiences, and skills.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* Galaxy Background (Client Component) */}
        <GalaxyBackground />

        <div className="min-h-screen flex flex-col relative z-10">
          <Header />

          <main className="flex-1 pt-7 px-4">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
