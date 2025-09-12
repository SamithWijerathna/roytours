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
  icons: {
    icon: ["/icon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={urbanist.className}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
