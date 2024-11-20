import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-scroll";

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-nowrap text-sm text-black transition-colors hover:text-sky-500 active:text-zinc-400 dark:text-zinc-300 dark:hover:text-atlantis"
  >
    {children}
  </Link>
);
NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const tabs = ["A propos de moi", "Projets", "Compétences", "Contact"];
const scrollid = ["about-me", "project", "skills", "contact"];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <nav className="hidden size-full cursor-pointer place-content-around items-center  bg-zinc-50 md:flex dark:bg-regal-zinc-200">
      {tabs.map((tab, index) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
          scrollId={scrollid[index]}
        />
      ))}
    </nav>
  );
};

const Chip = ({ text, selected, setSelected, scrollId }) => {
  return (
    <NavLink to={scrollId}>
      <button
        onClick={() => setSelected(text)}
        className={`${
          selected
            ? "text-white"
            : "text-black hover:bg-slate-700 hover:text-slate-200 dark:text-white"
        } relative rounded-md px-2.5 py-0.5 text-sm transition-colors`}
      >
        <span className="relative z-10">{text}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-sky-600 to-sky-800 dark:from-lime-600 dark:to-lime-800"
          ></motion.span>
        )}
      </button>
    </NavLink>
  );
};

Chip.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  setSelected: PropTypes.func.isRequired,
  scrollId: PropTypes.string.isRequired,
};

export default ChipTabs;
