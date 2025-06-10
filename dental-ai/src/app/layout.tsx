import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DentalAI - Your Dental Organization's Intelligence Layer",
  description: "Transform your dental organization with AI-powered business intelligence. Get instant answers to critical business questions across procurement, operations, and finance.",
  keywords: "dental AI, DSO software, dental business intelligence, procurement optimization, dental analytics",
  authors: [{ name: "DentalAI" }],
  openGraph: {
    title: "DentalAI - Your Dental Organization's Intelligence Layer",
    description: "Transform your dental organization with AI-powered business intelligence.",
    type: "website",
    locale: "en_US",
    siteName: "DentalAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "DentalAI - Your Dental Organization's Intelligence Layer",
    description: "Transform your dental organization with AI-powered business intelligence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
