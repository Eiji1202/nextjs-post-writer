import Footer from "@/components/ui/Footer";
import Header from "./components/Header/Header";
import DashboardNav from "./components/DashboardNav";
import { dashboardConfig } from "@/config/dashboard";
import DashboardShell from "./components/DashboardShell";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <div className="container grid flex-1 gap-6 md:gap-12 md:grid-cols-[200px_1fr] py-8">
        <aside className="hidden md:flex flex-col">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex flex-col w-full flex-1 overflow-hidden">
          <DashboardShell>{children}</DashboardShell>
        </main>
      </div>
      <Footer />
    </div>
  );
}
