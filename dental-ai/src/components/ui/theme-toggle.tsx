"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Laptop, Sun, Moon } from "lucide-react";

const options = [
  { id: "system", label: "System", icon: Laptop },
  { id: "light", label: "Light", icon: Sun },
  { id: "dark", label: "Dark", icon: Moon },
] as const;

export type ThemeOption = typeof options[number]["id"];

// Apply theme immediately without waiting for React
const applyTheme = (theme: ThemeOption) => {
  const root = document.documentElement;
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const shouldDark = theme === "dark" || (theme === "system" && mq.matches);
  
  // Disable transitions temporarily
  root.classList.add("theme-switching");
  
  // Apply theme
  if (shouldDark) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  
  // Re-enable transitions after a frame
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      root.classList.remove("theme-switching");
    });
  });
  
  // Save to localStorage
  localStorage.setItem("theme", theme);
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeOption>("system");

  // Fast theme switching handler
  const handleThemeChange = useCallback((newTheme: ThemeOption) => {
    // Apply immediately for instant feedback
    applyTheme(newTheme);
    // Update state for UI consistency
    setTheme(newTheme);
  }, []);

  // Load stored preference on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme") as ThemeOption | null;
    if (stored) {
      applyTheme(stored);
      setTheme(stored);
    }
  }, []);

  // Update when system preference changes (only if user chose system)
  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      applyTheme("system");
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      <div className="liquid-glass flex gap-1 px-3 py-1 rounded-full backdrop-blur-md shadow-sm dark:ring-1 dark:ring-white/10 pointer-events-auto will-change-auto">
        {options.map(({ id, label, icon: Icon }) => {
          const isActive = theme === id;
          
          return (
            <button
              key={id}
              aria-label={`Use ${label} theme`}
              className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium transition-colors duration-150
                ${isActive ?
                  "bg-gradient-to-r from-primary-blue to-secondary-blue text-white" :
                  "hover:bg-white/10 dark:hover:bg-white/10 text-foreground/80"}
              `}
              onClick={() => handleThemeChange(id)}
            >
              {/* Icon with rotation animation */}
              <motion.div
                animate={{ 
                  rotate: isActive ? 360 : 0
                }}
                transition={{ 
                  duration: 0.3, 
                  ease: "easeOut"
                }}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
              </motion.div>
              
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
} 