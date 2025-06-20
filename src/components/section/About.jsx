import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "EJS",
    "React"
  ];

  const backendSkills = ["Node.js","MySQL", "MongoDB"];

  const lang =["C","C++","Java","Python",];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-4 sm:p-6 md:p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

              <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all items-center">
                <h3 className="text-xl font-bold mb-4"> Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {lang.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

               

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8">
            <div className="p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong className="font-bold mb-8 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent"> B.tech in Information Science and Engineering </strong> -University of Visvesvaraya College of Engineering
                  (2022-2026)
                </li>
                <li>
                 <span className="font-bold mb-8 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">Relevant Coursework:</span>  Data Structures, Web Development, Database management system , Computer Networks
                </li>
              </ul>
            </div>
            <div className="p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Activities </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold font-bold mb-8 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent" >
                    {" "}
                   SAP Labs Young Upstart Entrepreneurial Design Thinking Workshop 2.0{" "}
                  </h4>
                  <p>
                   solutions, applying structured problem-solving methodologies
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold font-bold mb-8 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                    {" "}
                    Hackathon Winner- Securehack: 24-hour National Level Cyber Security Hackathon{" "}
                  </h4>
                  <p>
                    national-level hackathon on gamified cybersecurity learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};