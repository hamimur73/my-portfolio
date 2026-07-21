import Reveal from "../ui/Reveal";
import timeline from "../../data/timeline";

function Timeline() {
  return (
    <section id="timeline" className="section">
      <div className="container-custom">

        <Reveal>
          <div className="mb-16 text-center">

            <p className="section-subtitle">
              MY JOURNEY
            </p>

            <h2 className="section-title">
              Education & Career Timeline
            </h2>

          </div>
        </Reveal>

        <div className="relative mx-auto max-w-5xl">

          {/* Center Line */}

          <div className="absolute left-4 top-0 h-full w-1 rounded-full bg-cyan-500/20 md:left-1/2 md:-translate-x-1/2"></div>

          {timeline.map((item, index) => (

            <Reveal key={item.id}>

              <div
                className={`relative mb-12 flex w-full ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* Dot */}

                <div className="absolute left-4 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-cyan-400 md:left-1/2"></div>

                {/* Card */}

                <div
                  className={`glass-card ml-12 w-full p-6 md:ml-0 md:w-[45%] ${
                    index % 2 === 0
                      ? "md:mr-auto"
                      : "md:ml-auto"
                  }`}
                >

                  <span className="mb-2 inline-block rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-semibold text-cyan-400">
                    {item.year}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-medium text-cyan-400">
                    {item.organization}
                  </p>

                  <p className="mt-4 leading-7 text-slate-400">
                    {item.description}
                  </p>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Timeline;