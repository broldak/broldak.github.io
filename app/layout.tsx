import Footer from "./components/footer";
import Navbar from "./components/navigation";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brian Oldak",
  description: "Brian Oldak's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-1 flex-col items-center justify-between py-12 px-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
