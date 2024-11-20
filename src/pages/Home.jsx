import Aboutme from "../components/Aboutme";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import ProjectsCarousel from "../components/ProjectsCarousel";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="p-6 md:px-0 dark:bg-regal-zinc-300">
      <Navbar />
      <main>
        <Aboutme />
        <ProjectsCarousel />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
