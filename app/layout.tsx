import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { PersonaProvider } from "@/components/common/PersonaProvider";
import ThemeScript from "@/components/common/ThemeScript";
import PersonaScript from "@/components/common/PersonaScript";
import AmbientBackground from "@/components/common/AmbientBackground";
import StackForgePromo from "@/components/common/StackForgePromo";
import { profile } from "@/lib/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.shortName} | ${profile.roles[0]}`,
  description: profile.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeScript />
        <PersonaScript />
        <ThemeProvider>
          <PersonaProvider>
            <AmbientBackground />
            <div className="min-h-screen flex flex-col relative">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <StackForgePromo />
            </div>
          </PersonaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
