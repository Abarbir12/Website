import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "doe - Your Dental Organization's Intelligence Layer",
  description:
    "Transform your dental practice with AI-powered insights. Connect your entire organization through intelligent data analysis and natural language interfaces.",
  keywords: "dental AI, DSO software, dental business intelligence, procurement optimization, dental analytics",
  authors: [{ name: "doe" }],
  openGraph: {
    title: "doe - Your Dental Organization's Intelligence Layer",
    description:
      "Transform your dental practice with AI-powered insights. Connect your entire organization through intelligent data analysis and natural language interfaces.",
    siteName: "doe",
    type: "website",
  },
  twitter: {
    title: "doe - Your Dental Organization's Intelligence Layer",
    description:
      "Transform your dental practice with AI-powered insights. Connect your entire organization through intelligent data analysis and natural language interfaces.",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Apply saved theme immediately to prevent flash
              (function() {
                const savedTheme = localStorage.getItem('theme') || 'system';
                const mq = window.matchMedia('(prefers-color-scheme: dark)');
                const shouldDark = savedTheme === 'dark' || (savedTheme === 'system' && mq.matches);
                if (shouldDark) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Global fixed gradient & mesh background - extended for overscroll */}
        <div className="fixed -inset-[50%] -z-10 pointer-events-none bg-base-gradient">
          <div className="absolute inset-0 bg-orb-mesh" />
        </div>
        {children}
        <Toaster position="bottom-right" richColors />
        <ThemeToggle />
      </body>
    </html>
  );
}
