import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Private Academy - Engineering Study Materials & Notes",
  description: "Learn about Private Academy's mission to provide free, quality engineering study materials for Mumbai University students. 2500+ students helped with comprehensive notes and resources.",
  keywords: [
    "about private academy",
    "engineering study materials",
    "student support platform",
    "educational resources",
    "Mumbai University",
  ],
  openGraph: {
    title: "About Private Academy - Engineering Study Materials & Notes",
    description: "Learn about our mission to provide free engineering study materials for Mumbai University students",
    url: "https://www.privateacademy.in/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
