import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import PropTypes from "prop-types";
import { useRef } from "react";
import { LiaMousePointerSolid } from "react-icons/lia";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <div className="mx-auto my-6 flex h-auto w-full flex-col rounded-lg bg-zinc-100 p-4 ring-2 ring-sky-500 ring-offset-4 ring-offset-inherit md:w-3/4 dark:bg-regal-zinc-200 dark:ring-atlantis dark:ring-offset-regal-zinc-300">
      <Element className="mb-4 flex w-full flex-col items-center" name="skills">
        <h2 className="text-nowrap bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent dark:from-atlantis dark:to-lime-800">
          • Skills
        </h2>
      </Element>
      <div className="flex">
        <div className="flex w-1/2 flex-col space-y-4">
          <div className="flex flex-wrap place-content-center items-center gap-4">
            <TiltCard prop={"nodejs.svg"} />
            <TiltCard prop={"javascript-js.svg"} />
            <TiltCard prop={"react-original.svg"} />
            <TiltCard prop={"mongodb.svg"} />
          </div>
        </div>
        <ul className="flex w-1/2 flex-col place-content-between ">
          <li>
            Front-end :<span>Ola</span>
          </li>
          <li>
            Back-end :<span>Senior</span>
          </li>
          <li>
            Database :<span>De</span>
          </li>
          <li>
            Outils :<span>La</span>
          </li>
          <li>
            Autres :<span>Paela</span>
          </li>
        </ul>
      </div>
      <div className="flex h-10 flex-col flex-nowrap self-end">
        <LiaMousePointerSolid className="flex text-4xl" />
        <p className="text-nowrap text-xs">Hover it!</p>
      </div>
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

function TiltCard({ prop }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative size-20 rounded-xl bg-gradient-to-br from-sky-500 to-sky-800 dark:from-atlantis dark:to-lime-800"
    >
      <div
        style={{
          transform: "translateZ(40px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 place-content-center rounded-xl bg-transparent shadow-lg"
      >
        <img
          style={{
            transform: "translateZ(20px)",
          }}
          className="w-full place-content-center rounded-xl text-center"
          src={`../../assets/${prop}`}
        ></img>
      </div>
    </motion.div>
  );
}

export default Skills;

TiltCard.propTypes = {
  prop: PropTypes.string.isRequired,
};
