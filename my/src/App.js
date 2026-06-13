// import photo from "./photo.jpg";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiHome, HiMail, HiArrowRight, HiUser } from "react-icons/hi";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import photo from "./notion-avatar-1781359933826.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20"></div>
      <div className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl bottom-20"></div>

      <img
        src={photo}
        alt="Mohsen Ghanbari"
        className="w-40 h-40 rounded-full object-cover border-4 border-blue-400 mb-6 relative z-10 shadow-lg shadow-blue-500/50"
      />

      <h1 className="text-5xl font-bold text-blue-400 relative z-10 tracking-wide">
        Mohsen Ghanbari
      </h1>
      <h2 className="text-xl text-purple-400 mt-3 relative z-10">
        Front-End Developer in Progress
      </h2>
      <p className="text-gray-500 mt-4 text-center max-w-md relative z-10">
        Passionate about front-end development and always eager to learn new
        technologies. Currently mastering React and building real-world
        projects.
      </p>
      <div className="flex gap-4 mt-8 relative z-10">
        <a
          href="/contact"
          className="flex items-center gap-2 bg-blue-500/20 border border-blue-500 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          Contact Me <HiArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
      <h1 className="text-4xl font-bold text-blue-400 mb-8">Contact Me</h1>
      <div className="flex gap-6">
        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          <FaLinkedin size={20} />
          LinkedIn
        </a>
        <a
          href="https://twitter.com/username"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-black px-6 py-3 rounded-lg hover:bg-gray-900 transition"
        >
          <FaXTwitter size={20} />X
        </a>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-16 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 right-20"></div>
      <div className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl bottom-20 left-20"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold text-blue-400 mb-2">About Me</h1>
        <p className="text-gray-500 mb-12">A little bit about who I am</p>

        <p className="text-gray-300 leading-relaxed mb-16">
          I'm Mohsen, a self-taught front-end developer based in Iran,
          passionate about building beautiful and functional web experiences.
          I'm currently mastering React and working toward my goal of becoming a
          professional developer in Germany.
        </p>

        <h2 className="text-2xl font-bold text-purple-400 mb-6">Skills</h2>
        <div className="grid grid-cols-2 gap-4 mb-16">
          {[
            {
              name: "HTML / CSS",
              icon: <FaHtml5 size={20} className="text-orange-400" />,
            },
            {
              name: "JavaScript",
              icon: <FaJs size={20} className="text-yellow-400" />,
            },
            {
              name: "React",
              icon: <FaReact size={20} className="text-blue-400" />,
            },
            {
              name: "Tailwind CSS",
              icon: <SiTailwindcss size={20} className="text-cyan-400" />,
            },
            {
              name: "Git",
              icon: <FaGitAlt size={20} className="text-orange-500" />,
            },
          ].map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-3 text-blue-300 hover:border-blue-400 transition"
            >
              {skill.icon}
              {skill.name}
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

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-gray-950 border-b border-blue-500/30 flex justify-between items-center px-8 py-4">
        <h1 className="text-xl font-bold text-blue-400 tracking-widest uppercase">
          MG
        </h1>
        <div className="flex gap-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition tracking-wider"
          >
            <HiHome size={18} /> Home
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition tracking-wider"
          >
            <HiMail size={18} /> Contact
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition tracking-wider"
          >
            <HiUser size={17} /> About
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
