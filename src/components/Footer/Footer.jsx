import { FaGithub, FaLinkedin, FaFacebook, FaHeart } from "react-icons/fa";
import Reveal from "../ui/Reveal";
import socials from "../../data/socials";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-500/20 bg-slate-950 py-10">

      <div className="container-custom">

        <Reveal>

          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

            <div>

              <h2 className="text-2xl font-black">
                <span className="text-cyan-400">HRS</span>{" "}
                <span className="text-white">Labs</span>
              </h2>

              <p className="mt-2 text-slate-400">
                Code • Create • Innovate
              </p>

            </div>

            <div className="flex gap-6 text-2xl">

              <a
                href={socials.github.url}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href={socials.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

              <a
                href={socials.facebook.url}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-400"
              >
                <FaFacebook />
              </a>

            </div>

          </div>

        </Reveal>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-slate-500">

          <p className="flex items-center justify-center gap-2">

            © {year} Hamimur Rahman • Built with

            <FaHeart className="text-red-500" />

            React & Tailwind CSS

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;