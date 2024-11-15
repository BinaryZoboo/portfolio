import PropTypes from "prop-types";

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
  return (
    <div className="mx-auto w-full overflow-hidden bg-gray-950 text-white shadow-xl">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Image placeholder */}
        <div className="items-center justify-center bg-gray-800 p-6 md:flex md:w-1/3">
          <img
            src={image}
            className="flex w-full items-center justify-center bg-black object-fill text-lg font-bold text-white"
          />
        </div>
        {/* Right side - Project info */}
        <div className="space-y-4 p-6 pb-20 sm:pb-6 md:w-2/3">
          <h2 className="text-2xl font-bold text-atlantis">{title}</h2>
          <p className="text-gray-400">{description}</p>

          <div className="space-y-2">
            <div className="flex flex-col justify-between md:flex-row">
              <span className="text-gray-400">Difficultés:</span>
              <span className="md:text-right">{difficulty}</span>
            </div>
            <div className="flex flex-col justify-between md:flex-row">
              <span className="text-gray-400">Solution:</span>
              <span className="md:text-right">{soluce}</span>
            </div>
            <div className="flex flex-col justify-between md:flex-row">
              <span className="text-gray-400">Technologies utilisées:</span>
              <span className="md:text-right">{technologies.join(", ")}</span>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href={demoUrl}
              className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 transition-colors hover:bg-green-700"
            >
              <span className="text-sm">Live Demo</span>
            </a>
            <a
              href={githubUrl}
              className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-4 py-2 transition-colors hover:bg-gray-700"
            >
              <span className="text-sm">View on Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Définition des types de props pour CardProject
CardProject.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  soluce: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  demoUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
};
