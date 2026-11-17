import { motion } from "framer-motion";
import heroImage from "@/assets/images/Hero/girl-developer.png";

export default function Loading() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 md:w-80"
      >
        <motion.img
          src={heroImage}
          alt=""
          width={1024}
          height={1024}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-full select-none"
          draggable={false}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="mt-6"
      >
        <span className="text-lg font-bold tracking-tight">
          <span className="text-muted-foreground">&lt;</span>
          <span className="gradient-text">Charu</span>
          <span className="text-muted-foreground"> /&gt;</span>
        </span>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "8rem" }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
        className="mt-4 h-0.5 rounded-full bg-accent/60"
      />
    </motion.div>
  );
}
