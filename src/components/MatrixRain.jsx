import { useEffect, useState } from "react";

function MatrixRain() {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const chars = "010101101001101010100110101010101";

    const createColumns = () => {
      const total = Math.floor(window.innerWidth / 25);

      const arr = Array.from({ length: total }, (_, i) => ({
        id: i,
        left: i * 25,
        duration: Math.random() * 8 + 8,
        delay: Math.random() * 10,
        text: Array.from({ length: 40 }, () =>
          chars[Math.floor(Math.random() * chars.length)]
        ).join(""),
      }));

      setColumns(arr);
    };

    createColumns();

    window.addEventListener("resize", createColumns);

    return () => window.removeEventListener("resize", createColumns);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-40">
      {columns.map((col) => (
        <div
          key={col.id}
          className="absolute text-green-500/20 font-mono text-sm whitespace-pre leading-5 animate-matrix"
          style={{
            left: `${col.left}px`,
            animationDuration: `${col.duration}s`,
            animationDelay: `${col.delay}s`,
          }}
        >
          {col.text}
        </div>
      ))}
    </div>
  );
}

export default MatrixRain;