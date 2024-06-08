import Contact from "./components/Section/Contact/Contact";
import Feature from "./components/Section/Feature/Feature";
import Top from "./components/Section/Top/Top";

export default function IndexPage() {
  return (
    <div className="py-8 md:py-12 lg:py-16 space-y-14">
      <Top />
      <Feature />
      <Contact />
    </div>
  );
}
