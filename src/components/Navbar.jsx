import { useState } from "react";
import { FaX, FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", link: "#" },
    { id: 2, name: "Services", link: "#services" },
    { id: 3, name: "Achievement", link: "#achievement" },
    { id: 4, name: "About", link: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 mx-auto h-auto w-full p-8">
      <div className="liquid-glass container flex items-center justify-between px-5 py-3">
        <h1 className="text-2xl font-bold">
          <a href="#">MileStack.</a></h1>
        <ul className="hidden gap-12 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-4">
          <button className="primary-btn box-shadow hidden md:block">
            Sign Up
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaX size={24} /> : <FaBarsStaggered size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="liquid-glass mt-4 flex flex-col gap-16 h-auto motion-blur-in-[21px] motion-translate-x-in-[167%] items-center justify-center py-12 motion-duration-[0.4s] md:hidden">
          <ul className="flex flex-col items-center gap-12 md:flex">
            {navLinks.map((link) => (
              <li key={link.name} className="">
                <a
                  href={link.link}
                  className="text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-0.5 w-52 bg-white/20"></div>
          <button className="primary-btn box-shadow md:block">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
