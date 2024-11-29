import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "../../lib/utils";

export const SocialIconsAnimation = ({
  items,
  className,
}: {
  items: {
    name: string;
    icon: React.ReactNode;
    hoverColor: string;
    href: string;
  }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn("flex h-[2.5rem] gap-[0.5rem] items-end", className)}
    >
      {items.map((social) => (
        <IconContainer mouseX={mouseX} key={social.name} {...social} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  name,
  icon,
  hoverColor,
  href,
}: {
  mouseX: MotionValue;
  name: string;
  icon: React.ReactNode;
  hoverColor: string;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    // Distance from the center of the element
    return val - bounds.x - bounds.width / 2;
  });

  // Width and height of the icon container will change based on the distance
  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 70, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 70, 40]);

  const widthTransformIcon = useTransform(
    distance, // Distance from the center
    [-150, 0, 150], // Min, default, max
    [20, 40, 20] // Min, default, max
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1, // Mass of the spring
    stiffness: 150, // Stiffness of the spring
    damping: 12, // Damping of the spring
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`flex items-center justify-center relative border-2
           rounded-full duration-75 ease-in-out
          ${
            hovered
              ? `border-gray-500 ${hoverColor} bg-sky-50 transition-all duration-300 ease-in-out`
              : "border-[rgb(190,220,255)] text-[rgb(190,220,255)] shadow-lg shadow-neon"
          }`}
      >
        {/* AnimatePresence is used to animate the name becomes visible when hovered */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-[0.5rem] py-[0.125rem] rounded-md bg-gray-100 font-medium 
              text-xs text-sky-950 absolute left-1/2 -translate-x-1/2 bottom-[-1.75rem] w-fit"
            >
              {name}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center transition-all duration-75 ease-in-out"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
