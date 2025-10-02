const Features = () => {
  return (
    <section className="mx section container">
      <h2 className="heading-md mb-12">Featues on the Table</h2>
      <div class="parent grid grid-cols-6 grid-rows-6 gap-2">
        <div class="div1 col-span-2 row-span-4 bg-blue-950 p-6">
          <h3 className="subtitle">AI helps users set priorities</h3>
        </div>
        <div class="div2 col-span-2 col-start-3 row-span-3 bg-blue-950 p-6"></div>
        <div class="div3 col-span-2 col-start-5 row-span-2 bg-blue-950 p-6">
          <h3 className="subtitle text-center">Easy, Fast</h3>
        </div>
        <div class="div4 col-span-2 col-start-5 row-span-4 row-start-3 bg-blue-950 p-6"></div>
        <div class="div6 col-span-2 col-start-3 row-span-3 row-start-4 bg-blue-950 p-6"></div>
        <div class="div8 col-span-2 row-span-2 row-start-5 bg-blue-950 p-6"></div>
      </div>
    </section>
  );
}

export default Features