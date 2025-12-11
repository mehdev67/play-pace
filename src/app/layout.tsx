import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Great_Vibes } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper"; // Import the new wrapper
import { Toaster } from "@/components/ui/toaster";
import SupportChat from "@/components/SupportChat";

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
});


export const metadata: Metadata = {
  title: "PlayPace – AI Software & Automation | Sweden",
  description:
    "PlayPace is a creative AI and data studio based in Sweden. We build innovative software, mobile apps, automations and AI Agents that don't suck.",
  keywords: [
    "AI software",
    "automation",
    "AI agents",
    "Sweden",

    "machine learning",
    "custom software development",
  ],
  authors: [{ name: "PlayPace" }],
  openGraph: {
    title: "PlayPace – AI Software & Automation | Sweden",
    description:
      "We build AI-powered software that runs fast, scales smart, and gives you the kind of edge others can't copy.",
    url: "https://playpace.net",
    siteName: "PlayPace",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlayPace – AI Software & Automation",
    description:
      "We build AI-powered software that runs fast, scales smart, and gives you the kind of edge others can't copy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${greatVibes.variable}`}>
      <body className="antialiased font-sans" style={{
        background: "radial-gradient(ellipse at center, #f1f1f1 0%, #e5e5e5 70%, #d4d4d4 100%)",
        minHeight: "100vh",
        color: "#27272a"
      }}>
        <ClientLayoutWrapper> {/* Use the wrapper here */}
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <SupportChat />
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
