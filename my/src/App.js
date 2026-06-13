import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Home() {
  return <h1>Main Page</h1>;
}
function About() {
  return <h1>About me</h1>;
}
function Contact() {
  return <h1>Contact Us</h1>;
}
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="about">About me</Link>
        <Link to="contact">Contact Us</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
