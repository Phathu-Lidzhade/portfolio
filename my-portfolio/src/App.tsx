import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Projects";
import Education from "./components/Education/Education";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Education />
      </main>
    </>
  );
}

export default App;