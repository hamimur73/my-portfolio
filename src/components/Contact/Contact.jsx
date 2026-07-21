import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import Reveal from "../ui/Reveal";
import contact from "../../data/contact";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-custom">

        <Reveal>
          <div className="mb-16 text-center">

            <p className="section-subtitle">
              {contact.subtitle}
            </p>

            <h2 className="section-title">
              {contact.title}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-slate-400">
              {contact.description}
            </p>

          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <Reveal>

            <div className="space-y-6">

              <div className="glass-card flex items-center gap-5 p-6">

                <div className="rounded-xl bg-cyan-500/10 p-4 text-2xl text-cyan-400">
                  <FaEnvelope />
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    Email
                  </h3>

                  <p className="text-slate-400">
                    {contact.email}
                  </p>

                </div>

              </div>

              <div className="glass-card flex items-center gap-5 p-6">

                <div className="rounded-xl bg-cyan-500/10 p-4 text-2xl text-cyan-400">
                  <FaPhoneAlt />
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    Phone
                  </h3>

                  <p className="text-slate-400">
                    {contact.phone}
                  </p>

                </div>

              </div>

              <div className="glass-card flex items-center gap-5 p-6">

                <div className="rounded-xl bg-cyan-500/10 p-4 text-2xl text-cyan-400">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    Location
                  </h3>

                  <p className="text-slate-400">
                    {contact.location}
                  </p>

                </div>

              </div>

              <div className="flex gap-4 pt-4">

                <a
                  href={contact.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card p-4 text-2xl transition hover:text-cyan-400"
                >
                  <FaGithub />
                </a>

                <a
                  href={contact.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card p-4 text-2xl transition hover:text-cyan-400"
                >
                  <FaLinkedin />
                </a>

                <a
                  href={contact.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card p-4 text-2xl transition hover:text-cyan-400"
                >
                  <FaFacebook />
                </a>

              </div>

            </div>

          </Reveal>

          {/* Right */}

          <Reveal>

            <form className="glass-card space-y-6 p-8">

              <h3 className="text-2xl font-bold text-white">
                {contact.form.title}
              </h3>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                {contact.form.button}
              </button>

            </form>

          </Reveal>

        </div>

      </div>
    </section>
  );
}

export default Contact;