import about from "../../data/about";
import Reveal from "../ui/Reveal";

function About() {
  return (
    <section id="about" className="section">
      <div className="container-custom">

        <Reveal>
          <div className="mb-16 text-center">

            <p className="section-subtitle">
              {about.subtitle}
            </p>

            <h2 className="section-title">
              {about.title}
            </h2>

          </div>
        </Reveal>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <Reveal>

            <div className="flex justify-center">

              <img
                src={about.image}
                alt="Hamimur Rahman"
                className="w-full max-w-md rounded-3xl border border-cyan-500/20 object-cover shadow-2xl shadow-cyan-500/10"
              />

            </div>

          </Reveal>

          {/* Right */}

          <Reveal>

            <div>

              <p className="whitespace-pre-line text-lg leading-8 text-slate-400">
                {about.description}
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">

                {/* Education */}

                <div className="glass-card min-h-[190px] rounded-2xl p-6">

                  <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                    Education
                  </h3>

                  <p className="text-lg font-semibold leading-7 text-white">
                    {about.education.degree}
                  </p>

                  <p className="mt-2 leading-7 text-slate-400">
                    {about.education.university}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    {about.education.session}
                  </p>

                </div>

                {/* Experience */}

                <div className="glass-card min-h-[190px] rounded-2xl p-6">

                  <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                    Experience
                  </h3>

                  <p className="leading-7 text-white">
                    {about.experience}
                  </p>

                </div>

                {/* Location */}

                <div className="glass-card min-h-[170px] rounded-2xl p-6">

                  <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                    Location
                  </h3>

                  <p className="leading-7 text-white">
                    {about.location}
                  </p>

                </div>

                {/* Email */}

                <div className="glass-card min-h-[170px] rounded-2xl p-6">

                  <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                    Email
                  </h3>

                  <p className="break-all leading-7 text-white">
                    {about.email}
                  </p>

                </div>

              </div>

              {/* Interests */}

              <div className="mt-12">

                <h3 className="mb-4 text-2xl font-bold text-white">
                  Interests
                </h3>

                <div className="flex flex-wrap gap-3">

                  {about.interests.map((item) => (

                    <span
                      key={item}
                      className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          </Reveal>

        </div>

        {/* Stats */}

        <Reveal>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {about.stats.map((item) => (

              <div
                key={item.label}
                className="glass-card rounded-2xl p-8 text-center"
              >

                <h3 className="text-4xl font-black text-cyan-400">
                  {item.value}
                </h3>

                <p className="mt-3 text-slate-400">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </Reveal>

      </div>
    </section>
  );
}

export default About;