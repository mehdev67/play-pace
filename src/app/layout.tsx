import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper"; // Import the new wrapper
import OceanBackground from "@/components/OceanBackground";
import { Toaster } from "@/components/ui/toaster";
import SupportChat from "@/components/SupportChat";


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
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased font-sans">
        <ClientLayoutWrapper> {/* Use the wrapper here */}
          <OceanBackground />
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
