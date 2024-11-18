import PropTypes from "prop-types";

const ProjectDetailRow = ({ label, value }) => (
  <div className="flex flex-col justify-between md:flex-row">
    <span className="text-black dark:text-white">{label}:</span>
    <span className="text-zinc-600 md:text-right dark:text-zinc-300">
      {value}
    </span>
  </div>
);

ProjectDetailRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default function CardProject({
  image,
  title,
  description,
  difficulty,
  soluce,
  technologies,
  demoUrl,
  githubUrl,
}) {
  const buttonClass =
    "flex justify-center items-center gap-2 rounded-md px-4 py-2 transition-colors";
  const demoButtonClass = `${buttonClass} bg-green-600 hover:bg-green-700`;

  return (
    <div className="mx-auto w-full overflow-hidden bg-zinc-100 text-white dark:bg-regal-zinc-200">
      <div className="flex flex-col space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0">
        <div className="items-center justify-center md:flex lg:w-1/3 dark:bg-regal-zinc-200">
          <img
            src={image}
            alt={`${title} project image`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/path/to/fallback/image.jpg";
            }}
            className="flex max-h-32  min-h-32 w-full items-center justify-center object-fill text-lg font-bold text-white lg:min-h-0"
          />
        </div>
        <div className="space-y-4 sm:pb-6 lg:w-2/3">
          <h2 className="text-2xl font-bold text-sky-500 dark:text-atlantis">
            {title}
          </h2>
          <p className="text-green-700 dark:text-pink-400">{description}</p>
          <div className="space-y-2">
            <ProjectDetailRow label="Difficultés" value={difficulty} />
            <ProjectDetailRow label="Solution" value={soluce} />
            <ProjectDetailRow
              label="Technologies utilisées"
              value={technologies.join(", ")}
            />
          </div>
          <div className="flex flex-col gap-4 pt-4 min-[370px]:flex-row">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo of the project"
                className={demoButtonClass}
              >
                <span className="text-sm">Live Demo</span>
              </a>
            )}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View project on Github"
              className="flex justify-center rounded-md bg-regal-zinc-100 px-4 py-2 transition-colors hover:bg-regal-zinc-300"
            >
              <span className="text-sm">View on Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

CardProject.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  soluce: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  demoUrl: PropTypes.string,
  githubUrl: PropTypes.string.isRequired,
};
