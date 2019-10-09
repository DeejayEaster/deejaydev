import React from "react";
import "./scss/index.scss";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
