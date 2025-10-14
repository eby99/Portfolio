import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eby Mathew - Portfolio",
  description: "Portfolio of Eby Mathew - A highly motivated Full Stack Developer with expertise in MERN stack, Python, Java, PHP, and modern web technologies.",
  keywords: ["Full Stack Developer", "MERN Stack", "Portfolio", "Eby Mathew", "Web Developer"],
  authors: [{ name: "Eby Mathew" }],
  openGraph: {
    title: "Eby Mathew - Portfolio",
    description: "Portfolio showcasing projects and skills in Full Stack Development, MERN Stack, and Modern Web Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}