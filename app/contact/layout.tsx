import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Private Academy",
  description: "Contact Private Academy for queries, feedback, and support. Reach out via email, WhatsApp, or contact form for assistance with engineering study materials.",
  keywords: [
    "contact private academy",
    "customer support",
    "engineering help",
    "student support",
    "get in touch",
    "feedback",
  ],
  openGraph: {
    title: "Contact Us - Get in Touch with Private Academy",
    description: "Contact Private Academy for queries and support regarding engineering study materials",
    url: "https://www.privateacademy.in/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
