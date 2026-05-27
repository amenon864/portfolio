import { CommandPalette } from "@/components/CommandPalette";
import { ContextPanel } from "@/components/ContextPanel";
import { Footer } from "@/components/Footer";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";
import { Sidebar } from "@/components/Sidebar";
import { TopNav } from "@/components/TopNav";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas">
      <CommandPalette />
      <KeyboardShortcuts />
      <TopNav />
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)_280px]">
        <Sidebar />
        <main className="min-w-0 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
          {children}
          <Footer />
        </main>
        <ContextPanel />
      </div>
    </div>
  );
}
