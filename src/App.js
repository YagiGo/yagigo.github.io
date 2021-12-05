import Navbar from "./components/ResumeNav";
import Page from "./components/Page";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Element } from 'react-scroll';

function App() {
  return (
    <div>
      <Navbar />
        <Page>
          <Element name="about"><About /></Element>
          <hr className="m-0" />
          <Element name="experience"><Experience /></Element>
          <hr className="m-0" />
          <Element name="projects"><Projects /></Element>
          <hr className="m-0" />
          <Element name="skills"><Skills /></Element>
          <hr className="m-0" />
        </Page>
    </div>
  );
}

export default App;
