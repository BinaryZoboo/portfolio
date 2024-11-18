import Aboutme from "../components/Aboutme";
import Navbar from "../components/Navbar";
import ProjectsCarousel from "../components/ProjectsCarousel";

const Home = () => {
  return (
    <div className="p-6 md:px-0 dark:bg-regal-zinc-300">
      <Navbar />
      <Aboutme />
      <ProjectsCarousel />
    </div>
  );
};

export default Home;
