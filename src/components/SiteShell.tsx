import { CommandPalette } from "@/components/CommandPalette";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { TopNav } from "@/components/TopNav";
import { navigationContent } from "@/data/navigation";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell min-h-screen bg-canvas">
      <a
        className="focus-ring fixed left-4 top-4 z-50 -translate-y-20 rounded-md bg-panel px-4 py-2 text-sm text-text shadow-lg transition-transform focus:translate-y-0"
        href="#main-content"
      >
        {navigationContent.skipToContentLabel}
      </a>
      <CommandPalette />
      <TopNav />
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)]">
        <Sidebar />
        <main
          id="main-content"
          tabIndex={-1}
          className="site-main min-w-0 px-4 py-6 sm:px-6 lg:px-8 lg:py-10"
        >
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
