import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export default function Hoverskills({ prop, isActive }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  useEffect(() => {
    if (isActive) {
      x.set(-HALF_ROTATION_RANGE);
      y.set(HALF_ROTATION_RANGE);
    } else {
      x.set(0);
      y.set(0);
    }
  }, [isActive, x, y]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

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
      className="relative size-16 rounded-xl bg-gradient-to-br from-sky-400 to-sky-950 dark:from-lime-700 dark:to-lime-950"
    >
      <div
        style={{
          transform: "translateZ(35px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute  inset-0 place-content-center rounded-xl border-regal-zinc-200 bg-transparent p-1 shadow-lg hover:border-2 dark:border-zinc-100"
      >
        <img
          style={{
            transform: "translateZ(20px)",
          }}
          className="w-full place-content-center rounded-xl text-center"
          src={`../../assets/${prop}`}
          alt={`${prop} icon`}
        />
      </div>
    </motion.div>
  );
}

Hoverskills.propTypes = {
  prop: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
