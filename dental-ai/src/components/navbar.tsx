"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { href: "#roles", label: "Solutions" },
  { href: "#integrations", label: "Integrations" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = 0; // Offset to ensure content is not cut off
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`liquid-glass rounded-2xl backdrop-blur-glass saturate-glass transition-all duration-300 ${
            isScrolled ? "shadow-lg" : ""
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <Link 
              href="#hero" 
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10">
                <Image
                  src="/doe-logo.svg"
                  alt="doe logo"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  doe
                </h1>
                <p className="text-xs text-muted-foreground">Intelligence Platform</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-medium text-muted-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  className="text-sm font-medium"
                  asChild
                >
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button
                  size="sm"
                  className="premium-cta text-white font-medium group"
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
                    Request a Demo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="px-6 py-4 border-t border-border/50">
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm font-medium text-muted-foreground py-2"
                        onClick={(e) => {
                          handleNavClick(e, link.href);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-border/50">
                    <Button
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <Link href="/login">Sign In</Link>
                    </Button>
                    <Button
                      className="w-full premium-cta text-white"
                      onClick={(e) => {
                        e.preventDefault();
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          const y = contactSection.getBoundingClientRect().top + window.pageYOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
} 