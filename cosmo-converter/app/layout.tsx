import type { Metadata } from "next";
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LoadingTransition from "@/components/Transitioning";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Online File Converter | CosmoConverter",
  description:
    "Effortlessly convert with any file formats including documents, images, presentations, archives, audio, and video files with CosmoConverter. Experience seamless and provided free file conversion from us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="CosmoConverter" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingTransition>
          {children}
          <Analytics />
          <SpeedInsights />
        </LoadingTransition>
      </body>
    </html>
  );
}
