import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Never Gonna GYU - Welcome",
  description: "Never gonna make you cry, never gonna say goodbye.",
  openGraph: {
    type: "website",
    url: "https://my-project-teal-zeta.vercel.app/",
    title: "Never Gonna GYU",
    description: "Never gonna make you cry, never gonna say goodbye.",
    images: [
      {
        url: "https://my-project-teal-zeta.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Never Gonna GYU",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Never Gonna GYU",
    description: "Never gonna make you cry, never gonna say goodbye.",
    images: ["https://my-project-teal-zeta.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
