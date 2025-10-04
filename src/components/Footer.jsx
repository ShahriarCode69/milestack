import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="section bg-dark2 px-8 py-12 text-gray-300 md:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Logo + About */}
        <div>
          <h1 className="heading-sm">MileStack.</h1>
          <p className="text-sm leading-relaxed">Task completion made easy.</p>
        </div>

        {/* Services */}
        <div>
          <h6 className="mb-4 text-lg font-semibold text-white">Quick Links</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="transition hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-primary">
                Why Choose Us?
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-primary">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-primary">
                Reviews
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="mb-4 text-lg font-semibold text-white">Company</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="transition hover:text-primary">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-primary">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-primary">
                Waitlist
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="mb-4 text-lg font-semibold text-white">Legal</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="transition hover:text-primary">
                Terms of use
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-primary">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-primary">
                Cookie policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-12 flex justify-center space-x-6">
        <a
          href="#"
          className="text-xl text-gray-400 transition hover:text-primary"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="#"
          className="text-xl text-gray-400 transition hover:text-primary"
        >
          <FaThreads size={28} />
        </a>
        <a
          href="#"
          className="text-xl text-gray-400 transition hover:text-primary"
        >
          <FaInstagram size={28} />
        </a>
        <a
          href="#"
          className="text-xl text-gray-400 transition hover:text-primary"
        >
          <FaYoutube size={28} />
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MileStack. All rights reserved. Made with
        💗 by{" "}
        <a
          target="_blank"
          className="font-bold underline hover:text-primary"
          href="https://shahriarcode.vercel.app/"
        >
          ShahriarCode
        </a>
      </div>
    </footer>
  );
}
