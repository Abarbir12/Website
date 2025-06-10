"use client";

import { motion } from "framer-motion";
import { 
  Database, 
  ShoppingBag, 
  DollarSign, 
  Building2, 
  Shield,
  Zap,
  Sparkles
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const dataSources = [
  { 
    icon: Database, 
    label: "Practice Management Systems",
    color: "from-blue-500 to-blue-600",
    delay: 0
  },
  { 
    icon: ShoppingBag, 
    label: "Procurement Platforms",
    color: "from-purple-500 to-purple-600",
    delay: 0.1
  },
  { 
    icon: DollarSign, 
    label: "Financial Software",
    color: "from-green-500 to-green-600",
    delay: 0.2
  },
  { 
    icon: Building2, 
    label: "Vendor Portals",
    color: "from-orange-500 to-orange-600",
    delay: 0.3
  },
  { 
    icon: Shield, 
    label: "Compliance Systems",
    color: "from-red-500 to-red-600",
    delay: 0.4
  }
];

export function NetworkVisualization() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-purple-50 text-purple-700 border-purple-200">
            <Zap className="w-3 h-3 mr-1" />
            Seamless Integration
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            We Connect What You Already Have
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            No migration, no disruption. Just intelligence.
          </p>
        </motion.div>

        {/* Network Visualization */}
        <div className="relative max-w-4xl mx-auto h-[600px]">
          {/* SVG Connections */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            {dataSources.map((source, index) => {
              const angle = (index * 2 * Math.PI) / dataSources.length - Math.PI / 2;
              const radius = 200;
              const x = 50 + Math.cos(angle) * 35;
              const y = 50 + Math.sin(angle) * 35;
              
              return (
                <motion.line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={`${x}%`}
                  y2={`${y}%`}
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 1, delay: source.delay }}
                />
              );
            })}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Hub */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="relative">
              {/* Pulse effect */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl"
              />
              
              {/* Main hub */}
              <div className="relative w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <Sparkles className="w-8 h-8 mx-auto mb-1" />
                  <p className="text-sm font-bold">Your AI</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Sources */}
          {dataSources.map((source, index) => {
            const angle = (index * 2 * Math.PI) / dataSources.length - Math.PI / 2;
            const radius = 250;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            const Icon = source.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: source.delay }}
                className="absolute top-1/2 left-1/2 z-10"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group cursor-pointer"
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${source.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}
                  />
                  
                  {/* Card */}
                  <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-slate-200 hover:border-slate-300 transition-colors">
                    <div className={`w-12 h-12 bg-gradient-to-r ${source.color} rounded-xl flex items-center justify-center mb-3`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-slate-700 max-w-[150px]">
                      {source.label}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-semibold text-slate-900 mb-2">
            Your data stays where it is.
          </p>
          <p className="text-2xl font-semibold text-slate-900 mb-6">
            Our AI brings it together when you need it.
          </p>
          <p className="text-lg text-slate-600">
            No migration. No disruption. Just intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 