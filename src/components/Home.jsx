import React, { useEffect, useState } from "react";

function useTypewriter(text, speed = 100, pause = 1000) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!deleting && index < text.length) {
      // typing
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, speed / 2);
    } else if (!deleting && index === text.length) {
      // pause before deleting
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && index > 0) {
      // deleting
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index - 1));
        setIndex(index - 1);
      }, speed / 2);
    } else if (deleting && index === 0) {
      // restart loop
      setDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, deleting, text, speed, pause]);

  return displayed;
}

const TECH = [
  { src: "/images/html.png", label: "HTML" },
  { src: "/images/css.png", label: "CSS" },
  { src: "/images/javascript.png", label: "JavaScript" },
  { src: "/images/react.png", label: "React" },
  { src: "/images/github.png", label: "GitHub" },
  { src: "/images/tailwindcss.png", label: "Tailwind css" },
  { src: "/images/typescript.png", label: "Typescript" },
];

function Home() {
  const role = useTypewriter("Frontend Developer", 100, 1500);
  return (
    <>
      <main className="flex justify-center">
        <section 
            id="home" className="min-h-7/12 flex items-center justify-center
    bg-(--bg-default)"
        >
          <div className="max-w-7xl mx-auto px-6 py-16 ">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-35">
              {/* LEFT: PHOTO */}
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl border border-cyan-400/20" />
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-3 border-l-3 border-cyan-400 rounded-tl-xl" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-3 border-r-3 border-indigo-400 rounded-br-xl" />
                <img
                  src="/images/myphoto.png"
                  alt="Aung Min Khant"
                  className="w-50 h-50 md:w-65 md:h-65 object-cover rounded-2xl shadow-xl border border-(--text-default)/5"
                />

                {/* Available badge */}
                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-0.5 py-0.5 rounded-full w-50 text-center animate-bounce [animation-duration:3s]
            bg-(--bg-default) text-black 
             dark:text-green-400 border border-cyan-200"
                >
                  <h3 className="text-sm tracking-widest ">
                    ● Available for work
                  </h3>
                </div>

                {/* Small icon */}
                <img
                  src="/images/programmer.gif"
                  alt="icon"
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-xl border-2 border-cyan-400 p-1"
                />
              </div>

              {/* RIGHT: CONTENT */}
              <div className="flex-1 max-w-xl text-center lg:text-left">
                {/* HELLO TAG */}
                <div
                  className="inline-block px-3 py-1 text-xs tracking-widest uppercase rounded-full mb-6
            bg-cyan-100 text-cyan-600
            dark:bg-cyan-400/10 dark:text-cyan-400"
                >
                  ✦ Hello World
                </div>

                {/* NAME */}
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                  Aung Min Khant
                </h1>

                {/* ROLE */}
                <h2 className="text-xl md:text-2xl font-semibold text-(--text-default) font-mono mb-4">
                  {role}
                  <span className="ml-1 animate-pulse text-cyan-400">|</span>
                </h2>

                {/* DESCRIPTION */}
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  I craft responsive, accessible interfaces using modern web
                  technologies. Passionate about turning designs into fast,
                  delightful experiences — one component at a time.
                </p>

                {/* BUTTONS */}
                <div className="flex gap-4 justify-center lg:justify-start mb-8">
                  <button
                    className="px-6 py-2 rounded-xl text-white 
              bg-linear-to-r from-cyan-400 to-indigo-500 
              hover:scale-105 transition"
                  >
                    View Projects →
                  </button>

                  <button
                    className="px-6 py-2 rounded-xl border 
              border-gray-300 dark:border-gray-600 
              hover:scale-105 transition"
                  >
                    Download CV
                  </button>
                </div>

                {/* TECH STACK */}
                <div>
                  <p className="text-xs tracking-widest text-gray-500 mb-3">
                    TECH STACK
                  </p>

                  <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                    {TECH.map((tech) => (
                      <div
                        key={tech.label}
                        className="flex flex-col items-center gap-1 group"
                      >
                        <div
                          className="w-30 h-20 rounded-xl 
                    bg-white shadow 
                    dark:bg-slate-800 border border-gray-200 dark:border-gray-700
                    flex items-center justify-center
                    group-hover:scale-110 transition"
                        >
                          <img
                            src={tech.src}
                            alt={tech.label}
                            className="w-30 h-20"
                          />
                        </div>
                        <span className="text-[10px] text-gray-500 group-hover:text-cyan-400">
                          {tech.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
