import { FaBoltLightning } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="h-screen w-full bg-[url(/hero-bg.png)] bg-cover bg-fixed bg-center">
      <div className="relative container h-full pt-56">
        <div className="absolute bottom-20">
          <h1 className="heading-xl">
            Manage Your Task <br /> Efficiently
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            sequi alias blanditiis?
          </p>
        </div>
        <div className="backdrop-blur-base absolute top-45 right-0 inline-flex flex-col items-start justify-center gap-12 border bg-white/10 px-8 py-8">
          <FaBoltLightning />
          <div>
            <h3 className="text-2xl font-bold">
              Complete tasks lightning fast!
            </h3>
            <p>
              Monthly Users <span className="font-bold">120k+</span>
            </p>
          </div>
          <button>
            <a href="#" className="primary-btn box-shadow mx-0">
              Get Started
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
