"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Youtube,
  BookOpen,
  Gamepad2,
  Presentation,
  Headphones,
  Film,
} from "lucide-react";

const useCases = [
  {
    icon: <Youtube className="w-6 h-6" />,
    title: "Content Creation",
    description:
      "Create engaging voiceovers for videos, podcasts, and social media content",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Education",
    description:
      "Generate audio content for e-learning platforms and educational materials",
  },
  {
    icon: <Gamepad2 className="w-6 h-6" />,
    title: "Gaming",
    description:
      "Add dynamic voice acting to games and interactive experiences",
  },
  {
    icon: <Presentation className="w-6 h-6" />,
    title: "Business",
    description: "Create professional presentations and training materials",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Accessibility",
    description: "Make content accessible with natural-sounding text-to-speech",
  },
  {
    icon: <Film className="w-6 h-6" />,
    title: "Entertainment",
    description: "Produce voice-overs for animations and entertainment content",
  },
];

export function UseCases() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent">
              Endless Possibilities
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Discover how our AI voice technology can transform your projects
            across different industries
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(useCase.icon, {
                  className: "w-7 h-7 text-foreground",
                })}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {useCase.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
}
