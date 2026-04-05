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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anybody:wght@400;700;800&family=Instrument+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen font-body">
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
