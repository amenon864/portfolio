import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { routes } from "@/data/navigation";
import { notFoundContent } from "@/data/notFound";

export const metadata: Metadata = {
  title: notFoundContent.metadataTitle,
};

export default function NotFoundPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <SectionHeader eyebrow={notFoundContent.eyebrow} title={notFoundContent.title}>
        <p>{notFoundContent.description}</p>
      </SectionHeader>
      <Link
        className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-text transition duration-150 hover:border-accent hover:bg-raised"
        href={routes.home}
      >
        <ArrowLeft aria-hidden="true" size={16} />
        {notFoundContent.homeLabel}
      </Link>
    </div>
  );
}
