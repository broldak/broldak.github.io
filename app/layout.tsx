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
      <body>
        {/* <Navigation /> */}
        {children}
      </body>
    </html>
  );
}
