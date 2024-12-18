import { Element } from "react-scroll";

export default function Aboutme() {
  return (
    <div className="mx-auto my-6 flex h-auto w-full flex-col items-center rounded-lg bg-zinc-100 p-4 ring-2 ring-sky-500 ring-offset-4 ring-offset-inherit md:w-3/4 dark:bg-regal-zinc-200 dark:ring-atlantis dark:ring-offset-regal-zinc-300">
      <Element className="self-start" name="about-me"></Element>
      <div className="flex w-full flex-col items-center space-y-6 sm:flex-row sm:space-y-0">
        {/* Image Section */}
        <div className="h-60 rounded-2xl md:mr-5">
          <img
            src="../../assets/photo.webp"
            alt="Profile"
            className="h-full object-fill"
          />
        </div>

        {/* Text Section */}
        <div className="flex w-full flex-col space-y-3 text-center sm:w-2/3 sm:text-left">
          <p className="dark:text-zinc-300">
            <span className="text-green-700 dark:text-pink-400">
              {"<span>"}
            </span>
            Hey, je m&apos;appelle Nathan, récemment diplômé d&apos;un BAC+2
            Développeur Web, chez OpenClassrooms.
            <span className="text-green-700 dark:text-pink-400">
              {"</span>"}
            </span>
          </p>

          <div className="text-balance text-4xl font-bold text-black md:text-5xl lg:text-6xl dark:text-white">
            <h1 className="flex flex-wrap text-black dark:text-white">
              Junior
              <span className="text-sky-600 dark:text-atlantis">
                &nbsp;{"{Web}"}&nbsp;
              </span>
              Developer<span className="animate-pulse">_</span>
            </h1>
          </div>

          <div className="font-mono text-zinc-800 dark:text-zinc-300">
            <span className="text-green-700 dark:text-zinc-400">{"<p>"}</span>
            Avec une expertise dans des technologies à la pointe telles que
            <span className="text-sky-700 dark:text-pink-400"> NodeJS</span>,
            <span className="text-sky-700 dark:text-pink-400"> React</span>,
            <span className="text-sky-700 dark:text-pink-400"> Javascript</span>
            , et
            <span className="text-sky-700 dark:text-pink-400"> Tailwind</span>
            ... Je propose des solutions web innovantes et performantes.
            <span className="text-green-700 dark:text-zinc-400">{"</p>"}</span>
          </div>

          {/* Icons Section */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 sm:justify-start">
            {[
              { icon: "nodejs.svg", alt: "Logo Node.js" },
              { icon: "mongodb.svg", alt: "Logo MongoDB" },
              { icon: "javascript-js.svg", alt: "Logo JavaScript" },
              { icon: "react-original.svg", alt: "Logo React" },
            ].map(({ icon, alt }, index) => (
              <img
                key={index}
                className="size-10"
                src={`../../assets/${icon}`}
                alt={alt}
              />
            ))}
            <div className="flex items-end text-xs text-zinc-800 opacity-80 dark:text-zinc-300">
              et plus encore
              <span className="hover:animate-bounce hover:cursor-default">
                .
              </span>
              <span className="hover:animate-bounce hover:cursor-default">
                .
              </span>
              <span className="hover:animate-bounce hover:cursor-default">
                .
              </span>
            </div>
          </div>

          {/* Button Section */}
        </div>
      </div>
    </div>
  );
}
