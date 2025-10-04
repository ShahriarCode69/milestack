import { ReactLenis, useLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import Waitlist from "./components/Waitlist";


function App() {
  return (
    <main>
      <ReactLenis root />
      <Navbar />
      <Hero />
      <About />
      <Testimonials/>
      <Features/>
      <Waitlist/>
    </main>
  );
}

export default App;
