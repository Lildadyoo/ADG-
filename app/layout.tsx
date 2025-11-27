import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const workSans = Work_Sans({ 
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Action for Development Group (ADG) - Empowering Communities in Uganda",
  description: "Action for Development Group is a Uganda-based nonprofit empowering communities through education, health, and sustainable growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4616096137173513"
          crossOrigin="anonymous"
        ></script>

        {/* Google CMP (Funding Choices) */}
        <script
          async
          src="https://fundingchoicesmessages.google.com/...your-generated-code..."
        ></script>

        {/* Privacy Policy for Google CMP */}
        <link 
          rel="privacy-policy" 
          href="https://www.adguganda.org/privacy-policy" 
        />
      </head>

      <body className={`${inter.variable} ${workSans.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
