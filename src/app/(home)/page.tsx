import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Works from "./components/Works";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Services />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
}
