import Reveal from "../ui/Reveal";
import skills from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-custom">

        <Reveal>
          <div className="mb-16 text-center">

            <p className="section-subtitle">
              MY SKILLS
            </p>

            <h2 className="section-title">
              Technical Skills
            </h2>

          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">

          {skills.map((group) => (

            <Reveal key={group.category}>

              <div className="glass-card p-8">

                <h3 className="mb-8 text-2xl font-bold text-cyan-400">
                  {group.category}
                </h3>

                <div className="space-y-6">

                  {group.items.map((skill) => (

                    <div key={skill.name}>

                      <div className="mb-2 flex items-center justify-between">

                        <span className="font-medium text-white">
                          {skill.name}
                        </span>

                        <span className="text-cyan-400">
                          {skill.level}%
                        </span>

                      </div>

                      <div className="h-3 overflow-hidden rounded-full bg-slate-800">

                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
                          style={{
                            width: `${skill.level}%`,
                          }}
                        />

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;