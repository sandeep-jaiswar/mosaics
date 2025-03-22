import type { Metadata } from "next";
import { Balsamiq_Sans } from "next/font/google";
import "./globals.css";

const balsamiqSans = Balsamiq_Sans({
  variable: "--font-balsamiq-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
  style: "normal",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Mosaics",
  description: "Ecommerce store for mosaics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${balsamiqSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
