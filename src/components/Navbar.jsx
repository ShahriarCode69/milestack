import { useState } from "react";
import { FaX, FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#" },
    { name: "Services", link: "#services" },
    { name: "Achievement", link: "#achievement" },
    { name: "About", link: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 mx-auto w-full p-8">
      <div className="container rounded-full border bg-white/40 p-4">
        <h1 className="text-2xl font-bold underline">MileStack.</h1>
      </div>
    </nav>
  );
};

export default Navbar;
