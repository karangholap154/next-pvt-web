import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{ branch: string; semester: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { branch, semester } = await params;
  const decodedBranch = decodeURIComponent(branch);
  const formattedBranch = decodedBranch
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  const semesterNum = parseInt(semester, 10);

  try {
    // Fetch count of notes for this branch and semester
    const { count } = await supabase
      .from("study_notes")
      .select("*", { count: "exact", head: true })
      .eq("branch", formattedBranch)
      .eq("semester", semesterNum);

    const title = `${formattedBranch} Engineering Semester ${semesterNum} Notes & Materials`;
    const description = `Download comprehensive ${formattedBranch} engineering study materials for Semester ${semesterNum} at Mumbai University. ${count || "Multiple"} study notes and question papers for exam preparation.`;

    return {
      title,
      description,
      keywords: [
        formattedBranch,
        "engineering notes",
        `semester ${semesterNum}`,
        "study materials",
        "question papers",
        "Mumbai University",
        "exam preparation",
        `${formattedBranch} semester ${semesterNum}`,
      ],
      openGraph: {
        title,
        description,
        url: `https://www.privateacademy.in/share/notes/${branch}/semester/${semester}`,
        type: "website",
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    
    const title = `${formattedBranch} Engineering Semester ${semesterNum} Study Notes`;
    const description = `Download ${formattedBranch} engineering study materials for Semester ${semesterNum}`;

    return {
      title,
      description,
      keywords: [formattedBranch, "engineering notes", "study materials"],
    };
  }
}

export default function ShareNotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
