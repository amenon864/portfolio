"use client";

import { useState } from "react";
import { CircleAlert, Clipboard, Check } from "lucide-react";
import { linksContent } from "@/data/links";
import { profile } from "@/data/profile";
import { copyText } from "@/lib/clipboard";

type CopyState = "idle" | "copied" | "error";

export function CopyEmailButton() {
  const [copyState, setCopyState] = useState<CopyState>("idle");

  async function copyEmail() {
    const copied = await copyText(profile.email);
    setCopyState(copied ? "copied" : "error");
    window.setTimeout(() => setCopyState("idle"), 1800);
  }

  const label = copyState === "copied"
    ? linksContent.labels.copiedEmail
    : copyState === "error"
      ? linksContent.labels.copyEmailError
      : linksContent.labels.copyEmail;

  return (
    <button
      type="button"
      className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-text transition duration-150 hover:border-accent hover:bg-raised"
      onClick={copyEmail}
    >
      {copyState === "copied" ? <Check aria-hidden="true" size={16} /> : null}
      {copyState === "error" ? <CircleAlert aria-hidden="true" size={16} /> : null}
      {copyState === "idle" ? <Clipboard aria-hidden="true" size={16} /> : null}
      <span aria-live="polite">{label}</span>
    </button>
  );
}
