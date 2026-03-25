
function Projects() {
  const projects = [
    {
      title: "Coffee shop Website",
      description:
        "A coffee shop website built with React and Tailwind CSS to showcase my skills, projects, and experience.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      image: "/images/coffeeshop.png",
      live: "https://amk-final-project.vercel.app/",
      github: "#",
    },
    {
      title: "Todo List App",
      description:
        "A simple todo list application with add, delete, and complete features using React state management.",
      tech: ["React", "JavaScript", "CSS"],
      image: "/images/project-todo.png",
      live: "#",
      github: "#",
    },
    {
      title: "Weather App",
      description:
        "A weather application that fetches real-time weather data using an API and displays results based on city search.",
      tech: ["JavaScript", "API", "CSS"],
      image: "/images/project-weather.png",
      live: "#",
      github: "#",
    },
  ];

  return (
    <section id="project" className="max-w-6xl mx-auto px-4 py-20">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        My Projects
      </h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        Below are some projects I have built while learning frontend development.
        These projects helped me improve my skills and gain practical experience.
      </p>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1f2937] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400 transition"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 text-sm rounded-lg bg-cyan-500 hover:bg-cyan-700 transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 text-sm rounded-lg border border-white/20 hover:border-white transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
