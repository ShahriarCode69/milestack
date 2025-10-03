const Testimonials = () => {
  const users = [
    {
      id: 1,
      username: "Asiya",
      avatar: "/avatar.jpg",
      role: "CFO, Wistiq",
      review:
        "This tool has completely streamlined my financial reporting process. What used to take hours now gets done in minutes, and I can’t imagine going back.",
      image: "/testimonial2.png",
    },
    {
      id: 2,
      username: "Musaib",
      avatar: "/avatar.jpg",
      role: "Founder, MUSLAB",
      review:
        "Simple, efficient, and powerful. Exactly what I needed to keep my startup moving without overcomplicating things.",
    },
    {
      id: 3,
      username: "Jamil",
      avatar: "/jamilhossain.jpg",
      role: "Senior Engineer, LGED",
      review:
        "I’ve tried a lot of tools, but this one stands out for its stability and ease of use. As an engineer, I value reliability, and this has never let me down. Whether it’s day-to-day tasks or urgent project deadlines, it performs consistently. It’s a must-have in my workflow.",
    },
    {
      id: 4,
      username: "Jahid",
      avatar: "/mohammadjahid.jpg",
      role: "Senior Developer, Codifile",
      review:
        "Very helpful for keeping the team organized. I can track tasks quickly without endless emails and follow-ups.",
      image: "/testimonial1.png",
    },
    {
      id: 5,
      username: "Tawhid",
      avatar: "/tawhid.jpg",
      role: "Founder, DomainKini",
      review:
        "Honestly, I didn’t expect it to make such a difference. But once I started using it, my productivity shot up. Now my whole team depends on it to keep things in sync.",
			},
			{
				id: 6,
				username: "Ahnaf",
				avatar: "/ahnaf.jpg",
				role: "Developer, Desicoins",
				review:
        "Clean interface and very intuitive. As a developer, I appreciate tools that don’t waste my time with clutter. This one just works.",
				image: "/testimonial3.png",
			},
    {
      id: 7,
      username: "Nafiz",
      avatar: "/nafiz.jpg",
      role: "COO, naflia",
      review:
        "Our operations used to feel scattered across different apps. This tool brought everything together. Now communication is smoother, tasks are clearer, and deadlines aren’t slipping through the cracks anymore.",
    },
    {
      id: 8,
      username: "Jakia",
      avatar: "/avatar.jpg",
      role: "Founder, Cosmimatile",
      review:
        "I love how flexible it is. I can adapt it to my own workflow instead of forcing myself to fit into the tool. That’s rare, and it’s why I keep recommending it to other founders.",
    },
  ];
  return (
    <section className="mx section container">
      <h2 className="heading-xl mb-12 text-center">
        Love from the{" "}
        <span className="inline-block -rotate-8 motion-scale-loop-105 rounded-xl bg-blue-600 px-2 pb-2 motion-duration-1000">
          users
        </span>
      </h2>
      <div className="relative columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-8 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="break-inside-avoid rounded-lg border-white/30 bg-blue-950 px-6 py-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={user.avatar}
                alt={`${user.avatar} profile picture`}
              />
              <div>
                <h3 className="flex items-center gap-1 text-lg font-bold uppercase">
                  {user.username}
                </h3>
                <p className="capitalize">{user.role}</p>
              </div>
            </div>
            <p className="description mb-4">{user.review}</p>
            {user.image && (
              <img
                src={user.image}
                alt=""
                className="aspect-square h-full w-full rounded-xl object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
