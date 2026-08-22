'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  RefreshCw,
  Moon,
  Share2,
  Users,
  BookOpen,
  Star,
  ListOrdered,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { fraunces } from '../app/layout';

const features = [
  {
    icon: RefreshCw,
    title: 'Cross-device Sync',
    description:
      'Start reading on your phone and pick up right where you left off on your tablet or desktop.',
    accentBg: 'bg-sky-50 group-hover:bg-sky-500',
    accentIcon: 'text-sky-600 group-hover:text-white',
  },
  {
    icon: Moon,
    title: 'Night Mode',
    description:
      'Protect your eyes during late-night reading sessions with a beautifully optimized dark theme.',
    accentBg: 'bg-indigo-50 group-hover:bg-indigo-500',
    accentIcon: 'text-indigo-600 group-hover:text-white',
  },
  {
    icon: Share2,
    title: 'Social Sharing',
    description:
      'Share your favorite quotes, reviews, and reading lists easily with friends and followers.',
    accentBg: 'bg-emerald-50 group-hover:bg-emerald-500',
    accentIcon: 'text-emerald-600 group-hover:text-white',
  },
];

const stats = [
  {
    value: '2.4M',
    label: 'ACTIVE READERS',
    icon: Users,
  },
  {
    value: '15M+',
    label: 'BOOKS READ',
    icon: BookOpen,
  },
  {
    value: '4.8',
    label: 'AVERAGE RATING',
    icon: Star,
  },
  {
    value: '10k+',
    label: 'CURATED LISTS',
    icon: ListOrdered,
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function WhyChooseSection() {
  return (
    <div className="w-full space-y-8 font-sans">
      <section className="container mx-auto px-4 md:px-8 pt-8">
        <div className="relative overflow-hidden bg-gradient-to-b from-[#f2f9fc] via-[#e6f4fa] to-[#dcf0f8] rounded-3xl p-6 sm:p-10 md:p-14 border border-[#bce0f0]/80 shadow-lg shadow-sky-900/5 text-center">
          
          {/* Ambient Lighting Accents */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="relative max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
            <Badge
              variant="outline"
              className="px-3.5 py-1 bg-white/80 border-sky-200 text-[#024968] font-bold text-xs uppercase tracking-wider rounded-full shadow-sm"
            >
              Why Us
            </Badge>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#0c4a60] tracking-tight ${fraunces.className}`}
            >
              Why Choose Web Reader?
            </h2>
            <p className="text-[#3b6878] text-sm sm:text-base md:text-lg leading-relaxed">
              Enhance your reading experience with features designed for modern book lovers.
            </p>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="h-full">
                  <Card className="relative h-full bg-white/80 backdrop-blur-md border border-[#bce0f0] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-sky-900/10 hover:border-[#0c4a60]/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-start text-center group">
                    <CardHeader className="p-0 pb-4 w-full flex flex-col items-center space-y-4">
                      
                      {/* Floating Icon Badge */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.3 }}
                        className={`w-14 h-14 rounded-2xl ${feature.accentBg} flex items-center justify-center transition-colors duration-300 shadow-sm`}
                      >
                        <Icon className={`w-7 h-7 stroke-[1.8] ${feature.accentIcon} transition-colors duration-300`} />
                      </motion.div>

                      <CardTitle
                        className={`text-xl font-semibold text-[#0c4a60] group-hover:text-[#083444] transition-colors ${fraunces.className}`}
                      >
                        {feature.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p className="text-[#4a7280] text-sm sm:text-base leading-relaxed font-medium">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <StatsSection />
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="w-full container mx-auto px-4 md:px-8 pb-8">
      <Card className="bg-gradient-to-r from-[#e6f4fa] via-[#edf7fc] to-[#e6f4fa] border border-[#bce0f0]/80 rounded-2xl shadow-sm overflow-hidden backdrop-blur-md">
        <CardContent className="p-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#bce0f0]/70"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative flex flex-col items-center justify-center p-8 transition-all duration-300 hover:bg-white/60 cursor-pointer"
                >
                  {/* Stat Value */}
                  <div className="mb-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                    <span
                      className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c4a60] tracking-tight ${fraunces.className}`}
                    >
                      {stat.value}
                    </span>
                  </div>

                  {/* Stat Label & Icon */}
                  <div className="flex items-center gap-2 text-[#3b6878] group-hover:text-[#0c4a60] transition-colors duration-300">
                    <Icon className="w-4 h-4 stroke-[2] transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-xs font-bold tracking-wider uppercase font-sans">
                      {stat.label}
                    </span>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#0c4a60] rounded-full transition-all duration-300 group-hover:w-16" />
                </motion.div>
              );
            })}
          </motion.div>
        </CardContent>
      </Card>
    </section>
  );
}