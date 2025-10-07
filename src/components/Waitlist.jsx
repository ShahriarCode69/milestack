import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Waitlist = () => {
  return (
    <section
      id="waitlist"
      className="section mx relative isolate container rounded-2xl bg-dark2 bg-[url(/backgrounds/waitlistbg.webp)] bg-cover bg-right py-12"
    >
      <div class="absolute inset-0 -z-1 bg-black/30 backdrop-blur-xs"></div>
      <div className="">
        <div className="flex-center mb-12 flex-col gap-1 text-center">
          <Badge variant="default">MileStack.</Badge>
          <h2 className="heading-xl">Join The Waitlist Now</h2>
          <p className="description text-center">
            Don’t miss out! Join our waitlist now and be among the first to
            supercharge your task management experience.
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
