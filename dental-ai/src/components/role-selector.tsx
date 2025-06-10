"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  DollarSign, 
  Settings, 
  ShoppingCart,
  ArrowRight,
  Sparkles
} from "lucide-react";

const roles = [
  {
    id: "ceo",
    title: "CEO",
    icon: Briefcase,
    color: "blue",
    headline: "Ask Strategic Questions, Get Strategic Answers",
    questions: [
      "Which practices are ready for expansion?",
      "Show me our efficiency vs industry benchmarks",
      "What's driving profitability differences between regions?"
    ],
    benefit: "Data-driven decisions without the data wrestling."
  },
  {
    id: "cfo",
    title: "CFO",
    icon: DollarSign,
    color: "green",
    headline: "Financial Intelligence at Your Fingertips",
    questions: [
      "Where are we overspending compared to budget?",
      "Project cash flow impact of adding 10 locations",
      "Which vendor relationships need renegotiation?"
    ],
    benefit: "Real-time financial visibility across every location."
  },
  {
    id: "coo",
    title: "COO",
    icon: Settings,
    color: "purple",
    headline: "Operational Insights Without the Spreadsheets",
    questions: [
      "Which practices have ordering anomalies?",
      "Compare productivity metrics across all locations",
      "Show me compliance gaps by region"
    ],
    benefit: "Manage by exception, not by Excel."
  },
  {
    id: "procurement",
    title: "Procurement Manager",
    icon: ShoppingCart,
    color: "orange",
    headline: "Your AI Co-Pilot for Smarter Purchasing",
    questions: [
      "Find me better prices on our top 100 items",
      "Which locations are ordering off-contract?",
      "Set up automated reordering for consumables"
    ],
    benefit: "Strategic procurement, not just processing POs."
  }
];

export function RoleSelector() {
  return (
    <section id="roles" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
            <Sparkles className="w-3 h-3 mr-1" />
            Tailored Intelligence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            One Platform, Every Perspective
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Designed for every decision maker in your organization
          </p>
        </motion.div>

        <Tabs defaultValue="ceo" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto p-1 bg-slate-100">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <TabsTrigger
                  key={role.id}
                  value={role.id}
                  className="flex flex-col gap-2 py-4 px-6 data-[state=active]:bg-white data-[state=active]:shadow-md transition-all"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{role.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {roles.map((role) => (
            <TabsContent key={role.id} value={role.id} className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 md:p-12 border-0 shadow-xl bg-gradient-to-br from-white to-slate-50">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                        {role.headline}
                      </h3>
                      <div className="space-y-4 mb-8">
                        {role.questions.map((question, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="mt-1">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                                <ArrowRight className="w-3 h-3 text-white" />
                              </div>
                            </div>
                            <p className="text-lg text-slate-700 italic">
                              "{question}"
                            </p>
                          </motion.div>
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50">
                        <Sparkles className="w-5 h-5 text-blue-600" />
                        <p className="font-semibold text-blue-700">
                          {role.benefit}
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="aspect-square max-w-sm mx-auto">
                        {/* Decorative Visual */}
                        <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                          
                          {/* Animated Elements */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              animate={{ 
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                              }}
                              transition={{ 
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="relative"
                            >
                              {React.createElement(role.icon, {
                                className: "w-32 h-32 text-slate-400"
                              })}
                            </motion.div>
                          </div>
                          
                          {/* Floating Particles */}
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-40"
                              style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                              }}
                              animate={{
                                y: [-20, 20],
                                x: [-10, 10],
                                opacity: [0.2, 0.6, 0.2],
                              }}
                              transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 2,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

const React = require('react'); 