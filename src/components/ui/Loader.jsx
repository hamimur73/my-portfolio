import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950"
    >
      <div className="text-center">

        <motion.h1
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
          className="text-6xl font-black"
        >
          <span className="text-cyan-400">
            HRS
          </span>{" "}
          <span className="text-white">
            Labs
          </span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 220 }}
          transition={{
            duration: 1.6,
          }}
          className="mx-auto mt-8 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
          }}
          className="mt-6 tracking-[6px] text-slate-400 uppercase"
        >
          Initializing Portfolio...
        </motion.p>

      </div>
    </motion.div>
  );
}

export default Loader;