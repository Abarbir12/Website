"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowRight, Lock, Calendar, Trophy, Sparkles } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  title: z.string().min(1, "Please select your title"),
  organization: z.string().min(2, "Organization name is required"),
  locations: z.string().min(1, "Number of locations is required"),
  question: z.string().min(10, "Please share your biggest question"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function FinalCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const getButtonText = () => {
    const texts: Record<string, string> = {
      CEO: "Get Strategic Intelligence",
      CFO: "Get Financial Intelligence",
      COO: "Get Operational Intelligence",
      "Procurement Manager": "Get Procurement Intelligence",
    };
    return texts[selectedTitle] || "Get Started";
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast.success("Thank you! We'll be in touch within 48 hours.", {
      description: "Check your email for next steps.",
    });
    
    reset();
    setSelectedTitle("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Limited Early Access</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Stop Guessing. Start Knowing.
            </h2>
            <p className="text-xl text-slate-300">
              Join innovative DSOs building the future of data-driven dentistry.
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 md:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      {...register("name")}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400"
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="title" className="text-white mb-2">
                      Your Title
                    </Label>
                    <Select
                      onValueChange={(value) => {
                        setSelectedTitle(value);
                        setValue("title", value);
                      }}
                    >
                      <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-blue-400 focus:ring-blue-400">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CEO">CEO</SelectItem>
                        <SelectItem value="CFO">CFO</SelectItem>
                        <SelectItem value="COO">COO</SelectItem>
                        <SelectItem value="Procurement Manager">Procurement Manager</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.title && (
                      <p className="text-red-400 text-sm mt-1">{errors.title.message}</p>
                    )}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="organization" className="text-white mb-2">
                      Organization Name
                    </Label>
                    <Input
                      id="organization"
                      {...register("organization")}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400"
                      placeholder="Smile Dental Group"
                    />
                    {errors.organization && (
                      <p className="text-red-400 text-sm mt-1">{errors.organization.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="locations" className="text-white mb-2">
                      Number of Locations
                    </Label>
                    <Input
                      id="locations"
                      type="number"
                      {...register("locations")}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400"
                      placeholder="25"
                      min="1"
                    />
                    {errors.locations && (
                      <p className="text-red-400 text-sm mt-1">{errors.locations.message}</p>
                    )}
                  </div>
                </div>

                {/* Question */}
                <div>
                  <Label htmlFor="question" className="text-white mb-2">
                    Your Biggest Unanswered Question
                  </Label>
                  <Textarea
                    id="question"
                    {...register("question")}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400 min-h-[100px]"
                    placeholder="What keeps you up at night about your dental organization?"
                  />
                  {errors.question && (
                    <p className="text-red-400 text-sm mt-1">{errors.question.message}</p>
                  )}
                </div>

                {/* Row 3 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-white mb-2">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400"
                      placeholder="john@smiledental.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-white mb-2">
                      Phone (Optional)
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                        />
                        Processing...
                      </span>
                    ) : (
                      <>
                        {getButtonText()}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>

              {/* Trust Elements */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-slate-400">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm">Your information is confidential</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">We'll respond within 48 hours</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Trophy className="w-4 h-4" />
                  <span className="text-sm">Only 10 spots available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 