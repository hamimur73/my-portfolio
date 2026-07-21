import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] h-1 origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
      style={{
        scaleX,
        width: "100%",
      }}
    />
  );
}

export default ScrollProgress;