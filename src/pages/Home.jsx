import Aboutme from "../component/Aboutme";
import ProjectsCarousel from "../component/ProjectsCarousel";
import Navbar from "../component/navbar";

const Home = () => {
  return (
    <div className="bg-zinc-100 p-6 md:px-0 dark:bg-regal-zinc-300">
      <Navbar />
      <Aboutme />
      <ProjectsCarousel />
    </div>
  );
};

export default Home;
