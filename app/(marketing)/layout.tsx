import type { Metadata } from "next";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Post Writer",
  description: "Generated by create next app",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fle flex-col min-h-dvh">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}