import { motion } from "framer-motion";

export default function Profile() {
  // animation_variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-right select-none"
    >
      <motion.h1
        variants={itemVariants}
        className="
          text-9xl 
          font-black 
          italic 
          tracking-tighter 
          leading-none
          text-white
          drop-shadow-[8px_8px_0px_#d40000]
        "
      >
        VITTORIO
      </motion.h1>

      <motion.div variants={itemVariants} className="mt-4">
        <h2
          className="
            text-3xl 
            font-black
            bg-[#d40000] 
            text-white
            inline-block 
            px-6 
            py-1
            rotate-[-3deg]
            border-2
            border-white
            tracking-wider
          "
        >
          Computer Science
        </h2>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="
          mt-12 
          bg-white 
          text-black 
          p-6 
          rotate-[3deg] 
          border-4 
          border-black
          shadow-[-10px_10px_0px_rgba(255,255,255,0.2)]
          text-left
          inline-block
          min-w-[280px]
        "
      >
        <div className="flex justify-between items-center border-b-2 border-black pb-2 mb-3 font-black text-xl tracking-wide">
          <span>STATUS</span>
          <span className="bg-black text-white px-2 py-0.5 text-sm animate-pulse">
            LVL 21
          </span>
        </div>

        <div className="font-bold space-y-1.5 text-md uppercase tracking-wide">
          <div className="flex justify-between gap-10">
            <span>[■] JAVASCRIPT</span>
            <span className="font-black text-[#d40000]">INTERMEDIATE</span>
          </div>

          <div className="flex justify-between gap-10">
            <span>[■] PYTHON</span>
            <span className="font-black text-[#d40000]">INTERMEDIATE</span>
          </div>

          <div className="flex justify-between gap-10">
            <span>[■] MACHINE LEARNING</span>
            <span className="font-black text-[#d40000]">INTERMEDIATE</span>
          </div>
        </div>

        <div className="mt-4 flex gap-1 h-2 opacity-80">
          <div className="w-8 bg-black"></div>
          <div className="w-2 bg-black"></div>
          <div className="w-4 bg-[#d40000]"></div>
          <div className="w-1 bg-black"></div>
          <div className="w-16 bg-black"></div>
        </div>
      </motion.div>
    </motion.div>
  );
}