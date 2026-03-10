import React from "react";
import { motion } from "framer-motion";

const Blob = ({ className, delay = 0 }) => (
  <motion.div
    className={className}
    style={{ willChange: "transform" }}
    initial={{ opacity: 0.25, scale: 0.95 }}
    animate={{
      opacity: [0.25, 0.4, 0.25],
      scale: [0.95, 1.03, 0.95],
      x: [0, 15, -10, 0],
      y: [0, -10, 15, 0],
    }}
    transition={{
      duration: 50,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const AuroraBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <Blob
        className="absolute -top-24 -left-24 w-95 h-95 rounded-full
        bg-linear-to-br from-indigo-500/20 to-purple-500/10 blur-xl"
        delay={0}
      />

      <Blob
        className="absolute -bottom-24 -right-24 w-95 h-95 rounded-full
        bg-linear-to-br from-emerald-400/15 to-cyan-400/10 blur-xl"
        delay={4}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent_70%)]" />
    </div>
  );
};

export default AuroraBackground;
