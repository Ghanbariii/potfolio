import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  HiHome,
  HiMail,
  HiArrowRight,
  HiUser,
  HiCode,
  HiMenu,
  HiX,
} from "react-icons/hi";
import { FaJs, FaReact, FaGitAlt } from "react-icons/fa";
// import photo from "./avatar.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { useState } from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white  relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20"></div>
      <div className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl bottom-20"></div>

      <img
        src="/avatar.svg"
        alt="Mohsen Ghanbari"
        className="w-40 h-40 rounded-full mb-6 relative z-10 neon-border"
        style={{ background: "#1e3a5f" }}
      />

      <h1 className="text-3xl md:text-5xl font-bold text-blue-400 relative z-10 tracking-wide animate-fadeUp delay-200">
        Mohsen Ghanbari
      </h1>
      <h2 className="text-xl text-purple-400 mt-3 relative z-10 animate-fadeUp delay-300">
        Front-End Developer in Progress
      </h2>
      <p className="text-gray-500 mt-4 text-center max-w-md relative z-10 animate-fadeUp delay-400">
        Passionate about front-end development and always eager to learn new
        technologies. Currently mastering React and building real-world
        projects.
      </p>
      <div className="ticker-wrapper w-full overflow-hidden mt-12 relative z-10 py-6 animate-fadeUp delay-500">
        <div className="animate-scroll">
          {[...Array(4)].map((_, repeatIndex) => (
            <div key={repeatIndex} className="flex gap-20 shrink-0">
              {[
                {
                  icon: <FaReact size={64} className="text-cyan-400" />,
                  name: "React",
                },
                {
                  icon: <SiNextdotjs size={64} className="text-white" />,
                  name: "Next.js",
                },
                {
                  icon: <FaJs size={64} className="text-yellow-400" />,
                  name: "JavaScript",
                },
                {
                  icon: <SiTypescript size={64} className="text-blue-500" />,
                  name: "TypeScript",
                },
                {
                  icon: <SiTailwindcss size={64} className="text-teal-400" />,
                  name: "Tailwind",
                },
                {
                  icon: <FaGitAlt size={64} className="text-orange-500" />,
                  name: "Git",
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 text-gray-400 opacity-50 hover:opacity-100 hover:[animation-play-state:paused] transition-all duration-300 px-6 cursor-pointer group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-sm tracking-wider">{skill.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-8 relative z-10">
        <a
          href="/contact"
          className="flex items-center gap-2 bg-blue-500/20 border border-blue-500 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          Contact Me <HiArrowRight size={18} />
        </a>
      </div>
      <p className="text-blue-400/50 text-sm mt-6 italic relative z-10 animate-fadeUp delay-400">
        "Turning coffee into code since 2024."
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-16 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 right-20"></div>
      <div className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl bottom-20 left-20"></div>

      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 animate-fadeUp delay-100">
          Contact Me
        </h1>
        <p className="text-gray-500 mb-12 animate-fadeUp delay-200">
          Let's get in touch!
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="https://linkedin.com/in/mohsenghanbarii"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://x.com/mohsenghanbarii"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gray-900 border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            <FaXTwitter size={20} /> X
          </a>
        </div>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 md:px-8 py-16 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 right-20"></div>
      <div className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl bottom-20 left-20"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 animate-fadeUp delay-100">
          About Me
        </h1>
        <p className="text-gray-500 mb-12 animate-fadeUp delay-200">
          A little bit about who I am
        </p>

        <p className="text-gray-300 leading-relaxed mb-16 animate-fadeUp delay-300">
          I'm Mohsen, a self-taught front-end developer based in Iran,
          passionate about building beautiful and functional web experiences.
          I'm currently mastering React and working toward my goal of becoming a
          professional developer in Germany.
        </p>

        <h2 className="text-2xl font-bold text-purple-400 mb-6 animate-fadeUp delay-400">
          Skills
        </h2>
        <h2 className="text-2xl font-bold text-purple-400 mb-6 animate-fadeUp delay-400">
          Skills
        </h2>
        <div className="flex flex-col gap-6 mb-16">
          {[
            {
              name: "JavaScript",
              icon: <FaJs size={20} className="text-yellow-400" />,
              percent: 70,
            },
            {
              name: "React",
              icon: <FaReact size={20} className="text-cyan-400" />,
              percent: 60,
            },
            {
              name: "Tailwind CSS",
              icon: <SiTailwindcss size={20} className="text-teal-400" />,
              percent: 75,
            },
            {
              name: "Git",
              icon: <FaGitAlt size={20} className="text-orange-500" />,
              percent: 60,
            },
          ].map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center gap-2 mb-2">
                {skill.icon}
                <span className="text-blue-300 text-sm tracking-wider">
                  {skill.name}
                </span>
                <span className="ml-auto text-purple-400 text-sm">
                  {skill.percent}%
                </span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div
                  className="h-2 rounded-full progress-bar"
                  style={{
                    "--progress-width": `${skill.percent}%`,
                    width: `${skill.percent}%`,
                    boxShadow: "0 0 10px #a855f7",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-purple-400 mb-6">Journey</h2>
        <div className="flex flex-col gap-4">
          {[
            { year: "2024", text: "Started learning HTML & CSS" },
            { year: "2024", text: "Learned JavaScript fundamentals" },
            { year: "2025", text: "Started React & Tailwind" },
            { year: "2025", text: "Building real-world projects" },
          ].map((item) => (
            <div key={item.text} className="flex gap-4 items-start">
              <span className="text-blue-400 font-bold w-12">{item.year}</span>
              <div className="flex-1 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-3 text-gray-300">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "My personal portfolio built with React and Tailwind CSS.",
      tags: ["React", "Tailwind", "Git"],
      status: "Completed",
      github: "https://github.com/Ghanbariii/Claude",
    },
    {
      title: "React Practice",
      description:
        "Learning React fundamentals — routing, props, useState and more.",
      tags: ["React", "JavaScript"],
      status: "Completed",
      github: "https://github.com/Ghanbariii",
    },
    {
      title: "Coming Soon...",
      description: "Next project is on the way. Stay tuned!",
      tags: [],
      status: "Planned",
      github: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-16 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-20 left-20"></div>
      <div className="absolute w-72 h-72 bg-blue-500/10 rounded-full blur-3xl bottom-20 right-20"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 animate-fadeUp delay-100">
          Projects
        </h1>
        <p className="text-gray-500 mb-12 animate-fadeUp delay-200">
          Things I've built so far
        </p>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400 transition"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold text-white">
                  {project.title}
                </h2>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    project.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : project.status === "In Progress"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-gray-500/20 text-gray-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition text-sm"
                  >
                    <FaGitAlt size={16} /> View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <nav className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-b border-blue-500/20 flex justify-between items-center px-4 md:px-8 py-4 z-50 sticky top-0">
        {" "}
        <div className="flex items-center gap-3 transition-all duration-300">
          <img
            src="/avatar.svg"
            alt="MG"
            className="w-8 h-8 rounded-full neon-border"
            style={{ background: "#1e3a5f" }}
          />
          <h1 className="text-lg font-bold text-blue-400 tracking-wider neon-text ">
            &lt;/MG&gt;
          </h1>
        </div>
        {/* همبرگری - فقط موبایل */}
        <button
          className="md:hidden text-gray-400 hover:text-blue-400 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
        {/* لینک‌ها - دسکتاپ */}
        <div className="nav-animate hidden md:flex gap-8 text-sm">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
          >
            <HiHome size={16} /> Home
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
          >
            <HiUser size={16} /> About
          </Link>
          <Link
            to="/projects"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
          >
            <HiCode size={16} /> Projects
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
          >
            <HiMail size={16} /> Contact
          </Link>
        </div>
        {/* منو موبایل */}
        {menuOpen && (
          <div className="menu-animate absolute top-full left-0 right-0 bg-gray-950 border-b border-blue-500/30 flex flex-col gap-4 px-8 py-6 md:hidden">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
            >
              <HiHome size={16} /> Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
            >
              <HiUser size={16} /> About
            </Link>
            <Link
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
            >
              <HiCode size={16} /> Projects
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
            >
              <HiMail size={16} /> Contact
            </Link>
          </div>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="bg-gray-950 border-t border-blue-500/20 text-center py-6 text-gray-500 text-sm">
        © 2025 Mohsen Ghanbari — Built with React & Tailwind
      </footer>
    </BrowserRouter>
  );
}

export default App;
