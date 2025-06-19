"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ArrowRight } from "lucide-react";

import { Glass } from "@/components/glass";

// Contact form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid work email"),
  phone: z.string().optional(),
  dsoName: z.string().min(1, "DSO name is required"),
  dsoSize: z.string().min(1, "DSO size is required"),
  aiToolsExperience: z.string().min(1, "Please share your AI experience"),
  source: z.string().min(1, "Please tell us how you heard about us"),
});

type FormData = z.infer<typeof formSchema>;

export function FinalCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast.success("Thank you! We'll be in touch within 48 hours.", {
      description: "Check your email for next steps.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 relative section-background overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Ready to Transform Your Group?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto px-4 sm:px-0">
              Add AI superpowers today.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glassmorphism container (unified) */}
              <div className="liquid-glass rounded-2xl sm:rounded-3xl relative">
                {/* Hyper-realistic glass reflections */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent dark:from-white/20" />
                  <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/3 via-transparent to-transparent transform rotate-12 dark:from-white/10" />
                </div>
                
                {/* Form content */}
                <div className="relative z-10 p-6 sm:p-8 md:p-10">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-semibold text-gray-800">
                          First Name
                        </Label>
                        <Input 
                          id="firstName" 
                          {...register("firstName")} 
                          placeholder="Jane"
                          className="h-11 sm:h-12 bg-white/40 backdrop-blur-sm border-white/50 text-gray-900 placeholder:text-gray-600 focus:bg-white/60 focus:border-white/70 transition-all duration-200 rounded-xl text-base"
                        />
                        {errors.firstName && (
                          <p className="text-red-600 text-xs sm:text-sm font-medium">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-semibold text-gray-800">
                          Last Name
                        </Label>
                        <Input 
                          id="lastName" 
                          {...register("lastName")} 
                          placeholder="Doe"
                          className="h-11 sm:h-12 bg-white/40 backdrop-blur-sm border-white/50 text-gray-900 placeholder:text-gray-600 focus:bg-white/60 focus:border-white/70 transition-all duration-200 rounded-xl text-base"
                        />
                        {errors.lastName && (
                          <p className="text-red-600 text-xs sm:text-sm font-medium">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-800">
                        Work Email
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        {...register("email")} 
                        placeholder="jane@yourdentalpractice.com"
                        className="h-11 sm:h-12 bg-white/40 backdrop-blur-sm border-white/50 text-gray-900 placeholder:text-gray-600 focus:bg-white/60 focus:border-white/70 transition-all duration-200 rounded-xl text-base"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-xs sm:text-sm font-medium">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold text-gray-800">
                        Phone Number
                      </Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        {...register("phone")} 
                        placeholder="(555) 123-4567"
                        className="h-11 sm:h-12 bg-white/40 backdrop-blur-sm border-white/50 text-gray-900 placeholder:text-gray-600 focus:bg-white/60 focus:border-white/70 transition-all duration-200 rounded-xl text-base"
                        inputMode="tel"
                      />
                    </div>

                    {/* DSO Name */}
                    <div className="space-y-2">
                      <Label htmlFor="dsoName" className="text-sm font-semibold text-gray-800">
                        Name of your DSO
                      </Label>
                      <Input 
                        id="dsoName" 
                        {...register("dsoName")} 
                        placeholder="Enter your DSO name"
                        className="h-11 sm:h-12 bg-white/40 backdrop-blur-sm border-white/50 text-gray-900 placeholder:text-gray-600 focus:bg-white/60 focus:border-white/70 transition-all duration-200 rounded-xl text-base"
                      />
                      {errors.dsoName && (
                        <p className="text-red-600 text-xs sm:text-sm font-medium">{errors.dsoName.message}</p>
                      )}
                    </div>

                    {/* DSO Size */}
                    <div className="space-y-2">
                      <Label htmlFor="dsoSize" className="text-sm font-semibold text-gray-800">
                        DSO Size
                      </Label>
                      <Input 
                        id="dsoSize" 
                        {...register("dsoSize")} 
                        placeholder="e.g., 5-10 locations, 50+ locations"
                        className="h-11 sm:h-12 bg-white/40 backdrop-blur-sm border-white/50 text-gray-900 placeholder:text-gray-600 focus:bg-white/60 focus:border-white/70 transition-all duration-200 rounded-xl text-base"
                      />
                      {errors.dsoSize && (
                        <p className="text-red-600 text-xs sm:text-sm font-medium">{errors.dsoSize.message}</p>
                      )}
                    </div>

                    {/* AI Tools Experience */}
                    <div className="space-y-2">
                      <Label htmlFor="aiToolsExperience" className="text-sm font-semibold text-gray-800">
                        Have you used AI tools before?
                      </Label>
                      <Input 
                        id="aiToolsExperience" 
                        {...register("aiToolsExperience")} 
                        placeholder="e.g., Yes, ChatGPT for reports / No, new to AI"
                        className="h-11 sm:h-12 bg-white/40 backdrop-blur-sm border-white/50 text-gray-900 placeholder:text-gray-600 focus:bg-white/60 focus:border-white/70 transition-all duration-200 rounded-xl text-base"
                      />
                      {errors.aiToolsExperience && (
                        <p className="text-red-600 text-xs sm:text-sm font-medium">{errors.aiToolsExperience.message}</p>
                      )}
                    </div>

                    {/* Source - Changed to text input */}
                    <div className="space-y-2">
                      <Label htmlFor="source" className="text-sm font-semibold text-gray-800">
                        How did you hear about us?
                      </Label>
                      <Input 
                        id="source" 
                        {...register("source")} 
                        placeholder="e.g., Referral, Social media..."
                        className="h-11 sm:h-12 bg-white/40 backdrop-blur-sm border-white/50 text-gray-900 placeholder:text-gray-600 focus:bg-white/60 focus:border-white/70 transition-all duration-200 rounded-xl text-base"
                      />
                      {errors.source && (
                        <p className="text-red-600 text-xs sm:text-sm font-medium">{errors.source.message}</p>
                      )}
                    </div>

                    {/* Submit Button - Using premium-cta styling */}
                    <div className="pt-2 sm:pt-4">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full premium-cta text-white font-medium group h-12 sm:h-14 flex items-center justify-center gap-2 text-base sm:text-lg" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Request a Demo</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Privacy Note */}
                    <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed pt-2">
                      We respect your privacy and will never share your information.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 