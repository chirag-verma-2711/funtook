import type { Metadata } from "next";
// import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Head from "next/head"; // Ensure Head is imported for meta and link tags

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Funtook",
  description: "Funtook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Link to Google Fonts for Roboto */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-roboto`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
