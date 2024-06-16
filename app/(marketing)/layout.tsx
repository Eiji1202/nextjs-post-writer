import Footer from "@/components/ui/Footer";
import Header from "./components/Header/Header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
