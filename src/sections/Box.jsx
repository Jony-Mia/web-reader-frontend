'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MessageSquare, PenTool, Store, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { inter } from '../app/layout';

const services = [
  {
    icon: BookOpen,
    title: 'Digital Library',
    description:
      'Access thousands of curated books and articles in a distraction-free environment.',
    bgColor: 'bg-sky-50 group-hover:bg-sky-500',
    iconColor: 'text-sky-600 group-hover:text-white',
    badgeColor: 'bg-sky-100 text-sky-700',
  },
  {
    icon: MessageSquare,
    title: 'Community Hub',
    description:
      'Engage in thoughtful discussions and share insights with fellow readers.',
    bgColor: 'bg-emerald-50 group-hover:bg-emerald-500',
    iconColor: 'text-emerald-600 group-hover:text-white',
    badgeColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: PenTool,
    title: 'Author Tools',
    description:
      'Powerful analytics and drafting tools designed for digital-first creators.',
    bgColor: 'bg-blue-50 group-hover:bg-blue-600',
    iconColor: 'text-blue-600 group-hover:text-white',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Store,
    title: 'Marketplace',
    description:
      'Discover and purchase premium content directly from independent authors.',
    bgColor: 'bg-rose-50 group-hover:bg-rose-500',
    iconColor: 'text-rose-600 group-hover:text-white',
    badgeColor: 'bg-rose-100 text-rose-700',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 font-sans">
      {/* Decorative Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-sky-200/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0c4a60] bg-sky-100/80 border border-sky-200/60 rounded-full shadow-sm">
            What We Offer
          </span>
          <h2
            className={`${inter.className} text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0c4a60]`}
          >
            Our Services
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Everything you need to read, write, engage, and grow within a unified digital ecosystem.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div key={index} variants={cardVariants} className="h-full">
                <Card className="relative h-full bg-white/80 backdrop-blur-md border border-sky-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-sky-900/10 hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 p-6 flex flex-col justify-between group overflow-hidden">
                  
                  {/* Hover Arrow Indicator */}
                  <div className="absolute top-4 right-4 text-slate-300 group-hover:text-[#0c4a60] transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>

                  <CardContent className="p-0 flex flex-col items-center text-center space-y-4">
                    {/* Animated Icon Badge */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                      className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center transition-colors duration-300 shadow-sm`}
                    >
                      <Icon className={`w-7 h-7 stroke-[1.8] ${service.iconColor} transition-colors duration-300`} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-base font-bold tracking-wide text-slate-800 group-hover:text-[#0c4a60] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}