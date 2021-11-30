import Navbar from "./components/ResumeNav";
import Page from "./components/Page";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Interests from "./components/Interests";

function App() {
  return (
    <div>
      <Navbar />
        <Page>
          <About />
          <hr className="m-0" />
          <Experience />
          <hr className="m-0" />
          <Projects />
          <hr className="m-0" />
          <Skills />
          <hr className="m-0" />
          <Interests />
        </Page>
    </div>
  );
}

export default App;
