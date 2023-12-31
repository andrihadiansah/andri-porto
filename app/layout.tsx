import type { Metadata } from "next";
import "@/styles/globals.css";
import { Montserrat as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
  preload: true,
});
export const metadata: Metadata = {
  title: "&ri.porto | Andri Hadiansah Portofolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        <main className="pt-[64px] flex justify-center w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
