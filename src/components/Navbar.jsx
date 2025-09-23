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
    <nav className="fixed top-0 left-0 z-50 mx-auto w-full p-8">
      <div className="liquid-glass box-shadow container flex justify-between px-5 py-4">
        <h1 className="text-2xl font-bold">MileStack.</h1>
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaX size={24} /> : <FaBarsStaggered size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="liquid-glass box-shadow mt-4 flex h-auto items-center justify-center py-12 md:hidden motion-translate-x-in-[167%] motion-blur-in-[21px] motion-duration-[0.4s]">
          <ul className="flex flex-col items-center gap-12 md:flex">
            {navLinks.map((link) => (
              <li key={link.name} className="">
                <a
                  href={link.link}
                  className="text-xl hover:cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
