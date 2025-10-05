const Features = () => {
  return (
    <section id="features" className="mx section container">
      <h2 className="heading-xl mb-12">Featues on the Table</h2>

      <div class="grid auto-rows-[85px] grid-cols-1 gap-2 md:grid-cols-6 lg:grid-cols-8">
        <div class="group relative col-span-1 row-span-3 overflow-hidden rounded-lg bg-dark2 p-4 md:col-span-3 lg:col-span-3">
          <div class="absolute top-15 left-0 z-0 h-full w-full bg-[url(/backgrounds/feature-4.png)] bg-center bg-no-repeat transition-all duration-700 ease-in-out group-hover:left-0 group-hover:group-hover:drop-shadow-[0_0_20px] group-hover:drop-shadow-blue-500 md:left-44"></div>
          <h3 class="subtitle z-10">Automate repetitive work.</h3>
        </div>

        <div class="relative col-span-1 row-span-2 flex items-center justify-center overflow-hidden rounded-lg bg-dark2 bg-[url(/backgrounds/feature-bg.webp)] bg-cover bg-center bg-no-repeat p-4 md:col-span-3 md:row-span-2 lg:col-span-3">
          <div class="absolute inset-0 bg-black/20"></div>
          <h3 class="subtitle z-20 text-center">End-to-End Encryption</h3>
        </div>

        <div class="relative group col-span-1 row-span-3 overflow-hidden rounded-lg bg-dark2 p-4 md:col-span-2 md:row-span-5 lg:col-span-2">
          <div class="absolute top-15 left-0 z-0 h-full w-full bg-[url(/backgrounds/feature-2.png)] bg-center bg-no-repeat transition-all duration-700 ease-in-out group-hover:rotate-360 group-hover:group-hover:drop-shadow-[0_0_20px] group-hover:drop-shadow-blue-500"></div>
          <h3 class="subtitle z-10">AI helps users set priorities</h3>
        </div>

        <div class="group relative col-span-1 row-span-3 overflow-hidden rounded-lg bg-dark2 p-4 md:col-span-3 md:row-span-3 lg:col-span-3">
          <div class="absolute top-15 left-0 z-0 h-full w-full bg-[url(/backgrounds/feature-3.png)] bg-center bg-no-repeat transition-all duration-700 ease-in-out group-hover:left-0 group-hover:group-hover:drop-shadow-[0_0_20px] group-hover:drop-shadow-blue-500 md:left-45"></div>
          <h3 class="subtitle z-10">Real-Time Sync Across Devices</h3>
        </div>

        <div class="relative col-span-1 row-span-2 flex items-center justify-center overflow-hidden rounded-lg bg-dark2 bg-[url(/backgrounds/feature-bg.webp)] bg-cover bg-center bg-no-repeat p-4 md:col-span-3 md:row-span-2 lg:col-span-3">
          <div class="absolute inset-0 bg-black/20"></div>
          <h3 class="subtitle z-20 text-center">Custom Workflows</h3>
        </div>
      </div>
    </section>
  );
};

export default Features;
