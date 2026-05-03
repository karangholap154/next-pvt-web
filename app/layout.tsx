import type { Metadata, Viewport } from "next";
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
    default:
      "Private Academy - Mumbai University Engineering Study Notes & Question Papers | Download Materials",
    template: "%s | Private Academy",
  },
  description:
    "Download comprehensive engineering study notes, question papers, and video tutorials for Mumbai University students. Access materials for Computer, IT, AIML, Mechanical & Chemical engineering - all semesters, FE to BE. Join 2500+ successful students. Instant downloads. Expert curated content for exam preparation.",
  keywords: [
    "Mumbai University engineering notes",
    "study materials download",
    "question papers PDF",
    "computer engineering notes",
    "information technology study material",
    "AIML notes",
    "mechanical engineering papers",
    "chemical engineering study guide",
    "semester wise notes",
    "engineering exam preparation",
    "Mumbai University syllabus",
    "study notes PDF download",
    "previous year papers",
    "engineering video tutorials",
    "BE notes",
    "B.Tech study material",
    "Mumbai University examination",
    "engineering entrance preparation",
    "college study resources",
    "engineering notes",
    "online study materials",
    "exam preparation guide",
    "Private Academy",
  ],
  authors: [
    {
      name: "Karan Gholap",
      url: "https://www.privateacademy.in/",
    },
  ],
  applicationName: "Private Academy",
  creator: "Karan Gholap",
  publisher: "Private Academy",
  category: "education",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Private Academy - Mumbai University Engineering Study Notes & Question Papers",
    description:
      "Download comprehensive engineering study notes, question papers, and video tutorials for Mumbai University students. Access materials for Computer, IT, AIML, Mechanical & Chemical engineering. Expert curated content. Join 2500+ successful students!",
    url: "https://www.privateacademy.in/",
    siteName: "Private Academy",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 1200,
        alt: "Private Academy logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Private Academy - Mumbai University Engineering Study Notes & Question Papers",
    description:
      "Download comprehensive engineering study notes, question papers, and video tutorials for Mumbai University students. Join 2500+ successful engineering students.",
    site: "@PVTAcademyEdu",
    creator: "@privateacademy",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/pvtimg.png",
    shortcut: "/pvtimg.png",
    apple: "/pvtimg.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Private Academy",
    alternateName: [
      "Private Academy Mumbai University",
      "Private Academy - Engineering Study Materials",
    ],
    url: "https://www.privateacademy.in/",
    logo: {
      "@type": "ImageObject",
      url: "/og-image.png",
      width: 1200,
      height: 1200,
    },
    image: "/og-image.png",
    email: "privateacademy.in@gmail.com",
    slogan: "Engineering Excellence Hub",
    foundingDate: "2023",
    founder: {
      "@type": "Person",
      name: "Karan Gholap",
      jobTitle: "Founder & Developer",
      sameAs: [
        "https://linkedin.com/in/karangholap",
        "https://x.com/TheKaranGholap",
        "https://peerlist.io/karangholap",
      ],
    },
    description:
      "Download comprehensive engineering study notes, question papers, and video tutorials for Mumbai University students.",
    sameAs: [
      "https://www.instagram.com/privateacademy.in",
      "https://t.me/mumcomputer",
      "https://www.youtube.com/@pvtacademy",
      "https://chat.whatsapp.com/EYeOgxDw8qp6oRMlnTjlfI",
      "https://www.linkedin.com/company/privateacademy/",
      "https://x.com/PVTAcademyEdu",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2500",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 2,
      maxValue: 10,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.076,
      longitude: 72.8777,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Private Academy",
    alternateName: "Private Academy - Engineering Study Materials",
    url: "https://www.privateacademy.in/",
    description:
      "Engineering study notes, question papers, and video tutorials for Mumbai University students.",
    inLanguage: "en-IN",
    publisher: {
      "@type": "EducationalOrganization",
      name: "Private Academy",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Courses Offered",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Course",
          name: "Computer Engineering Notes",
          description:
            "Comprehensive study materials, notes, and question papers for Computer Engineering students.",
          provider: {
            "@type": "EducationalOrganization",
            name: "Private Academy",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Course",
          name: "Information Technology Notes",
          description:
            "Complete study resources and materials for IT students.",
          provider: {
            "@type": "EducationalOrganization",
            name: "Private Academy",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Course",
          name: "AIML Engineering Notes",
          description:
            "Specialized study materials for AI and Machine Learning engineering students.",
          provider: {
            "@type": "EducationalOrganization",
            name: "Private Academy",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Course",
          name: "Mechanical Engineering Notes",
          description:
            "Study materials and resources for Mechanical Engineering students.",
          provider: {
            "@type": "EducationalOrganization",
            name: "Private Academy",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Course",
          name: "Chemical Engineering Notes",
          description:
            "Comprehensive study materials for Chemical Engineering students.",
          provider: {
            "@type": "EducationalOrganization",
            name: "Private Academy",
          },
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark", inter.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-zinc-950 text-zinc-50 antialiased font-inter transition-colors">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
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
