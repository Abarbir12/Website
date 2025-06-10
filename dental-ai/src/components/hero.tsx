"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";

const queries = [
  "Which locations are underperforming on hygiene revenue?",
  "Show me our supply costs vs similar DSOs",
  "Why did practice #12's orders spike last month?",
  "What's our average chair time utilization?",
];

export function Hero() {
  const [activeQuery, setActiveQuery] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuery((prev) => (prev + 1) % queries.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">AI-POWERED BUSINESS INTELLIGENCE</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="block text-slate-900">What If Everyone In Your</span>
            <span className="block text-gradient">Organization Could Get</span>
            <span className="block text-slate-900">Instant Answers?</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto"
          >
            From procurement optimization to practice performance, our AI understands your entire operation. Just ask what you need to know.
          </motion.p>

          {/* Rotating Queries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5">
              <span className="text-slate-500 font-medium">Try asking:</span>
              <div className="relative h-7 flex items-center">
                {queries.map((query, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: activeQuery === index ? 1 : 0,
                      y: activeQuery === index ? 0 : -10
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute whitespace-nowrap text-blue-600 font-semibold ${
                      activeQuery === index ? 'block' : 'hidden'
                    }`}
                  >
                    "{query}"
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 group"
            >
              Reserve Your Spot
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-slate-50 group"
            >
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              See It In Action
            </Button>
          </motion.div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 relative"
        >
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative aspect-[16/9] rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20"></div>
                
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                
                {/* Floating Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Central Hub */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-xl"
                    ></motion.div>
                    
                    {/* Orbiting Elements */}
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-white rounded-full"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: `rotate(${i * 90}deg) translateX(60px) translateY(-50%)`,
                        }}
                        animate={{
                          transform: `rotate(${i * 90 + 360}deg) translateX(60px) translateY(-50%)`,
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.25,
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white/80 text-lg font-medium mb-2">Your AI Assistant</div>
                    <div className="text-white/60 text-sm">Processing dental intelligence...</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500 rounded-full blur-2xl opacity-20"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 