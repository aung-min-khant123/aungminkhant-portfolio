import React from "react";

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <div className="bg-(--bg-default)/70 backdrop-blur-md border border-(text-default)]/20 rounded-3xl p-6 md:p-10">

        {/* Title */}
        <h1 className="text-center text-3xl font-extrabold font-mono mb-6">
          About <span className="text-cyan-600 font-normal">Me</span>
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base font-serif text-(--text-muted) leading-relaxed mb-8">
          I am a Junior Frontend developer from Myanmar who is passionate about
          learning and building modern web applications. I have experience with
          HTML, CSS, JavaScript, and React.js, and I enjoy creating clean,
          responsive, and user-friendly interfaces. I am continuously improving
          my skills by practicing, building personal projects, and learning new
          frontend technologies. I am motivated to grow as a developer and hope
          to contribute to real-world projects while gaining more professional
          experience.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Info */}
          <div className="space-y-6">

            {/* Education */}
            <div>
              <h2 className="text-xl font-bold font-mono mb-2">
                Education
              </h2>

              <div className="w-24 h-0.5 bg-cyan-600 mb-3"><div className="w-12 h-0.5 bg-(--text-muted)"></div></div>

              <p className="font-mono text-sm text-(--text-muted)">
                2017 - 2020
              </p>
              <p className="font-mono font-semibold">
                Computer Science
              </p>
              <p className="font-mono text-sm text-(--text-muted)">
                University of Computer Studies, Mandalay
              </p>
            </div>

            {/* Personal Info */}
            <div className="grid sm:grid-cols-2 gap-6 font-mono text-sm">
              <p>
                Name:{" "}
                <span className="text-cyan-500">Aung Min Khant</span>
              </p>
              <p>
                Age:{" "}
                <span className="text-cyan-500">24 years</span>
              </p>
              <p>
                Email:{" "}
                <span className="text-(--text-muted)">
                  aungminnk96@gmail.com
                </span>
              </p>
              <p>
                Location:{" "}
                <span className="text-(--text-muted)">
                  Hanoi, Vietnam
                </span>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center ">
            <img
              src="/images/myphoto.png"
              alt="profile"
              className=" w-48 h-48 md:w-72 md:h-72 rounded-full
                         border border-(--text-default)/20
                         bg-(--text-default)/5
                         shadow-2xl shadow-var(--text-muted)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
