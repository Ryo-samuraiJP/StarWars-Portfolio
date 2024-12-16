import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

const ShootingStarsBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default ShootingStarsBackground;
