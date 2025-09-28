import { FaBoltLightning } from "react-icons/fa6";
import { PiMouseSimple } from "react-icons/pi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Hero = () => {
  return (
    <section id="#" className="h-screen w-full bg-[url(/hero-bg.png)] bg-cover bg-fixed bg-center">
      <div className="relative container h-full pt-56">
        <div className="absolute bottom-20 mx-8 2xl:mx-0 ">
          <h1 className="heading-xl">
            Manage Your Task <br /> Efficiently
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            sequi alias blanditiis?
          </p>
        </div>
        <div className="backdrop-blur-base absolute top-45 right-0 inline-flex flex-col items-start justify-center gap-6 rounded-xl border border-white/30 bg-white/7 px-8 py-8 mx-8">
          <FaBoltLightning
            className="-mb-4 -rotate-20 text-amber-400"
            size={32}
          />
          <div className="mb-4">
            <h3 className="text-xl font-bold">
              Complete tasks lightning fast!
            </h3>
            <p className="text-sm">
              Monthly Users <span className="font-bold">120k+</span>
            </p>
          </div>
          <button className="flex w-full">
            <a href="#" className="primary-btn box-shadow flex-1">
              Get Started
            </a>
          </button>
        </div>
        <div className=" hidden md:absolute bottom-20 right-0 md:flex flex-col gap-2 motion-preset-oscillate motion-duration-1000 mx-12">
          <PiMouseSimple size={21}/>
          <MdKeyboardDoubleArrowDown size={21}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
