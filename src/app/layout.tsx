import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Footer, TopNav } from "@/components";

const inter = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monadium",
  description: "A laboration project to learn myself Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="synthwave">
      <body className={inter.className}>
        <TopNav />
        <main className="container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
