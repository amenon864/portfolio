"use client";

import { useState } from "react";
import { Clipboard, Check } from "lucide-react";
import { profile } from "@/data/profile";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-text transition duration-150 hover:border-accent hover:bg-raised"
      onClick={copyEmail}
    >
      {copied ? <Check aria-hidden="true" size={16} /> : <Clipboard aria-hidden="true" size={16} />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
