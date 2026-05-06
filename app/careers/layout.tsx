import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Private Academy - Join Our Team",
  description: "Explore exciting career opportunities at Private Academy. Help students succeed by joining our team of passionate educators and developers.",
  keywords: [
    "careers",
    "job opportunities",
    "hiring",
    "education",
    "student support",
    "team",
    "remote jobs",
  ],
  openGraph: {
    title: "Careers at Private Academy - Join Our Team",
    description: "Explore career opportunities to help students succeed in their academic journey",
    url: "https://www.privateacademy.in/careers",
    type: "website",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
