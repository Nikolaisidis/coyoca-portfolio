import type { Metadata } from "next";
import Navbar from "../components/navbar";
import "../css/globals.css";
export const metadata: Metadata = {
  title: "Coyoca Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/loggoword.png" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
