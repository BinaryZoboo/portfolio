export default function Aboutme() {
  return (
    <div className="mx-auto my-6 flex h-auto w-full flex-col items-center rounded-lg bg-zinc-100 p-4 ring-2 ring-atlantis ring-offset-4 ring-offset-regal-zinc-300 md:w-3/4 md:p-8 dark:bg-regal-zinc-200">
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
        <div className="w-full flex-col space-y-3 text-center sm:w-2/3 sm:text-left">
          <p className="font-mono text-zinc-100">
            <span className="text-pink-400 opacity-60">{"<span>"}</span>Salut,
            je m&apos;appelle Nathan
            <span className="text-pink-400 opacity-60">{"</span>"}</span>
          </p>

          <h1 className="text-2xl font-bold text-zinc-100 md:text-3xl lg:text-4xl">
            <div className="text-zinc-100">
              Junior&nbsp;<span className="text-green-400">{"{Web}"}</span>
              <p className="text-zinc-100">
                Developer<span className="animate-pulse">_</span>
              </p>
            </div>
          </h1>

          <div className="max-w-full font-mono text-zinc-400">
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
            {["N", "M", "JS", "~"].map((icon, index) => (
              <div
                key={index}
                className="flex size-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-300"
              >
                {icon}
              </div>
            ))}
            <div className="flex size-10 items-center justify-center rounded-full bg-zinc-800 text-xs text-zinc-300">
              ...
            </div>
          </div>

          {/* Button Section */}
        </div>
      </div>
    </div>
  );
}
