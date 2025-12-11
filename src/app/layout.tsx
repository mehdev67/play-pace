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


import { defaultMetadata } from '@/config/seo';
import { organizationSchema, websiteSchema } from '@/config/structured-data';

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${greatVibes.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
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
