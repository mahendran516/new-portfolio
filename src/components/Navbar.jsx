import { useEffect, useState } from "react";
import { Icons } from "../data/Icons";




function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (sectionName) => {
    document
      .getElementById(sectionName.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(5,5,16,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none", // frosted glass effect
        borderBottom: scrolled ? "1px solid rgba(99,102,241,0.2)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span
          className="text-xl font-black tracking-tighter cursor-pointer"
          style={{ fontFamily: "'Space Mono', monospace", color: "#818CF8" }}
        >
          &lt;Mahendran.Dev/&gt; {/* 🔧 Change to your name */}
        </span>

        {/* Desktop links — hidden on mobile, flex on md+ screens */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((linkName) => (
            <li key={linkName}>
              <button
                onClick={() => scrollTo(linkName)}
                className="text-sm font-medium transition-all duration-300 hover:text-indigo-400 relative group"
                style={{
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                {linkName}
                {/* Animated underline — width 100% when active, 0% otherwise */}
                <span
                  className="absolute -bottom-1 left-0 h-px bg-indigo-400 transition-all duration-300"
                  
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger / close toggle */}
        <button
          className="md:hidden text-slate-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <Icons.Close /> : <Icons.Menu />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {/* maxHeight animates between 0 (closed) and 320px (open) */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        
      >
        <ul className="px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((linkName) => (
            <li key={linkName}>
              <button
                onClick={() => scrollTo(linkName)}
                className="text-slate-300 hover:text-indigo-400 text-sm font-medium"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {linkName}
                
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
