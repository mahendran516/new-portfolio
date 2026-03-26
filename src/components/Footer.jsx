import { Icons } from "../data/Icons";
function Footer() {
  // 🔧 Replace all "#" href values with your real social profile URLs
  const socials = [
    { icon: "GitHub",    label: "GitHub",      href: "https://github.com/mahendran516",                        color: "#E2E8F0" },
    { icon: "LinkedIn",  label: "LinkedIn",    href: "https://www.linkedin.com/in/mahendran-p-7539912aa/",                        color: "#0A66C2" },
    { icon: "Twitter",   label: "Twitter / X", href: "#",                        color: "#1D9BF0" },
    { icon: "Instagram", label: "Instagram",   href: "#",                        color: "#E1306C" },
    { icon: "Email",     label: "Email",       href: "mahi87331@gmail.com", color: "#818CF8" },
  ];

  return (
    <footer id="contact" className="py-16 relative overflow-hidden"
      style={{ background: "#030308", borderTop: "1px solid rgba(99,102,241,0.15)" }}>

      {/* Glowing top edge line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #6366F1, transparent)" }} />

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Logo */}
        <div className="text-2xl font-black mb-3"
          style={{
            fontFamily: "'Space Mono', monospace",
            background: "linear-gradient(135deg, #818CF8, #A78BFA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          &lt;MAHENDRAN&gt;
        </div>

        <p className="text-slate-600 text-sm mb-10" style={{ fontFamily: "'Space Mono', monospace" }}>
          MERN Stack Developer · Fresher · Open to Work
        </p>

        {/* Social icon row */}
        <div className="flex items-center justify-center gap-5 mb-10">
          {socials.map((social) => {
             const Icon = Icons[social.icon];
            return (
              // "group" on parent lets us use group-hover on children
              <a key={social.label} href={social.href} aria-label={social.label}
                className="group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)" }}>

                {/* Icon — changes to brand color on hover via JS event handlers */}
                <div className="w-5 h-5 transition-all duration-300" style={{ color: "#64748B" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = social.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}>
                 <Icon/>
                </div>

                {/* Tooltip — opacity-0 hidden by default, group-hover:opacity-100 shown on hover */}
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none"
                  style={{
                    background: "rgba(0,0,0,0.8)", color: "#CBD5E1",
                    fontFamily: "'Space Mono', monospace",
                    border: "1px solid rgba(99,102,241,0.3)",
                  }}>
                  {social.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Divider line */}
        <div className="h-px mb-8"
          style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)" }} />

        {/* Copyright row */}
        <div className=" text-xs text-slate-700"
          style={{ fontFamily: "'Space Mono', monospace" }}>
          <span>© 2026 MAHENDRAN. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer