import { useState } from "react";
import { LiaMousePointerSolid } from "react-icons/lia";
import { Element } from "react-scroll";
import Hoverskills from "./HoverSkills";

const Comp = () => {
  const [hoveredSkills, setHoveredSkills] = useState([]);

  const handleMouseEnter = (skills) => {
    setHoveredSkills((prev) => [...new Set([...prev, ...skills])]);
  };

  const handleMouseLeave = (skills) => {
    setHoveredSkills((prev) => prev.filter((skill) => !skills.includes(skill)));
  };

  return (
    <div className="mx-auto my-6 flex h-auto w-full flex-col rounded-lg bg-zinc-100 px-4 pt-4 ring-2 ring-sky-500 ring-offset-4 ring-offset-inherit md:w-3/4 dark:bg-regal-zinc-200 dark:ring-atlantis dark:ring-offset-regal-zinc-300">
      <Element
        className="mb-4 flex w-full flex-col items-center text-center"
        name="skills"
      >
        <h2 className="text-nowrap bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent dark:from-atlantis dark:to-lime-800">
          • Compétences
        </h2>
      </Element>
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full flex-col border-b-2 border-zinc-700 pb-4 md:w-1/2 md:border-b-0 md:border-r-2 md:pb-0">
          <div className="flex flex-wrap justify-center gap-4">
            <Hoverskills
              prop={"tailwind.svg"}
              isActive={hoveredSkills.includes("TailwindCSS")}
            />
            <Hoverskills
              prop={"nodejs.svg"}
              isActive={hoveredSkills.includes("Node.js")}
            />
            <Hoverskills
              prop={"javascript-js.svg"}
              isActive={hoveredSkills.includes("JavaScript")}
            />
            <Hoverskills
              prop={"git.svg"}
              isActive={hoveredSkills.includes("Git")}
            />
            <Hoverskills
              prop={"mongodb.svg"}
              isActive={hoveredSkills.includes("MongoDB")}
            />
            <Hoverskills
              prop={"vscode.svg"}
              isActive={hoveredSkills.includes("VSCode")}
            />
            <Hoverskills
              prop={"html.svg"}
              isActive={hoveredSkills.includes("HTML")}
            />
            <Hoverskills
              prop={"react-original.svg"}
              isActive={hoveredSkills.includes("React")}
            />
            <Hoverskills
              prop={"express.svg"}
              isActive={hoveredSkills.includes("Express")}
            />
          </div>
        </div>
        <ul className="mx-auto flex flex-col place-content-between gap-2 px-4 pt-4 text-green-700 hover:cursor-default md:w-1/2 md:gap-0 md:px-10 md:pt-0 dark:text-pink-400">
          <li
            onMouseEnter={() =>
              handleMouseEnter([
                "JavaScript",
                "React",
                "HTML",
                "CSS",
                "TailwindCSS",
              ])
            }
            onMouseLeave={() =>
              handleMouseLeave([
                "JavaScript",
                "React",
                "HTML",
                "CSS",
                "TailwindCSS",
              ])
            }
          >
            • Front-end:{" "}
            <span className="text-zinc-800 dark:text-zinc-400">
              HTML, JavaScript, React, Tailwind, CSS
            </span>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(["Node.js", "Express"])}
            onMouseLeave={() => handleMouseLeave(["Node.js", "Express"])}
          >
            • Back-end:{" "}
            <span className="text-zinc-800 dark:text-zinc-400">
              Node.js, Express
            </span>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(["MongoDB"])}
            onMouseLeave={() => handleMouseLeave(["MongoDB"])}
          >
            • Database:{" "}
            <span className="text-zinc-800 dark:text-zinc-400">MongoDB</span>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(["Git", "Github", "VSCode"])}
            onMouseLeave={() => handleMouseLeave(["Git", "Github", "VSCode"])}
          >
            • Outils:{" "}
            <span className="text-zinc-800 dark:text-zinc-400">
              Git, Github, VSCode
            </span>
          </li>
          <li>
            • Autres:{" "}
            <span className="text-zinc-800 dark:text-zinc-400">
              RESTful APIs, Méthode Agile
            </span>
          </li>
        </ul>
      </div>
      <div className="mt-4 flex h-10 animate-bounce flex-col flex-nowrap self-end md:mt-0">
        <LiaMousePointerSolid className="flex text-4xl" />
        <p className="text-nowrap text-xs">Hover it!</p>
      </div>
    </div>
  );
};

export default Comp;
