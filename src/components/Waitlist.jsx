import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Waitlist = () => {
  return (
    <section id="waitlist" className="section mx relative container isolate rounded-2xl bg-dark2 bg-[url(/waitlistbg.png)] bg-cover bg-right py-12">
      <div class="absolute inset-0 -z-1 bg-black/30 backdrop-blur-xs "></div>
      <div className="">
        <div className="flex-center mb-12 flex-col gap-1 text-center">
          <Badge variant="default">MileStack.</Badge>
          <h2 className="heading-xl">Join The Waitlist Now</h2>
          <p className="description text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            nesciunt temporibus animi!
          </p>
        </div>

        <form action="" className="flex-center flex-col gap-2 md:flex-row">
          <Input placeholder="Enter your Email" />
          <button className="primary-btn box-shadow" type="submit">
            Join Waitlist
          </button>
        </form>
      </div>
    </section>
  );
};

export default Waitlist;
