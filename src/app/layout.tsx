import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Archivo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const monument_extended = localFont({
  src: [
    { path: '../assets/fonts/MonumentExtended-Bold.otf', weight: '700', },
    { path: '../assets/fonts/MonumentExtended-Regular.otf', weight: '400', },
  ],
  variable: '--font-monument-extended',
});

const archivo = Archivo({
  variable: "--font-archivo",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Katalyst",
  description: "Digital Agency Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monument_extended.variable} ${archivo.variable} antialiased`}
      >
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
