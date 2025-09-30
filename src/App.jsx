import { ReactLenis, useLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
function App() {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });


  return (
    <main>
      <ReactLenis root />
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default App;
