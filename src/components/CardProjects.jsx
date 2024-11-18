import PropTypes from "prop-types";

const ProjectDetailRow = ({ label, value }) => (
  <div className="flex flex-col justify-between md:flex-row">
    <span className="text-gray-400">{label}:</span>
    <span className="md:text-right">{value}</span>
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
    "inline-flex items-center gap-2 rounded-md px-4 py-2 transition-colors";
  const demoButtonClass = `${buttonClass} bg-green-600 hover:bg-green-700`;

  return (
    <div className="mx-auto w-full overflow-hidden bg-zinc-100 text-white dark:bg-regal-zinc-200">
      <div className="flex flex-col lg:flex-row">
        <div className="items-center justify-center p-6 md:flex lg:w-1/3 dark:bg-regal-zinc-200">
          <img
            src={image}
            alt={`${title} project image`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/path/to/fallback/image.jpg";
            }}
            className="flex w-full items-center justify-center object-fill text-lg font-bold text-white"
          />
        </div>
        <div className="space-y-4 p-6 sm:pb-6 lg:w-2/3">
          <h2 className="text-2xl font-bold text-atlantis">{title}</h2>
          <p className="text-gray-400">{description}</p>
          <div className="space-y-2">
            <ProjectDetailRow label="Difficultés" value={difficulty} />
            <ProjectDetailRow label="Solution" value={soluce} />
            <ProjectDetailRow
              label="Technologies utilisées"
              value={technologies.join(", ")}
            />
          </div>
          <div className="flex gap-4 pt-4">
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
              className="inline-flex items-center rounded-md bg-regal-zinc-100 px-4 py-2 transition-colors hover:bg-regal-zinc-300"
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
