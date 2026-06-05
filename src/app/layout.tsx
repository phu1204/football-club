import type { Metadata } from "next";
import "./globals.css";

import { LanguageProvider } from "@/context/LanguageContext";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Simple FC — Where Legends Are Forged",
  description: "The official premium digital platform of Simple Football Club. Experience passion, glory, and the unyielding spirit of the beautiful game.",

   icons: {
    icon: "/images/logo.png",
  },

  openGraph: {
    title: "Phoenix FC",
    description: "One Team. One Dream.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1" />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
