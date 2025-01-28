import React from "react";
import { ChevronRight, Play, Sparkles as SparklesIcon } from "lucide-react";


import { FlipWords } from "./ui/flip-words";




const words = [
  "Redefine Customer Conversations with AI",
  "Transform Customer Support with AI",
  "Elevate User Experience with AI",
  "Revolutionize Communication with AI",
];

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-background relative">
     
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="transition-all duration-1000"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <FlipWords
                words={words}
                className="text-foreground"
                duration={2000}
              />
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Seamlessly Connect. Understand. Deliver. Transform your customer
              interactions with human-like AI voice technology.
            </p>
            <div className="flex gap-4">
              
            <button
                  className="bg-foreground text-background px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
             
            >
                  Start Free Trial <ChevronRight className="w-5 h-5" />
            </button>
              
              <button className="border border-slate-200 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full text-lg font-semibold text-slate-600 hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" /> Watch Demo
            </button>
            </div>
            </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="AI Communication Visualization"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-10 -left-10 feature-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center">
                  <SparklesIcon className="w-6 h-6 text-foreground" />
            </div>
                <div>
                  <h3 className="font-semibold text-slate-900">AI-Powered</h3>
                  <p className="text-slate-500">Real-time processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
