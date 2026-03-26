import { useState, useEffect } from "react";

function About() {

  const stats = [
    { label: "Projects Built", val: 10, suffix: "+" },
    { label: "GitHub Commits", val: 50, suffix: "+" },
    { label: "Cups of Coffee", val: 300, suffix: "+" },
    { label: "Technologies", val: 12, suffix: "" },
  ];

  return (
    <section id="about" className="py-32 relative" style={{ background: "#070718" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-indigo-400 text-sm font-bold">01.</span>

          <h2 className="text-4xl font-black text-slate-200">
            About Me
          </h2>

          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500 to-transparent"/>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Hey! I'm <span className="text-indigo-400 font-semibold">MAHENDRAN</span>,
              a fresher MERN stack developer passionate about building
              clean and scalable web applications.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I recently completed my BCA and spend most of my time
              learning modern JavaScript technologies like React,
              Node.js, and MongoDB.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              I enjoy building full-stack projects and improving
              my UI/UX skills to create modern web applications.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Problem Solver", "Fast Learner", "Team Player", "Detail-Oriented"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    border: "1px solid rgba(99,102,241,0.4)",
                    color: "#818CF8",
                    background: "rgba(99,102,241,0.08)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                val={stat.val}
                suffix={stat.suffix}
                delay={i * 200}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}


function StatCard({ label, val, suffix, delay }) {

  const [count, setCount] = useState(0);

  useEffect(() => {

    let start = 0;

    const timer = setInterval(() => {

      start += Math.ceil(val / 40);

      if (start >= val) {
        start = val;
        clearInterval(timer);
      }

      setCount(start);

    }, 30);

    return () => clearInterval(timer);

  }, [val]);

  return (
    <div
      className="rounded-xl p-6 text-center transition-all duration-300 hover:scale-105"
      style={{
        background: "rgba(99,102,241,0.06)",
        border: "1px solid rgba(99,102,241,0.2)",
      }}
    >

      {/* NUMBER */}
      <div
        className="text-4xl font-black mb-2"
        style={{
          background: "linear-gradient(135deg,#818CF8,#A78BFA)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {count}{suffix}
      </div>

      {/* LABEL */}
      <div className="text-slate-500 text-sm">
        {label}
      </div>

    </div>
  );
}

export default About;