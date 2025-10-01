import { ReactLenis, useLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <main>
      <ReactLenis root />
      <Navbar />
      <Hero />
      <About />
      <Testimonials/>
    </main>
  );
}

export default App;
