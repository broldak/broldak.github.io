import Footer from "./components/footer";
import Navbar from "./components/navigation";
import WireframeBg from "./components/wireframe-bg";
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
        <link
          href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/style.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen font-body relative">
        <WireframeBg />
        <Navbar />
        <main className="flex flex-1 flex-col relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
