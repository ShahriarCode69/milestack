import { ReactLenis, useLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";


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
      <Footer/>
    </main>
  );
}

export default App;
