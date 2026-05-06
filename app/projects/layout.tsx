import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects Showcase - Web, Mobile & Python Applications",
  description: "Explore our portfolio of innovative web development, mobile applications, and Python projects built with modern technologies and best practices.",
  keywords: [
    "project showcase",
    "web development projects",
    "mobile development",
    "python projects",
    "react applications",
    "vercel hosting",
    "portfolio",
  ],
  openGraph: {
    title: "Our Projects Showcase - Web, Mobile & Python Applications",
    description: "Explore our innovative web development and Python projects",
    url: "https://www.privateacademy.in/projects",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
