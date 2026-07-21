import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useActiveSection from "../hooks/useActiveSection";

const links = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Timeline", href: "#timeline", id: "timeline" },
  { name: "Contact", href: "#contact", id: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex h-20 items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          className="text-2xl font-black tracking-wide"
        >
          <span className="text-cyan-400">HRS</span>{" "}
          <span className="text-white">Labs</span>
        </a>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 md:flex">

          {links.map((item) => (

            <a
              key={item.id}
              href={item.href}
              className={`relative transition duration-300 ${
                activeSection === item.id
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-400"
              }`}
            >
              {item.name}

              {activeSection === item.id && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-cyan-400"></span>
              )}

            </a>

          ))}

        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-white md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="border-t border-cyan-500/20 bg-slate-950 md:hidden">

          {links.map((item) => (

            <a
              key={item.id}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 transition ${
                activeSection === item.id
                  ? "bg-cyan-500/10 text-cyan-400"
                  : "text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400"
              }`}
            >
              {item.name}
            </a>

          ))}

        </div>

      )}

    </header>
  );
}

export default Navbar;