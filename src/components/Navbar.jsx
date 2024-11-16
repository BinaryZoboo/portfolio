import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

// Composant NavLink pour les liens de navigation
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-sm text-zinc-400 transition-colors hover:text-zinc-100 active:text-zinc-100"
  >
    {children}
  </Link>
);
NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// Composant IconButton pour le bouton d'icône
const IconButton = ({ children, onClick, ariaLabel }) => (
  <button
    className="flex size-full animate-pulse items-center justify-center text-regal-zinc-100 transition-colors hover:text-regal-zinc-300 dark:text-white dark:hover:text-zinc-300"
    onClick={onClick}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);
IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

// Composant DarkModeButton pour le mode sombre
const DarkModeButton = ({ children, onClick, ariaLabel }) => (
  <button
    className="flex size-full items-center justify-center text-yellow-400 transition-colors hover:text-yellow-500 dark:text-sky-500 dark:hover:text-sky-300"
    onClick={onClick}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);
DarkModeButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-2 z-10 mx-auto w-full overflow-hidden rounded-lg ring-2 ring-atlantis ring-offset-4 ring-offset-regal-zinc-300 md:w-3/4">
      <div className="flex h-14 w-full items-center justify-between bg-zinc-100 md:mx-auto dark:bg-regal-zinc-100">
        {/* IconButton pour le menu hamburger */}
        <div className="flex h-full items-center px-4 md:hidden ">
          <IconButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            ariaLabel="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </IconButton>
        </div>

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 px-4 text-zinc-100 ">
          <span className=" font-mono text-lg font-extrabold text-atlantis">
            &lt;/&gt;
          </span>
          <span className="bg-gradient-to-r from-zinc-500 to-white bg-clip-text text-transparent dark:from-white dark:to-zinc-500">
            Nathan.dev
          </span>
        </Link>

        {/* Nav Links pour desktop */}
        <nav className="hidden size-full items-center justify-center space-x-6 bg-zinc-100 md:flex dark:bg-regal-zinc-200">
          <NavLink to="/about">About me</NavLink>
          <NavLink to="/resume">Projects</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Dark Mode Button */}
        <div className="h-full items-center  px-4 md:flex">
          <DarkModeButton ariaLabel="Toggle theme" onClick={toggleTheme}>
            {isDarkMode ? (
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </DarkModeButton>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <nav className="flex flex-col items-center space-y-4 border-t border-atlantis bg-zinc-100 py-4 md:hidden dark:bg-regal-zinc-200">
          <NavLink to="/about">About me</NavLink>
          <NavLink to="/resume">Projects</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      )}
    </header>
  );
}
