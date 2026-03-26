import { useState } from "react";

function Projects() {

  const projects = [
    {
      title: "Gemini-AI Clone",
      description:
        "Gemini AI Clone is a full-stack AI chatbot web application built using the MERN stack that replicates the core functionality of Google’s Gemini AI. Users interact with an AI assistant through a modern chat interface powered by the Gemini API.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      color: "#FF6B35",
      accent: "#FF9F1C",
      github: "https://github.com/mahendran516/gemini-ai",
      live: "https://gemini-ai-blush-eta.vercel.app/",
      image:
        "https://github.com/mahendran516/images/blob/main/gemini.PNG?raw=true",
    },
    {
      title: "Bulk Mails",
      description:
        "Bulk Mail Sender is a MERN stack application that allows users to send personalized emails to multiple recipients simultaneously using Nodemailer. It simplifies email campaigns and mass communication.",
      tech: ["React", "Express", "MongoDB", "Nodemailer"],
      color: "#10B981",
      accent: "#34D399",
      github: "https://github.com/mahendran516/bulkmails",
      live: "https://bulkmails.vercel.app/",
      image:
        "https://github.com/mahendran516/images/blob/main/bulkmail.PNG?raw=true",
    },
    {
      title: "Blog Platform",
      description:
        "Blog Platform is a MERN stack content management application where users can create, publish, edit, and manage blog posts through a responsive interface with dynamic rendering.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      color: "#F59E0B",
      accent: "#FCD34D",
      github: "https://github.com/mahendran516/Blog",
      live: "https://blog-five-azure-86.vercel.app/home",
      image:
        "https://github.com/mahendran516/images/blob/main/blog.PNG?raw=true",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
      setAnimating(false);
    }, 350);
  };

  const back = () => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
      setAnimating(false);
    }, 350);
  };

  const p = projects[current];

  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden"
      style={{ background: "#070718" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="flex items-center gap-4 mb-16">
          <span
            className="text-indigo-400 text-sm font-bold"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            03.
          </span>

          <h2
            className="text-4xl font-black"
            style={{
              fontFamily: "'Space Mono', monospace",
              color: "#E2E8F0",
            }}
          >
            Projects
          </h2>

          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(99,102,241,0.5), transparent)",
            }}
          />
        </div>

        {/* Project Card */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(99,102,241,0.05)",
            border: `1px solid ${p.color}33`,
            boxShadow: `0 0 60px ${p.color}15`,
            opacity: animating ? 0 : 1,
            transform: animating ? "scale(0.97)" : "scale(1)",
            transition: "all 0.35s ease",
          }}
        >
          {/* Top Gradient Line */}
          <div
            className="h-1"
            style={{
              background: `linear-gradient(90deg, ${p.color}, ${p.accent})`,
            }}
          />

          {/* Content */}
          <div className="p-10 grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT - IMAGE */}
            <div className="flex justify-center md:justify-start">
              <img
                src={p.image}
                alt={p.title}
                className="w-full max-w-md rounded-xl shadow-xl object-cover"
              />
            </div>

            {/* RIGHT - CONTENT */}
            <div className="flex flex-col justify-center">

              <h3
                className="text-3xl font-black text-white mb-4"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {p.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6">
                {p.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `${p.color}18`,
                      border: `1px solid ${p.color}44`,
                      color: p.accent,
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-lg text-sm font-semibold hover:scale-105 transition"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#CBD5E1",
                  }}
                >
                  GitHub
                </a>

                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-lg text-sm font-semibold hover:scale-105 transition"
                  style={{
                    background: `linear-gradient(135deg, ${p.color}, ${p.accent})`,
                    color: "#fff",
                  }}
                >
                  Live Demo
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">

          <button
            onClick={back}
            className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition"
            style={{
              border: "1px solid rgba(99,102,241,0.4)",
              color: "#818CF8",
              background: "rgba(99,102,241,0.08)",
            }}
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {projects.map((proj, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all rounded-full"
                style={{
                  width: current === i ? "32px" : "8px",
                  height: "8px",
                  background:
                    current === i ? proj.color : "rgba(99,102,241,0.3)",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition"
            style={{
              border: "1px solid rgba(99,102,241,0.4)",
              color: "#818CF8",
              background: "rgba(99,102,241,0.08)",
            }}
          >
            →
          </button>

        </div>
      </div>
    </section>
  );
}

export default Projects;