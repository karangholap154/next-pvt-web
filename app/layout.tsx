import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.privateacademy.in"),
  title: {
    default: "Private Academy Engineering",
    template: "%s | Private Academy Engineering",
  },
  description:
    "Private Academy Engineering is an educational platform for Mumbai University engineering students with notes, projects, tutorials, and career resources.",
  keywords: [
    "Private Academy Engineering",
    "Mumbai University engineering notes",
    "engineering study materials",
    "computer engineering notes",
    "information technology notes",
    "mini projects for engineering students",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Private Academy Engineering",
    description:
      "Study notes, projects, tutorials, and educational resources for Mumbai University engineering students.",
    url: "https://www.privateacademy.in",
    siteName: "Private Academy Engineering",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Private Academy Engineering",
    description:
      "Study notes, projects, tutorials, and educational resources for Mumbai University engineering students.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  themeColor: "#0f172a",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", inter.variable, "font-sans", geist.variable)} suppressHydrationWarning>
          <body className="min-h-screen bg-zinc-950 text-zinc-50 antialiased font-inter transition-colors">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
