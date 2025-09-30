import { ChartAreaGradient } from "@/components/ui/ChartAreaGradient"

const About = () => {
  const aboutDatas = [
    { id: 1, heading: "2025", label: "year founded" },
    { id: 2, heading: "97%", label: "employee retention rate" },
    { id: 3, heading: "$0", label: "VC funds raised" },
  ];

  return (
    <section className="section mx container">
      <h1 className="heading-md mb-4">Who We Are?</h1>
      <ChartAreaGradient />
      <h2 className="subtitle mb-4 text-right">
        93% better <br />
        Than Other Tools
      </h2>
      <p className="description mb-20 ml-auto text-right">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
        maiores. Optio minus quas nobis accusantium asperiores
      </p>
      <div className="mx-auto grid max-w-xs grid-cols-1 grid-rows-2 gap-6 sm:max-w-sm sm:grid-cols-2 md:max-w-5xl md:grid-cols-6 md:grid-rows-2 md:gap-[27px]">
        {aboutDatas.map((data) => (
          <span
            key={data.id}
            className="col-span-1 grid motion-blur-in-[30px] motion-opacity-in-[0%] motion-translate-x-in-[1%] motion-translate-y-in-[119%] place-items-center rounded-lg bg-blue-950 p-4 sm:col-span-2 md:col-span-2 md:row-span-2"
          >
            <h3 className="heading-md">{data.heading}</h3>
            <p>{data.label}</p>
          </span>
        ))}
      </div>
    </section>
  );
}

export default About