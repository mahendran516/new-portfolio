import { useState, useEffect } from "react";
import { Icons } from "../data/Icons";

function Navbar() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (section) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#070718]/80 backdrop-blur border-b border-slate-800" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1
          className="text-indigo-400 text-lg font-semibold"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          {"<Mahendran.Dev/>"}
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-slate-300">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="hover:text-indigo-400 transition"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <Icons.Close /> : <Icons.Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#070718] border-t border-slate-800">
          <ul className="flex flex-col gap-6 px-6 py-8 text-slate-300">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="hover:text-indigo-400"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;