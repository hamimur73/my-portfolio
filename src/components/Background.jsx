function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Main Background */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-500/20 blur-[150px]" />
    </div>
  );
}

export default Background;