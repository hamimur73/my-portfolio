import { motion } from "framer-motion";

const particles = Array.from({ length: 20 });

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Gradient */}

      <div className="absolute inset-0 bg-[#030712]" />

      {/* Glow */}

      <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />

      {/* Floating Particles */}

      {particles.map((_, i) => (

        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400/20"
          style={{
            width: Math.random() * 8 + 3,
            height: Math.random() * 8 + 3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      ))}

    </div>
  );
}

export default Background;