import { useEffect, useState } from "react";
import hero from "../data/hero";

function Terminal() {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    const lines = hero.terminal;
    let index = 0;

    const interval = setInterval(() => {
      setDisplay((prev) => [...prev, lines[index]]);
      index++;

      if (index >= lines.length) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-900/80 shadow-2xl shadow-cyan-500/10">

      {/* Terminal Header */}

      <div className="flex items-center gap-2 border-b border-cyan-500/20 px-5 py-3">

        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>

        <span className="ml-4 text-sm text-slate-400">
          hrs-os-terminal
        </span>

      </div>

      {/* Terminal Body */}

      <div className="min-h-[320px] p-6 font-mono text-green-400">

        {display.map((line, index) => (
          <p key={index} className="mb-2">
            {line}
          </p>
        ))}

        <span className="animate-pulse">▋</span>

      </div>

    </div>
  );
}

export default Terminal;