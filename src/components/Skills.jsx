import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", logo: "/images/html.png", level: 90 },
    { name: "CSS", logo: "/images/css.png", level: 90 },
    { name: "JavaScript", logo: "/images/javascript.png", level: 80 },
    { name: "TypeScript", logo: "/images/typescript.png", level: 50 },
    { name: "React JS", logo: "/images/react.png", level: 70 },
    { name: "Tailwind CSS", logo: "/images/tailwindcss.png", level: 80 },
    { name: "GitHub", logo: "/images/github.png", level: 70 },
    { name: "Next Js", logo: "/images/nextjs.png", level:60},
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-20">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold font-mono text-center mb-4">
        My Skills as a Frontend Developer
      </h2>

      <p className="text-center text-gray-400 font-bold font-mono max-w-2xl mx-auto mb-12">
        I use modern frontend technologies to build responsive, clean, and
        user-friendly web applications. I am continuously learning and improving
        my skills by working on real projects.
      </p>

      {/* Skills List */}
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/5 p-5 rounded-xl border border-white/10"
          >
            {/* Top Row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-5">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className=" w-15 h-10 md:w-25 md:h-17 bg-(--bg-default) rounded-sm border 
                  border-(--text-default)/50 inset-shadow-sm inset-shadow-stone-500 )"
                />
                <h3 className="font-semibold font-mono">{skill.name}</h3>
              </div>

              <span className="text-sm text-cyan-700 font-mono">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-(--text-default)/40 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-500 rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
