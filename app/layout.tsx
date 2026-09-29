import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MeTooBug",
  description: "Got a bug, I have a fix for You.",
};

export default function RootLayout({ children, }: Readonly<{children : React.ReactNode;}> ) {
  return (
    <html  lang="en">
      
    <body>
      <Navbar/>
        <main>
        {children}
        </main>
      <Footer/>
    </body>
    </html>
  );
}
