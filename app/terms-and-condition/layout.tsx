import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - Private Academy",
  description: "Terms and conditions governing the use of Private Academy services and engineering study materials.",
  keywords: [
    "terms and conditions",
    "terms of service",
    "legal terms",
    "user agreement",
    "private academy",
  ],
  openGraph: {
    title: "Terms & Conditions - Private Academy",
    description: "Terms governing the use of Private Academy services",
    url: "https://www.privateacademy.in/terms-and-condition",
    type: "website",
  },
};

export default function TermsAndConditionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
