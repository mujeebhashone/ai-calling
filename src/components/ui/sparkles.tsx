import React from "react";
import { motion } from "framer-motion";

interface SparklesProps {
  isActive: boolean;
  children: React.ReactNode;
}

export function Sparkles({ isActive, children }: SparklesProps) {
  return (
    <div className="relative inline-block">
      {isActive && (
        <>
          <SparkleInstance
            color="blue"
            size={10}
            style={{
              top: 0,
              left: "20%",
              animationDelay: "0s",
            }}
          />
          <SparkleInstance
            color="white"
            size={8}
            style={{
              top: "60%",
              left: 0,
              animationDelay: "0.2s",
            }}
          />
          <SparkleInstance
            color="blue"
            size={12}
            style={{
              top: "90%",
              left: "40%",
              animationDelay: "0.4s",
            }}
          />
          <SparkleInstance
            color="white"
            size={6}
            style={{
              top: "20%",
              left: "90%",
              animationDelay: "0.6s",
            }}
          />
          <SparkleInstance
            color="blue"
            size={8}
            style={{
              top: "80%",
              left: "90%",
              animationDelay: "0.8s",
            }}
          />
        </>
      )}
      {children}
    </div>
  );
}

interface SparkleInstanceProps {
  color: string;
  size: number;
  style: React.CSSProperties;
}

function SparkleInstance({ color, size, style }: SparkleInstanceProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: 0 }}
      animate={{
        scale: [0, 1, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color === "blue" ? "#60A5FA" : "white",
        boxShadow: `0 0 ${size}px ${color === "blue" ? "#60A5FA" : "white"}`,
        ...style,
      }}
    />
  );
}
