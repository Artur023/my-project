import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://my-project-teal-zeta.vercel.app/" />
        <meta property="og:title" content="Never Gonna GYU" />
        <meta property="og:description" content="Never gonna make you cry, never gonna say goodbye." />
        <meta property="og:image" content="https://my-project-teal-zeta.vercel.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Never Gonna GYU" />
        <meta name="twitter:description" content="Never gonna make you cry, never gonna say goodbye." />
        <meta name="twitter:image" content="https://my-project-teal-zeta.vercel.app/og-image.jpg" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="twitter:image:alt" content="Never Gonna GYU" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
