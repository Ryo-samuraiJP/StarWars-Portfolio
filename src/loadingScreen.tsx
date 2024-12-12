import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <motion.div
        className="text-xl sm:text-4xl md:text-[2.75rem] lg:text-6xl xl:text-7xl 2xl:text-[5rem]
          text-center text-[#33A3CD] font-starwars__opening"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2, duration: 1.5 }}
      >
        <p>A long time ago in a galaxy far,</p>
        <p className="text-left">far away....</p>
      </motion.div>
      <motion.div
        className="absolute text-center -space-y-3 text-yellow-500 star-wars-font"
        initial={{
          opacity: 0,
          scale: 50,
        }}
        animate={{
          opacity: 1,
          scale: 0,
        }}
        transition={{ delay: 3, duration: 5.5 }}
      >
        <p>ryoichi</p>
        <p>homma</p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
