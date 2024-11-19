import { Element } from "react-scroll";

const Skills = () => {
  return (
    <div className="mx-auto my-6 flex h-auto w-full flex-col items-center rounded-lg bg-zinc-100 p-4 ring-2 ring-sky-500 ring-offset-4 ring-offset-inherit md:w-3/4 dark:bg-regal-zinc-200 dark:ring-atlantis dark:ring-offset-regal-zinc-300">
      <Element className="mb-4" name="skills">
        <h2 className="bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent dark:from-atlantis dark:to-lime-800">
          • Skills
        </h2>
      </Element>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </div>
  );
};

export default Skills;
