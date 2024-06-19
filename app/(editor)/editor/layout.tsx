import Footer from "@/components/ui/Footer";
// import Header from "./components/Header/Header";
// import DashboardNav from "./components/DashboardNav";
import { dashboardConfig } from "@/config/dashboard";
// import DashboardShell from "./components/DashboardShell";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto grid items-center gap-10 py-8">
      {children}
    </div>
  );
}
