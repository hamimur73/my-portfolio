import hero from "../data/hero";
import Terminal from "./Terminal";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-16 lg:grid-cols-2 lg:px-8">

        {/* Left Side */}

        <div>

          <p className="mb-4 text-lg font-medium text-cyan-400">
            {hero.greeting}
          </p>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            {hero.firstName}
            <br />

            <span className="text-cyan-400">
              {hero.lastName}
            </span>

          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-300 md:text-3xl">
            {hero.role}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            {hero.description}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href={hero.cv}
              download
              className="btn btn-primary"
            >
              {hero.buttons.primary}
            </a>

            <a
              href="#contact"
              className="btn btn-secondary"
            >
              {hero.buttons.secondary}
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <Terminal />

        </div>

      </div>
    </section>
  );
}

export default Hero;