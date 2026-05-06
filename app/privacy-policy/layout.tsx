import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Private Academy",
  description: "Comprehensive privacy policy explaining how Private Academy collects, uses, and protects your personal data.",
  keywords: [
    "privacy policy",
    "data protection",
    "user privacy",
    "terms of service",
    "private academy",
  ],
  openGraph: {
    title: "Privacy Policy - Private Academy",
    description: "Learn how we protect your personal data and privacy",
    url: "https://www.privateacademy.in/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
