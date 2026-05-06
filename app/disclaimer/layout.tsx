import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - Private Academy",
  description: "Important disclaimer about the use of Private Academy engineering study materials. Please read before using our educational resources.",
  keywords: [
    "disclaimer",
    "legal",
    "terms of use",
    "educational use",
    "private academy",
  ],
  openGraph: {
    title: "Disclaimer - Private Academy",
    description: "Important disclaimer about the use of our engineering study materials",
    url: "https://www.privateacademy.in/disclaimer",
    type: "website",
  },
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
