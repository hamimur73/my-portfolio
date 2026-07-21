import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const addHover = () => setHover(true);
    const removeHover = () => setHover(false);

    window.addEventListener("mousemove", moveCursor);

    const elements = document.querySelectorAll(
      "button, a, input, textarea"
    );

    elements.forEach((item) => {
      item.addEventListener("mouseenter", addHover);
      item.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      elements.forEach((item) => {
        item.removeEventListener("mouseenter", addHover);
        item.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}

      <motion.div
        animate={{
          x: position.x - (hover ? 20 : 10),
          y: position.y - (hover ? 20 : 10),
          width: hover ? 40 : 20,
          height: hover ? 40 : 20,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border-2 border-cyan-400"
      />

      {/* Glow */}

      <motion.div
        animate={{
          x: position.x - 120,
          y: position.y - 120,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl"
      />
    </>
  );
}

export default CustomCursor;