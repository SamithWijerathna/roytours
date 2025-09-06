import type { Metadata } from "next";
import "./globals.css";

import { Urbanist } from "next/font/google";
import Footer from "./components/footer";
import Header from "./components/header";
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Roytours",
  description: "Explore the world with Roytours",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header></Header>
      <body className={`antialiased ${urbanist.className}`}>{children}</body>
      <Footer></Footer>
    </html>
  );
}
