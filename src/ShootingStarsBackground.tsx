import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";

const ShootingStarsBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default ShootingStarsBackground;
