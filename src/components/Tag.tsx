import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  tone?: "default" | "accent";
};

export function Tag({ children, tone = "default" }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border px-2 py-0.5 font-mono text-[11px] leading-5",
        tone === "accent"
          ? "border-accent bg-raised text-accent"
          : "border-line bg-raised text-muted",
      )}
    >
      {children}
    </span>
  );
}
