import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  HiHome,
  HiMail,
  HiArrowRight,
  HiUser,
  HiCode,
  HiMenu,
  HiX,
  HiNewspaper,
} from "react-icons/hi";
import { FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import client from "./contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "blogPost", limit: 2 })
      .then((response) => setPosts(response.items))
      .catch(console.error);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white  relative overflow-hidden pt-24">
      <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20"></div>
      <div className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl bottom-20"></div>

      <img
        src="/avatar.svg"
        alt="Mohsen Ghanbari"
        className="w-28 h-28 md:w-40 md:h-40 rounded-full mb-6 relative z-10 neon-border"
        style={{ background: "#1e3a5f" }}
      />

      <h1 className="text-2xl md:text-5xl font-bold text-blue-400 relative z-10 tracking-wide animate-fadeUp delay-200">
        Mohsen Ghanbari
      </h1>
      <div className="flex items-center gap-2 mt-2 animate-fadeUp delay-300">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse pulse-glow"></span>
        <span className="text-green-400 text-sm ">Open to work</span>
      </div>
      <h2 className="text-base md:text-xl text-purple-400 mt-3 relative z-10 animate-fadeUp delay-300">
        Front-End Developer in Progress
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-4 text-center max-w-md relative z-10 animate-fadeUp delay-400">
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
      <div className="w-full max-w-3xl mt-16 relative z-10 px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center w-full">
          Latest Posts
        </h2>
        <div
          className={`w-full gap-6 ${posts.length === 1 ? "flex justify-center" : "grid grid-cols-1 md:grid-cols-2"}`}
        >
          {posts.map((post) => (
            <div
              key={post.sys.id}
              className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400 transition cursor-pointer max-w-sm w-full"
            >
              <p className="text-gray-500 text-xs mb-2">
                {new Date(post.fields.publishedDate).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  },
                )}
              </p>
              <h3 className="text-white font-bold mb-2">{post.fields.title}</h3>
              <p className="text-gray-400 text-sm">{post.fields.excerpt}</p>
              <Link
                to={`/blog/${post.fields.slug}`}
                className="text-blue-400 text-sm mt-4 hover:text-blue-300 block"
              >
                Read More →
              </Link>
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

function Contact({ isDark }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [emailError, setEmailError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    emailjs
      .send(
        "service_g6v604n",
        "template_cc43r5b",
        { from_name: name, from_email: email, message: message },
        "P-uD4Z05derwEZjzn",
      )
      .then(() => {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-16 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 right-20"></div>
      <div className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl bottom-20 left-20"></div>
      <div className="max-w-2xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 animate-fadeUp delay-100">
          Contact Me
        </h1>
        <p className="text-gray-500 mb-4 animate-fadeUp delay-200">
          Let's get in touch!
        </p>
        <p className="text-gray-400 mb-8 animate-fadeUp delay-300 leading-relaxed">
          Have a question or want to work together? Feel free to reach out
          through the form below or via my social media.
        </p>

        <div className="flex gap-4 mb-10 animate-fadeUp delay-300">
          <a
            href="https://linkedin.com/in/mohsenghanbarii"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            <FaLinkedin size={22} /> LinkedIn
          </a>
          <a
            href="https://x.com/mohsenghanbarii"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gray-900 border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            <FaXTwitter size={22} /> X
          </a>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-8 animate-fadeUp delay-400">
          <h2 className="text-xl font-bold text-purple-400 mb-6">
            Send a Message
          </h2>
          <form onSubmit={sendEmail} noValidate className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              className="bg-gray-900 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(e.target.value)) {
                  setEmailError("Please enter a valid email address");
                } else {
                  setEmailError("");
                }
              }}
              required
              className="bg-gray-900 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
            />
            {emailError && (
              <p className="text-red-400 text-sm -mt-2">{emailError}</p>
            )}
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="bg-gray-900 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition resize-none"
            />
            <button
              type="submit"
              disabled={!!emailError || !email || !name || !message}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send Message
            </button>
            {status === "success" && (
              <p className="text-green-400 text-center">Message sent! ✅</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center">
                Something went wrong. Try again! ❌
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    });

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });
  }, []);
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
        <div className="fade-in-section flex flex-col gap-6 mb-16">
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
            <div key={item.text} className="flex items-center gap-4">
              <span className="text-blue-400 font-bold w-12 shrink-0">
                {item.year}
              </span>
              <div className="flex-1 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-3 text-gray-300">
                {item.text}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-purple-500/20 border border-purple-500 text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white transition font-bold"
          >
            Download Resume
          </a>
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (loading) {
    return (
      <div className="fixed inset-0 bg-gray-950 flex flex-col items-center justify-center z-50">
        <img
          src="/avatar.svg"
          alt="MG"
          className="w-24 h-24 rounded-full neon-border animate-pulse"
          style={{ background: "#1e3a5f" }}
        />
        <p className="text-blue-400 mt-6 text-xl font-bold tracking-widest neon-text">
          &lt;/MG&gt;
        </p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <nav className="relative bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-b border-blue-500/20 flex justify-between items-center px-4 md:px-8 py-4 z-50 md:sticky md:top-0">
        {" "}
        <div className="flex items-center gap-3 transition-all duration-300">
          <img
            src="/avatar.svg"
            alt="MG"
            className="w-6 h-6 md:w-8 md:h-8 rounded-full neon-border"
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
          <Link
            to="/blog"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
          >
            <HiNewspaper size={16} /> Blog
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
            <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
            >
              <HiNewspaper size={16} /> Blog
            </Link>
          </div>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <footer className="bg-gray-950 border-t border-blue-500/20 text-center py-6 text-gray-500 text-xs md:text-sm">
        © 2025 Mohsen Ghanbari — Built with React & Tailwind
      </footer>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20"></div>
      <div className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl bottom-20"></div>

      <h1 className="text-9xl font-bold text-blue-400 relative z-10">404</h1>
      <p className="text-2xl text-purple-400 mt-4 relative z-10">
        Page Not Found
      </p>
      <p className="text-gray-500 mt-2 relative z-10">
        Looks like you got lost in the code!
      </p>
      <a
        href="/"
        className="mt-8 bg-blue-500/20 border border-blue-500 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition relative z-10"
      >
        Go Home
      </a>
    </div>
  );
}

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "blogPost" })
      .then((response) => {
        console.log("posts:", response.items);
        setPosts(response.items);
      })
      .catch((err) => console.error("error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-16 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 left-20"></div>
      <div className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl bottom-20 right-20"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 animate-fadeUp delay-100">
          Blog
        </h1>
        <p className="text-gray-500 mb-12 animate-fadeUp delay-200">
          My thoughts and experiences
        </p>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <div
              key={post.sys.id}
              className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400 transition cursor-pointer animate-fadeUp"
            >
              <p className="text-gray-500 text-xs mb-2">
                {new Date(post.fields.publishedDate).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  },
                )}
              </p>
              <h2 className="text-xl font-bold text-white mb-2">
                {post.fields.title}
              </h2>
              <p className="text-gray-400 text-sm">{post.fields.excerpt}</p>
              <Link
                to={`/blog/${post.fields.slug}`}
                className="text-blue-400 text-sm mt-4 hover:text-blue-300"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "blogPost",
        "fields.slug": slug,
      })
      .then((response) => setPost(response.items[0]))
      .catch(console.error);
  }, [slug]);

  if (!post)
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <p className="text-blue-400 text-xl">Loading...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-16 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 left-20"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <Link
          to="/blog"
          className="text-blue-400 hover:text-blue-300 transition mb-8 flex items-center gap-2 animate-fadeUp delay-100"
        >
          ← Back to Blog
        </Link>

        <p className="text-gray-500 text-sm mb-4 animate-fadeUp delay-200">
          {new Date(post.fields.publishedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 animate-fadeUp delay-300">
          {post.fields.title}
        </h1>

        <p className="text-gray-300 leading-relaxed animate-fadeUp delay-400">
          {post.fields.excerpt}
        </p>
        <div className="text-gray-300 leading-relaxed mt-8 animate-fadeUp delay-500">
          {documentToReactComponents(post.fields.content)}
        </div>
      </div>
    </div>
  );
}

export default App;
