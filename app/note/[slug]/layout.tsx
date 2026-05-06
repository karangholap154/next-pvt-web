import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const { data: note } = await supabase
      .from("study_notes")
      .select("*")
      .eq("slug", slug)
      .single();

    if (note) {
      const title = `${note.title} - ${note.branch} Engineering Notes`;
      const description = `Download ${note.title} study materials for ${note.branch} engineering, Semester ${note.semester} at Mumbai University. Complete notes for exam preparation.`;
      
      return {
        title,
        description,
        keywords: [
          note.title,
          note.branch,
          "engineering notes",
          "study materials",
          "semester " + note.semester,
          "Mumbai University",
          "exam preparation",
        ],
        openGraph: {
          title,
          description,
          url: `https://www.privateacademy.in/note/${slug}`,
          type: "article",
        },
      };
    }
  } catch (error) {
    console.error("Error generating metadata:", error);
  }

  return {
    title: "Study Note - Private Academy",
    description: "Download engineering study notes from Private Academy for exam preparation",
  };
}

export default function NoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
