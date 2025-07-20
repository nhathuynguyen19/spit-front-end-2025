import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Merriweather,
  Great_Vibes,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400", "700"], // tuỳ nhu cầu
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // chỉ có 400
  variable: "--font-great-vibes",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // thêm các trọng số nếu cần
  variable: "--font-playfair",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Festival Huế 2025",
  description:
    "Landing page Festival Huế 2025 - Làng nghề, Ẩm thực, Nghệ thuật",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} ${greatVibes.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
