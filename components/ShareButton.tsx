"use client";

import { useState } from "react";
import Button from "./Button";
import { Share2, Check } from "lucide-react";

type Props = {
  url?: string;
  title?: string;
  text?: string;
};

export default function ShareButton({ url, title, text }: Props) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  const handleShare = async () => {
    const shareUrl = url ?? (typeof window !== "undefined" ? window.location.href : "");
    const shareTitle = title ?? (typeof document !== "undefined" ? document.title : "");
    if (!shareUrl) return;

    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text: text ?? undefined, url: shareUrl });
        return;
      } catch (err) {
        // If native share fails (user cancelled or not allowed), fall back to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setStatus("copied");
      setTimeout(() => setStatus("idle"), 2000);
    } catch (e) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  return (
    <Button
      onClick={handleShare}
      variant="outline"
      className="mt-2 h-12 w-full rounded-full border-white/10 bg-zinc-950/60 text-zinc-100 hover:bg-white/10"
    >
      {status === "copied" ? (
        <>
          <Check className="mr-2 h-4 w-4" /> Shared
        </>
      ) : (
        <>
          <Share2 className="mr-2 h-4 w-4" /> Share
        </>
      )}
    </Button>
  );
}
