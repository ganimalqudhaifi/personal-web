import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andi Muhammad Ganim Alqudhaifi - Personal Web",
  description:
    "Discover the journey of Andi Muhammad Ganim Alqudhaifi, a passionate web developer focusing on clean code and maintainable design.",
  keywords: [
    "Andi Muhammad Ganim Alqudhaifi",
    "Web Developer",
    "Front-End Developer",
    "Full-Stack Developer",
  ],
  icons: "/favicon.png",
  authors: [{ name: "Andi Muhammad Ganim Alqudhaifi" }],
  openGraph: {
    type: "website",
    title: "Andi Muhammad Ganim Alqudhaifi - Personal Web",
    description:
      "Discover the journey and works of Andi Muhammad Ganim Alqudhaifi, an expert in architectural design and maintainable web solutions.",
    url: "ganimalqudhaifi.my.ids",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
