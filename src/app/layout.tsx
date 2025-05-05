import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "../../components/header";
import Footer from "../../components/footer";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Bit PT",
  description: "Jouw fitness coach online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground`}>
        <Header />
        <main className="min-h-screen container mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
