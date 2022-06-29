
import './App.css';
import { Fragment } from 'react';
import Banner from "./components/Banner/Banner";
import Nav from "./components/Navigation/Nav";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Fragment>
      <Banner />
      <Nav />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
    
  );
}

export default App;
