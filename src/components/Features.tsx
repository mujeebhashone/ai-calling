"use client";
import React, { useRef } from "react";
import { MessageSquare, Globe2, Shield, Headphones } from "lucide-react";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const features = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Natural Language",
    description: "Human-like conversations powered by advanced AI",
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Multilingual Support",
    description: "Communicate in 100+ languages seamlessly",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "Bank-grade encryption and privacy",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "24/7 Support",
    description: "Always here when you need us",
  },
];

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

function TiltCard({ feature }: { feature: (typeof features)[0] }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
      className="relative h-72 rounded-xl bg-foreground group"
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 rounded-xl bg-background shadow-lg p-6"
      >
        <div
          style={{
            transform: "translateZ(40px)",
          }}
          className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
        >
          {React.cloneElement(feature.icon, {
            className: "w-6 h-6 text-foreground",
          })}
        </div>
        <h3
          style={{
            transform: "translateZ(30px)",
          }}
          className="text-xl font-semibold mb-2"
        >
          {feature.title}
        </h3>
        <p
          style={{
            transform: "translateZ(20px)",
          }}
          className="text-slate-600"
        >
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl md:text-5xl text-foreground font-bold text-center mb-16">
          Powerful Features for Modern Communication
         
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <TiltCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
