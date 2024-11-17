import { Element } from "react-scroll";

export default function Aboutme() {
  return (
    <div className="mx-auto my-6 flex h-auto w-full flex-col items-center rounded-lg bg-zinc-100 p-4 ring-2 ring-atlantis ring-offset-4 ring-offset-regal-zinc-300 md:w-3/4 dark:bg-regal-zinc-200">
      <Element className="hidden self-start" name="aboutme"></Element>
      <div className="flex w-full flex-col items-center space-y-6 sm:flex-row sm:space-y-0">
        {/* Image Section */}
        <div className="h-60 rounded-2xl md:mr-5">
          <img
            src="../../assets/photo.webp"
            alt="Description of image"
            className="h-full object-fill"
          />
        </div>

        {/* Text Section */}
        <div className="flex w-full flex-col space-y-3 text-center sm:w-2/3 sm:text-left">
          <p className="text-zinc-100">
            <span className="text-pink-400 opacity-80">{"<span>"}</span>Hey, je
            m&apos;appelle Nathan
            <span className="text-pink-400 opacity-80">{"</span>"}</span>
          </p>

          <h1 className="text-balance text-4xl font-bold text-zinc-100 md:text-5xl lg:text-6xl">
            <p className="flex flex-wrap text-zinc-100 ">
              Junior&nbsp;<span className="text-green-400">{"{Web}"}</span>
              &nbsp;Developer<span className="animate-pulse">_</span>
            </p>
          </h1>

          <div className="font-mono text-zinc-300">
            <span className="opacity-60">{"<p>"}</span>
            Avec une expertise des technologies à la pointe telles que
            <span className="text-pink-400"> NodeJS</span>,
            <span className="text-pink-400"> React</span>,
            <span className="text-pink-400"> Javascript</span>, et
            <span className="text-pink-400"> Tailwind</span>... Je donne des
            solutions web innovantes et performantes.
            <span className="opacity-60">{"</p>"}</span>
          </div>

          {/* Icons Section */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 sm:justify-start">
            {[
              "nodejs.svg",
              "mongodb-original-wordmark.svg",
              "javascript-js.svg",
              "react-original-wordmark.svg",
            ].map((icon, index) => (
              <img
                key={index}
                className="flex size-10 items-center justify-center text-zinc-300"
                src={`../../assets/${icon}`}
              ></img>
            ))}
            <div className="flex items-end text-xs text-zinc-300 opacity-80">
              et plus encore...
            </div>
          </div>

          {/* Button Section */}
        </div>
      </div>
    </div>
  );
}
