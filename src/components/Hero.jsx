import { useEffect, useState } from "react"
import { Icons } from "../data/Icons";

function Hero() {
  
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  // Typewriter state
  const roles = ["MERN Stack Developer", "React Enthusiast", "Full-Stack Fresher", "Open Source Learner"];
  const [roleIdx, setRoleIdx]     = useState(0);    // which role we're on
  const [displayed, setDisplayed] = useState("");   // text currently shown
  const [typing, setTyping]       = useState(true); // true=adding chars, false=deleting

  useEffect(() => {
    const currentRole = roles[roleIdx];
    if (typing) {
      if (displayed.length < currentRole.length) {
        // Add one character every 60ms
        const t = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        // Wait 1.8s then start deleting
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        // Remove one character every 35ms
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        // Move to next role and start typing
        setRoleIdx((roleIdx + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #050510 0%, #0D0D2B 50%, #0A0A20 100%)" }}>

      {/* Grid background — uses repeating CSS gradients */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

      {/* Decorative glowing orbs */}
      <div className="absolute rounded-full blur-3xl opacity-20"
        style={{ width: 600, height: 600, left: "-10%", top: "10%", background: "radial-gradient(circle, #6366F1, transparent 70%)" }} />
      <div className="absolute rounded-full blur-3xl opacity-15"
        style={{ width: 400, height: 400, right: "5%", bottom: "15%", background: "radial-gradient(circle, #8B5CF6, transparent 70%)" }} />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* "Available" status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 transition-all duration-700"
          style={{
            borderColor: "rgba(99,102,241,0.4)",
            background: "rgba(99,102,241,0.08)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-slate-400" style={{ fontFamily: "'Space Mono', monospace" }}>
            Available for opportunities
          </span>
        </div>

        {/* Name — gradient text using background-clip technique */}
        <h1 className="font-black mb-4 leading-none transition-all duration-700"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)", // responsive: min 3rem, max 7rem
            fontFamily: "'Space Mono', monospace",
            background: "linear-gradient(135deg, #E2E8F0 0%, #818CF8 50%, #A78BFA 100%)",
            WebkitBackgroundClip: "text",       // clip bg to text shape
            WebkitTextFillColor: "transparent", // make text transparent to show bg
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "150ms",
          }}>
         MAHENDRAN
        </h1>

        {/* Typewriter line */}
        <div className="flex items-center justify-center gap-2 mb-8 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transitionDelay: "300ms" }}>
          <span className="text-slate-500 text-xl">I'm a</span>
          <span className="text-xl font-bold"
            style={{ fontFamily: "'Space Mono', monospace", color: "#818CF8", minWidth: "280px", textAlign: "left" }}>
            {displayed}
            <span className="animate-pulse">
              |</span> {/* blinking cursor */}
          </span>
        </div>

        {/* Short bio */}
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-14 leading-relaxed transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transitionDelay: "450ms" }}>
          Passionate about building end-to-end web applications. From MongoDB schemas to
          React UIs — I love crafting digital experiences that are fast, accessible, and beautiful.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-3 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transitionDelay: "600ms" }}>

          {/* Primary — View Projects */}
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
              boxShadow: "0 0 30px rgba(99,102,241,0.3)",
              fontFamily: "'Space Mono', monospace", fontSize: "0.85rem",
            }}>
            View Projects ↓
          </button>

          {/* Secondary — Contact */}
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(99,102,241,0.5)",
              color: "#818CF8", background: "rgba(99,102,241,0.05)",
              fontFamily: "'Space Mono', monospace", fontSize: "0.85rem",
            }}>
            Contact Me
          </button>
        </div>

        {/* Scroll hint with bouncing arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transitionDelay: "900ms" }}>
          <span className="text-xs" style={{ fontFamily: "'Space Mono', monospace" }}>scroll</span>
          <div className="animate-bounce">
             <Icons.ChevronDown/>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero