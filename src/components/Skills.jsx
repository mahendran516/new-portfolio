import { useState, useEffect } from "react";
import { Icons } from "../data/Icons";

function Skills() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const skills = [
    { name: "MongoDB", icon: "MongoDB", color: "#47A248", level: 75 },
    { name: "Express.js", icon: "Express", color: "#888888", level: 70 },
    { name: "React.js", icon: "React", color: "#61DAFB", level: 85 },
    { name: "Node.js", icon: "Node", color: "#339933", level: 78 },
    { name: "JavaScript", icon: "JavaScript", color: "#F7DF1E", level: 82 },
    { name: "Tailwind CSS", icon: "Tailwind", color: "#06B6D4", level: 88 },
    { name: "REST APIs", icon: "REST", color: "#FF6B35", level: 72 },
    { name: "Git & GitHub", icon: "Git", color: "#F05032", level: 76 },
  ];

  return (
    <section id="skills" className="py-32 bg-[#050510]">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="flex items-center gap-4 mb-16">

          <span className="text-indigo-400 text-sm font-bold">
            02.
          </span>

          <h2 className="text-4xl font-black text-slate-200">
            Tech Stack
          </h2>

          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500 to-transparent"/>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              loaded={loaded}
            />
          ))}

        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index, loaded }) {

  const [hovered, setHovered] = useState(false);
  const IconComponent = Icons[skill.icon];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-xl p-6 transition-all duration-initial"
      style={{
        background: hovered
          ? "rgba(99,102,241,0.15)"
          : "rgba(255,255,255,0.03)",

        border: `1px solid ${hovered ? skill.color : "rgba(255,255,255,0.08)"}`,

        transform: hovered
          ? "translateY(-8px)"
          : "translateY(0)",

        boxShadow: hovered
          ? `0 15px 45px ${skill.color}33`
          : "none",

        transitionDelay: `${index * 80}ms`,
      }}
    >

      {/* Icon */}
      <div
        className="w-14 h-14 flex items-center justify-center mb-4 rounded-xl"
        style={{
          background: `${skill.color}15`,
          border: `1px solid ${skill.color}30`,
        }}
      >
        {IconComponent && <IconComponent />}
      </div>

      {/* Name */}
      <h3 className="text-white font-semibold mb-3 text-sm">
        {skill.name}
      </h3>

      {/* Progress Track */}
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">

        {/* Progress Fill */}
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: loaded ? `${skill.level}%` : "0%",
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
          }}
        />

      </div>

      {/* Percent */}
      <div className="text-right mt-1 text-xs"
           style={{ color: skill.color }}>
        {skill.level}%
      </div>

    </div>
  );
}

export default Skills;