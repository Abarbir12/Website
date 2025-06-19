"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Target,
  DollarSign,
  Workflow,
  Package,
  MessageSquare,
  User,
  Bot
} from "lucide-react";

const roles = [
  {
    id: "ceo",
    title: "CEO",
    icon: Target,
    tagline: "Executive View",
    oneline: "Board-ready KPIs",
    description: "Margin, revenue, and patient flow in one dashboard. Spot leaks in seconds.",
    conversation: [
      {
        user: "Which clinics hurt margin last week?",
        ai: "Clinics 3, 7, and 12 underperformed. Clinic 3: supply costs hit 14.2% of revenue (vs 8% target) - mainly excess glove orders. Clinic 7: 22% chair vacancy rate. Clinic 12: hygienist overtime up 40%. Combined impact: -$18.4k margin. I've prepared action plans for each - shall I execute?"
      },
      {
        user: "What's our best growth opportunity right now?",
        ai: "Clear winner: expand hygiene capacity at Clinics 2 and 5. Both have 3+ week booking delays and we're losing 15-20 patients/week to competitors. Adding 2 hygienists would cost $14k/month but generate $47k additional revenue at current conversion rates. ROI in 11 weeks. I can draft the job postings and adjust supply orders now."
      }
    ],
    metrics: ["34% faster decisions ⁴", "3.2× ROI ³"]
  },
  {
    id: "cfo",
    title: "CFO",
    icon: DollarSign,
    tagline: "Finance Control",
    oneline: "Real-time spend and accruals",
    description: "Track cash in, cash out, and supplier rebates without spreadsheets.",
    conversation: [
      {
        user: "Are we on budget for Q2 consumables?",
        ai: "Currently 5.3% under budget with $127k spent vs $134k planned. But heads up - composite prices jumping 12% next month across all vendors. If we bulk order now, we lock in current pricing and save $8.9k. Also, you have $4.2k in unclaimed rebates expiring in 10 days. Want me to process both?"
      },
      {
        user: "How's our cash conversion cycle trending?",
        ai: "Improved by 4.2 days this quarter. Collections at 42 days (down from 46). Inventory turns increased to 8.1x from 7.3x - we're holding $31k less in supplies. Only concern: insurance reimbursements from Delta Dental are stretching to 55+ days. I recommend disputing 18 claims totaling $23k that exceed contract terms."
      }
    ],
    metrics: ["22% higher savings ⁵", "99% data accuracy"]
  },
  {
    id: "coo",
    title: "COO",
    icon: Workflow,
    tagline: "Ops Command",
    oneline: "Utilization & staffing at a glance",
    description: "Monitor chair use, appointment mix, and supply levels per op.",
    conversation: [
      {
        user: "Where are we short-staffed tomorrow?",
        ai: "Clinic 7 is at 142% capacity - 3 hygienists handling 5 chairs. Meanwhile, Clinic 3 has 2 hygienists with only 60% bookings. If we shift Sarah from Clinic 3 to 7 for tomorrow, we balance to 95% capacity at both. Also, Dr. Martinez called in sick - Dr. Thompson at Clinic 4 can cover her afternoon procedures. Shall I notify the teams?"
      },
      {
        user: "How can we improve patient flow?",
        ai: "Biggest bottleneck: sterilization turnaround averaging 47 min between patients. If we add a second autoclave at Clinics 2, 5, and 8 ($4.5k each), we cut this to 22 min. That's 3 extra patients/day per clinic = $2,250 daily revenue increase. Also, implementing staggered scheduling would reduce lobby wait times by 65%. Want the optimized schedule template?"
      }
    ],
    metrics: ["28% fewer stockouts ²", "15% higher chair use"]
  },
  {
    id: "procurement",
    title: "Procurement",
    icon: Package,
    tagline: "Smart Sourcing",
    oneline: "Lowest landed cost, guaranteed",
    description: "Forecasts demand, benchmarks every SKU, auto-buys at the best price.",
    conversation: [
      {
        user: "Reorder fluoride varnish for all clinics.",
        ai: "Based on usage patterns, you need 84 boxes. Patterson quoted $47/box but Benco has a flash sale at $38.50/box - saves you $714. BUT if you bundle with your prophy paste order (due in 2 weeks anyway), Henry Schein drops to $36/box with free shipping. Total savings: $924. PO drafted for your approval. Also qualified for Q2 volume rebate of $340."
      },
      {
        user: "Are we overpaying for any supplies?",
        ai: "Yes - 3 categories flagged. Gloves: paying 23% above market (switch to Cranberry saves $2.8k/month). Anesthetic: your contracted rate with Septodont is 31% higher than direct purchasing. Implant supplies: noticed you're buying singles - bulk pricing saves 18%. Total potential monthly savings: $7,430. Want me to renegotiate all three contracts?"
      }
    ],
    metrics: ["32% lower spend ¹", "30% less manual work ¹"]
  }
];

export function RoleSelector() {
  const [selectedRole, setSelectedRole] = useState("ceo");
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<number>(-1);
  const [typedText, setTypedText] = useState<string>("");
  const [isInView, setIsInView] = useState(false);
  const [hasStartedAnimation, setHasStartedAnimation] = useState(false);
  const activeRole = roles.find(r => r.id === selectedRole) || roles[0];
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedAnimation) {
          setIsInView(true);
          setHasStartedAnimation(true);
        }
      },
      { threshold: 0.3 } // Start when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStartedAnimation]);

  // Auto-scroll chat container
  useEffect(() => {
    if (chatContainerRef.current && (visibleMessages > 0 || isTyping >= 0)) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [visibleMessages, isTyping, typedText]);

  // Reset and start chat animation when role changes or section comes into view
  useEffect(() => {
    if (!isInView) return;

    setVisibleMessages(0);
    setIsTyping(-1);
    setTypedText("");
    
    // Start the chat sequence
    const startChat = async () => {
      for (let i = 0; i < activeRole.conversation.length; i++) {
        // Show user message
        await new Promise(resolve => setTimeout(resolve, i === 0 ? 500 : 2500));
        setVisibleMessages(i * 2 + 1);
        
        // Show typing indicator
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsTyping(i);
        
        // Type out AI response
        const aiText = activeRole.conversation[i].ai;
        for (let j = 0; j <= aiText.length; j++) {
          await new Promise(resolve => setTimeout(resolve, 12));
          setTypedText(aiText.substring(0, j));
        }
        
        // Hide typing indicator and show full message
        await new Promise(resolve => setTimeout(resolve, 400));
        setIsTyping(-1);
        setVisibleMessages(i * 2 + 2);
      }
    };
    
    startChat();
  }, [selectedRole, activeRole, isInView]);

  return (
    <section ref={sectionRef} id="roles" className="min-h-screen relative overflow-hidden flex items-center section-background py-24">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 gradient-mesh opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-8">
            <div className="liquid-glass rounded-full px-6 py-3 flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-primary-blue" />
              <span className="text-sm font-semibold text-primary-blue">
                Role-Based Intelligence
              </span>
            </div>
          </div>
          <h2 className="mb-6 leading-tight">
            <span className="block gradient-text">Answers for Everyone</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto body-professional">
            Instant insights, the way you want
          </p>
        </motion.div>

        <div className="max-w-[1400px] mx-auto">
          {/* Minimalist role selector with glassmorphism */}
          <div className="overflow-x-auto -mx-4 px-4 pb-2 scrollbar-hide">
            <div className="flex justify-start sm:justify-center gap-2 mb-4 min-w-fit">
              {roles.map((role) => {
                const Icon = role.icon;
                const isActive = selectedRole === role.id;
                return (
                  <motion.button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`
                      relative px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl overflow-hidden flex-shrink-0
                      ${isActive 
                        ? 'premium-cta text-white shadow-lg transition-all duration-300' 
                        : 'liquid-glass hover:shadow-xl transition-shadow duration-300'
                      }
                      outline-0
                      focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent
                      focus:border-transparent focus-visible:border-transparent
                    `}
                    whileTap={{ scale: 0.96 }}
                    animate={isActive ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ 
                      outline: 'none',
                      WebkitTapHighlightColor: 'transparent'
                    }}
                  >
                    {/* Hyper-realistic glass shine effect - only for non-active buttons */}
                    {!isActive && (
                      <>
                        <motion.div 
                          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-transparent dark:from-white/10" />
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/2 to-transparent transform -skew-x-12 dark:via-white/5" />
                        </motion.div>
                        
                        {/* Subtle depth effect on hover */}
                        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/5 to-transparent" />
                        </div>
                      </>
                    )}
                    
                    {/* Premium shine effect for active buttons */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl" />
                      </motion.div>
                    )}
                    
                    <div className="flex items-center gap-2 sm:gap-2.5 relative z-10">
                      <Icon className={`w-4 h-4 transition-all duration-300 ${isActive ? 'text-white scale-110' : 'text-muted-foreground'}`} />
                      <div className="text-left">
                        <div className={`text-xs sm:text-sm font-semibold transition-colors ${isActive ? 'text-white' : 'text-foreground'}`}>
                          {role.title}
                        </div>
                        <div className={`text-[10px] sm:text-xs transition-colors ${isActive ? 'text-white/90' : 'text-muted-foreground'}`}>
                          {role.tagline}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Content area with better height management */}
          <motion.div
            key={selectedRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="liquid-glass rounded-3xl relative">
              {/* Hyper-realistic glass reflections */}
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent dark:from-white/20" />
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/3 via-transparent to-transparent transform rotate-12 dark:from-white/10" />
              </div>
              
              <div className="grid lg:grid-cols-2 gap-0 relative">
                {/* Left side - Description and metrics - No animations */}
                <div className="p-6 sm:p-8 lg:p-14 flex flex-col justify-center">
                  <div key={`${selectedRole}-content`}>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-primary-blue">
                      {activeRole.title} - {activeRole.tagline}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-primary-blue/80 mb-3 sm:mb-4">
                      {activeRole.oneline}
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl text-text-secondary mb-6 sm:mb-8 leading-relaxed">
                      {activeRole.description}
                    </p>
                    
                    {/* Clean metrics display with glassmorphism - No animations */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-5 mb-6 sm:mb-10">
                      {activeRole.metrics.map((metric, index) => (
                        <div
                          key={`${selectedRole}-metric-${index}`}
                          className="text-center liquid-glass rounded-xl py-3 sm:py-4 px-3 sm:px-4 relative"
                        >
                          {/* Glass shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-transparent opacity-50 dark:via-white/10" />
                          <div className="relative z-10">
                            <div className="text-sm sm:text-base lg:text-lg font-bold text-primary-blue">
                              {metric}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side - AI Conversation Interface with realistic chat animation */}
                <div className="bg-gradient-to-br from-primary-blue/5 to-secondary-blue/5 p-6 sm:p-8 lg:p-14 border-t lg:border-t-0 lg:border-l border-white/20">
                  <div className="max-w-lg mx-auto">
                    <div className="mb-4">
                      <h4 className="text-base sm:text-lg font-medium text-muted-foreground mb-3 sm:mb-4">
                        Live AI Conversation
                      </h4>
                      <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary-blue to-secondary-blue rounded" />
                    </div>

                    {/* Fixed height scrollable chat container */}
                    <div 
                      ref={chatContainerRef}
                      className="h-[350px] sm:h-[400px] lg:h-[450px] overflow-y-auto overflow-x-hidden pr-2 scrollbar-thin scrollbar-thumb-primary-blue/20 scrollbar-track-transparent"
                      style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'rgba(56, 83, 153, 0.2) transparent'
                      }}
                    >
                      <div className="space-y-4 sm:space-y-6">
                        {activeRole.conversation.map((exchange, index) => (
                          <div key={`${selectedRole}-exchange-${index}`} className="space-y-3 sm:space-y-4">
                            {/* User message - container always present */}
                            <div className="flex gap-2 sm:gap-3">
                              <AnimatePresence>
                                {visibleMessages >= index * 2 + 1 && (
                                  <>
                                    <motion.div 
                                      initial={{ scale: 0.8, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                                      className="flex-shrink-0"
                                    >
                                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center relative overflow-hidden shadow-sm">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-full dark:from-white/20" />
                                        <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-blue relative z-10" />
                                      </div>
                                    </motion.div>
                                    <motion.div 
                                      initial={{ opacity: 0, scale: 0.95 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ duration: 0.3 }}
                                      className="flex-1"
                                    >
                                      <div className="liquid-glass rounded-2xl rounded-tl-md px-4 sm:px-5 py-2.5 sm:py-3.5 relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent opacity-50 dark:from-white/10" />
                                        <p className="text-sm sm:text-base text-gray-700 relative z-10">
                                          {exchange.user}
                                        </p>
                                      </div>
                                    </motion.div>
                                  </>
                                )}
                              </AnimatePresence>
                            </div>

                            {/* AI response - container always present */}
                            <div className="flex gap-2 sm:gap-3">
                              <AnimatePresence>
                                {(visibleMessages >= index * 2 + 2 || isTyping === index) && (
                                  <>
                                    <motion.div
                                      initial={{ scale: 0.8, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
                                      className="flex-shrink-0"
                                    >
                                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-primary-blue to-secondary-blue flex items-center justify-center shadow-sm overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" />
                                        <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white relative z-10" />
                                      </div>
                                    </motion.div>
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0.95 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ duration: 0.3 }}
                                      className="flex-1"
                                    >
                                      <div className="liquid-glass-healthcare rounded-2xl rounded-tl-md px-4 sm:px-5 py-2.5 sm:py-3.5">
                                        {isTyping === index ? (
                                          <div className="flex items-center gap-2">
                                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                              {typedText}
                                            </p>
                                            <motion.span
                                              animate={{ opacity: [1, 0] }}
                                              transition={{ duration: 0.5, repeat: Infinity }}
                                              className="inline-block w-0.5 h-3 sm:h-4 bg-gray-700"
                                            />
                                          </div>
                                        ) : (
                                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                            {exchange.ai}
                                          </p>
                                        )}
                                      </div>
                                    </motion.div>
                                  </>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 