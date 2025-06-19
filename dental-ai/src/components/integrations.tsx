"use client";

import { motion } from "framer-motion";
import { Cloud, CheckCircle, TrendingUp, Database, Package, Layers } from "lucide-react";

export function IntegrationsSection() {
  // We'll use logo.dev but with fallback to text if images fail to load
  const LOGO_API_TOKEN = "pk_BnMkbL9lT2mUGZTLxenEfw";
  
  const practiceManagementSystems = [
    { name: "Denticon", domain: "planetdds.com" },
    { name: "Carestack", domain: "carestack.com" },
    { name: "Open Dental", domain: "opendental.com" },
    { name: "Eaglesoft", domain: "eaglesoft.net" }
  ];
  
  const vendors = [
    { name: "Henry Schein", domain: "henryschein.com" },
    { name: "Patterson", domain: "pattersondental.com" },
    { name: "Amazon Business", domain: "amazon.com" },
    { name: "NET32", domain: "net32.com" }
  ];
  
  const otherIntegrations = [
    { name: "Gmail", domain: "gmail.com", icon: "G" },
    { name: "Slack", domain: "slack.com" },
    { name: "Notion", domain: "notion.so" },
    { name: "Salesforce", domain: "salesforce.com" }
  ];

  return (
    <section id="integrations" className="relative py-24 overflow-hidden section-background">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 gradient-mesh opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0.8, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-8">
            <div className="liquid-glass rounded-full px-6 py-3 flex items-center gap-3">
              <Database className="w-5 h-5 text-primary-blue" />
              <span className="text-sm font-semibold text-primary-blue">
                Seamless Integration
              </span>
            </div>
          </div>

          <h2 className="mb-6 leading-tight">
            <span className="block">Your DSO</span>
            <span className="block gradient-text">Connected & Intelligent</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto body-professional">
            Seamlessly integrate all your existing systems. Our AI engine transforms scattered data into completed tasks and strategic insights.
          </p>
        </motion.div>

        {/* Main Integration Grid - No outer container, just the grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center relative">
            
            {/* Animated Connection Lines - Visible on all screen sizes */}
            <motion.div 
              className="absolute inset-0 pointer-events-none z-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              <svg 
                viewBox="0 0 1000 600" 
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Static gradient for lines */}
                  <linearGradient id="lineGradient" 
                                  gradientUnits="userSpaceOnUse"
                                  x1="0" y1="0" x2="1000" y2="0">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                  </linearGradient>
                  
                  {/* Animated gradient for flow effect */}
                  <linearGradient id="flowGradient" 
                                  gradientUnits="userSpaceOnUse"
                                  x1="0" y1="0" x2="1000" y2="0">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0">
                      <animate attributeName="offset" from="-0.2" to="1.2" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="0.1" stopColor="#60a5fa" stopOpacity="0.8">
                      <animate attributeName="offset" from="-0.1" to="1.3" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="0.2" stopColor="#60a5fa" stopOpacity="0">
                      <animate attributeName="offset" from="0" to="1.4" dur="3s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                </defs>
                
                {/* Static paths from left to center - all three cards */}
                {/* Top card to center */}
                <path
                  d="M 280 120 Q 400 120 500 300"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />
                <path
                  d="M 280 120 Q 400 120 500 300"
                  stroke="url(#flowGradient)"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.6"
                />
                
                {/* Middle card to center */}
                <path
                  d="M 280 300 L 500 300"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />
                <path
                  d="M 280 300 L 500 300"
                  stroke="url(#flowGradient)"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.6"
                />
                
                {/* Bottom card to center */}
                <path
                  d="M 280 480 Q 400 480 500 300"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />
                <path
                  d="M 280 480 Q 400 480 500 300"
                  stroke="url(#flowGradient)"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.6"
                />
                
                {/* Static paths from center to right */}
                {/* Center to top right */}
                <path
                  d="M 500 300 Q 600 200 720 200"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />
                <path
                  d="M 500 300 Q 600 200 720 200"
                  stroke="url(#flowGradient)"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.6"
                />
                
                {/* Center to bottom right */}
                <path
                  d="M 500 300 Q 600 400 720 400"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />
                <path
                  d="M 500 300 Q 600 400 720 400"
                  stroke="url(#flowGradient)"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
            </motion.div>

            {/* Left Column - Data Sources */}
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 relative z-10">
              {/* Practice Management Software */}
              <motion.div
                initial={{ opacity: 0.6, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="liquid-glass rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-4 lg:p-6"
              >
                <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 mb-2 sm:mb-3 lg:mb-4">
                  <Database className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary-blue flex-shrink-0" />
                  <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-primary-blue leading-tight">
                    <span className="hidden sm:inline">Practice Management Software</span>
                    <span className="sm:hidden">Practice Software</span>
                  </h3>
                </div>
                <div className="space-y-1 sm:space-y-2 lg:space-y-3">
                  {practiceManagementSystems.map((system) => (
                    <div key={system.domain} className="flex items-center gap-1 sm:gap-2 lg:gap-3">
                      <img
                        src={`https://img.logo.dev/${system.domain}?token=${LOGO_API_TOKEN}&size=32`}
                        alt={`${system.name} logo`}
                        className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded object-contain flex-shrink-0"
                        loading="lazy"
                        onError={(e) => {
                          // Hide image and show text fallback
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded bg-gradient-to-br from-primary-blue/20 to-secondary-blue/20 flex items-center justify-center text-[8px] sm:text-[10px] lg:text-xs font-bold text-primary-blue">
                        {system.name.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="text-[10px] sm:text-xs lg:text-sm font-medium truncate">{system.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Vendors */}
              <motion.div
                initial={{ opacity: 0.6, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="liquid-glass rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-4 lg:p-6"
              >
                <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 mb-2 sm:mb-3 lg:mb-4">
                  <Package className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary-blue flex-shrink-0" />
                  <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-primary-blue">Vendors</h3>
                </div>
                <div className="space-y-1 sm:space-y-2 lg:space-y-3">
                  {vendors.map((vendor) => (
                    <div key={vendor.domain} className="flex items-center gap-1 sm:gap-2 lg:gap-3">
                      <img
                        src={`https://img.logo.dev/${vendor.domain}?token=${LOGO_API_TOKEN}&size=32`}
                        alt={`${vendor.name} logo`}
                        className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded object-contain flex-shrink-0"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded bg-gradient-to-br from-primary-blue/20 to-secondary-blue/20 flex items-center justify-center text-[8px] sm:text-[10px] lg:text-xs font-bold text-primary-blue">
                        {vendor.name.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="text-[10px] sm:text-xs lg:text-sm font-medium truncate">{vendor.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Other */}
              <motion.div
                initial={{ opacity: 0.6, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="liquid-glass rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-4 lg:p-6"
              >
                <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 mb-2 sm:mb-3 lg:mb-4">
                  <Layers className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary-blue flex-shrink-0" />
                  <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-primary-blue">Other</h3>
                </div>
                <div className="grid grid-cols-2 gap-1 sm:gap-2 lg:gap-3">
                  {otherIntegrations.map((integration) => (
                    <div key={integration.domain} className="flex items-center gap-1 lg:gap-2">
                      <img
                        src={`https://img.logo.dev/${integration.domain}?token=${LOGO_API_TOKEN}&size=24`}
                        alt={`${integration.name} logo`}
                        className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 rounded object-contain flex-shrink-0"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 rounded bg-gradient-to-br from-primary-blue/20 to-secondary-blue/20 flex items-center justify-center text-[6px] sm:text-[8px] lg:text-xs font-bold text-primary-blue">
                        {integration.icon}
                      </div>
                      <span className="text-[8px] sm:text-[10px] lg:text-xs font-medium truncate">{integration.name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] sm:text-xs lg:text-sm font-semibold text-muted-foreground mt-2 sm:mt-3 lg:mt-4">
                  60+ more integrations
                </p>
              </motion.div>
            </div>

            {/* Center - AI Engine */}
            <div className="relative flex items-center justify-center py-6 sm:py-8 lg:py-12 z-20">
              {/* AI Engine Circle with glassmorphic effect */}
            <motion.div
                initial={{ opacity: 0.8, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full liquid-glass flex flex-col items-center justify-center shadow-xl" style={{ background: 'rgba(255, 255, 255, 0.25)' }}>
                  <Cloud className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-primary-blue mb-1 lg:mb-2" />
                  <span className="text-xs sm:text-base lg:text-xl font-bold gradient-text">AI Engine</span>
                </div>
                
                {/* Pulsing ring effect */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-pulse" />
                <div className="absolute inset-0 rounded-full border border-blue-400/30 animate-pulse animation-delay-1000" />
            </motion.div>
          </div>

            {/* Right Column - Outputs */}
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 relative z-10">
              {/* AI-Completed Tasks */}
              <motion.div
                initial={{ opacity: 0.6, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="liquid-glass rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-4 lg:p-6"
              >
                <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 mb-2 sm:mb-3 lg:mb-4">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-primary-blue flex-shrink-0" />
                  <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-primary-blue">
                    AI Agents
                  </h3>
                </div>
                <ul className="space-y-1 lg:space-y-2 text-[10px] sm:text-xs lg:text-sm text-text-secondary">
                  <li className="flex items-start">
                    <span className="mr-1 lg:mr-2 text-primary-blue">•</span>
                    <span><span className="hidden sm:inline">Automated </span>supplies purchasing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1 lg:mr-2 text-primary-blue">•</span>
                    <span><span className="hidden sm:inline">Vendor </span>contract management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1 lg:mr-2 text-primary-blue">•</span>
                    <span>Automated reporting</span>
                  </li>
                </ul>
              </motion.div>

              {/* Actionable Insights */}
              <motion.div
                initial={{ opacity: 0.6, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="liquid-glass rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-4 lg:p-6"
              >
                <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 mb-2 sm:mb-3 lg:mb-4">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-primary-blue flex-shrink-0" />
                  <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-primary-blue">
                    <span className="hidden sm:inline">Actionable </span>Insights
                  </h3>
                </div>
                <ul className="space-y-1 lg:space-y-2 text-[10px] sm:text-xs lg:text-sm text-text-secondary">
                  <li className="flex items-start">
                    <span className="mr-1 lg:mr-2 text-primary-blue">•</span>
                    <span>Cost optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1 lg:mr-2 text-primary-blue">•</span>
                    <span>Revenue forecasts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1 lg:mr-2 text-primary-blue">•</span>
                    <span>Workflow bottlenecks</span>
                  </li>
                </ul>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
