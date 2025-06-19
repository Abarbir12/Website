"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Brain, Shield, TrendingUp, TrendingDown, Award, Activity, Lock, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const dynamicStatements = [
  { metric: "32%", label: "lower supply spend on average", icon: TrendingDown, color: "text-healthcare-green" },
  { metric: "18h", label: "saved per site each month", icon: Clock, color: "text-primary-blue" },
  { metric: "3.2×", label: "first-year ROI from AI", icon: TrendingUp, color: "text-healthcare-green" },
  { metric: "30%", label: "less manual work for staff", icon: TrendingDown, color: "text-healthcare-green" },
];

export function Hero() {
  const [currentStatement, setCurrentStatement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatement((prev) => (prev + 1) % dynamicStatements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden section-background pt-20">
      {/* Hero previously contained section-scoped gradient overlays and orbs.
          These were removed to ensure a seamless global background.
       */}

      {/* Main content wrapper with proper spacing */}
      <div className="w-full flex-1 flex flex-col px-4">
        {/* Top spacer */}
        <div className="flex-1 min-h-[40px] sm:min-h-[60px] md:min-h-[80px]"></div>
        
        <div className="container relative z-10 mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Liquid glass hero card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="liquid-glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-glass saturate-glass"
            >
              <div className="text-center">
                {/* Premium animated badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center justify-center mb-6 sm:mb-8"
                >
                  <div className="liquid-glass-healthcare rounded-full px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
        
                    <span className="text-xs sm:text-sm font-semibold text-primary-blue">
                      Intelligence Platform
                    </span>
                    
                  </div>
                </motion.div>

                {/* Dynamic headline with data-driven messaging */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-6 sm:mb-8"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                    <span className="block">Instant Insight.</span>
                    <span className="block gradient-text">Autonomous Purchasing.</span>
                  </h1>
                  
                  {/* Dynamic metrics display */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStatement}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg md:text-xl"
                    >
                      {(() => {
                        const Icon = dynamicStatements[currentStatement].icon;
                        return <Icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${dynamicStatements[currentStatement].color} flex-shrink-0`} />;
                      })()}
                      <span className="font-bold text-primary-blue text-lg sm:text-xl md:text-2xl">
                        {dynamicStatements[currentStatement].metric}
                      </span>
                      <span className="text-text-secondary text-xs sm:text-base">
                        {dynamicStatements[currentStatement].label}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto body-professional px-4 sm:px-0"
                >
                  Ask a question, get the answer, let the agent place the order. 
                  One system for appointments, inventory, and cashflow.
                </motion.p>

                {/* Premium CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex justify-center items-center"
                >
                  <Button
                    size="lg"
                    className="premium-cta text-white font-semibold group px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 text-sm sm:text-base md:text-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        const y = contactSection.getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                  >
                    <span className="flex items-center gap-2">
                      See the AI in action
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Feature highlights with liquid glass cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3 md:gap-6 mt-8 sm:mt-10 md:mt-12"
            >
              {[
                {
                  title: "Secure",
                  subtitle: "HIPAA & SOC 2 Compliant",
                  description: "Healthcare-grade security standards",
                  type: "compliance",
                  metric: null
                },
                {
                  title: "Reliable",
                  subtitle: "99.99% Uptime",
                  description: "Enterprise ready infrastructure",
                  type: "uptime",
                  metric: "99.99%"
                },
                {
                  title: "Trusted",
                  subtitle: "Y Combinator Portfolio",
                  description: "Backed by Silicon Valley's top accelerator",
                  type: "backed",
                  metric: null
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.7 + index * 0.1,
                    ease: "easeOut" 
                  }}
                  className="group"
                >
                  <div className="liquid-glass rounded-xl sm:rounded-lg md:rounded-2xl p-4 sm:p-3 md:p-6 h-full min-h-[120px] sm:min-h-[140px] md:min-h-[150px] flex flex-col justify-center relative overflow-hidden">
                    
                    {/* Icon/Visual Element */}
                    <div className="flex justify-center relative h-10 sm:h-8 md:h-12 items-center mb-3 sm:mb-2 md:mb-4">
                      {feature.type === "compliance" && (
                        <div className="relative">
                          <div className="flex items-center gap-2 sm:gap-1 md:gap-2">
                            <Shield className="w-7 h-7 sm:w-6 sm:h-6 md:w-9 md:h-9 text-healthcare-green fill-healthcare-green" />
                            <Lock className="w-7 h-7 sm:w-6 sm:h-6 md:w-9 md:h-9 text-primary-blue fill-primary-blue" />
                          </div>
                          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-healthcare-green/15 to-primary-blue/15" />
                        </div>
                      )}
                      
                      {feature.type === "uptime" && (
                        <div className="relative">
                          <motion.div 
                            className="relative z-10"
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <div className="text-2xl sm:text-xl md:text-[2.5rem] font-extrabold text-primary-blue tabular-nums tracking-tight">{feature.metric}</div>
                          </motion.div>
                          <div className="absolute -inset-6 bg-primary-blue/10 blur-3xl rounded-full" />
                        </div>
                      )}
                      
                      {feature.type === "backed" && (
                        <div className="relative">
                          <img 
                            src="/ycombinator-ar21.svg"
                            alt="Y Combinator"
                            className="h-12 sm:h-10 md:h-14 w-auto relative z-10"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-400/10 blur-3xl scale-150" />
                        </div>
                      )}
                    </div>
                    
                    {/* Divider */}
                    <div className="w-10 sm:w-8 md:w-12 h-px bg-gray-900 dark:bg-gray-700 mx-auto mb-3 sm:mb-2 md:mb-4" />
                    
                    {/* Content */}
                    <div className="text-center space-y-1 sm:space-y-1 md:space-y-2 relative z-10">
                      <h3 className="font-bold text-[10px] sm:text-[9px] md:text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-[11px] md:text-sm font-bold text-gray-900 dark:text-white">
                        {feature.subtitle}
                      </p>
                      <p className="text-[10px] sm:text-[9px] md:text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium scroll indicator - moved into content flow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="hidden md:flex justify-center mt-12 md:mt-16"
            >
              <motion.button
                onClick={() => {
                  const rolesSection = document.getElementById('roles');
                  if (rolesSection) {
                    const yOffset = 0; // Offset to ensure content is not cut off
                    const y = rolesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="scroll-indicator-button-no-float group"
                aria-label="Scroll to next section"
                animate={{ y: [0, -12, 0] }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  repeatType: "loop"
                }}
              >
                <ArrowRight className="w-5 h-5 text-primary-blue/80 rotate-90 group-hover:text-primary-blue transition-colors duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom spacer - matches top spacer for equal spacing */}
        <div className="flex-1 min-h-[40px] sm:min-h-[60px] md:min-h-[80px]"></div>
      </div>
    </section>
  );
} 