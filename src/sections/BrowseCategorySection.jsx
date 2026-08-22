'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Book,
  Rocket,
  Search,
  Sparkles,
  Heart,
  Moon,
  User,
  Feather,
  FlaskConical,
  Activity,
  Briefcase,
  Palette,
  PenTool,
  Baby,
  Flame,
  ArrowUpRight,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  { id: 'fiction', label: 'Fiction', icon: Book, count: '1.2k+ Books' },
  { id: 'sci-fi', label: 'Sci-Fi', icon: Rocket, count: '850+ Books' },
  { id: 'mystery', label: 'Mystery', icon: Search, count: '940+ Books' },
  { id: 'fantasy', label: 'Fantasy', icon: Sparkles, count: '1.5k+ Books' },
  { id: 'romance', label: 'Romance', icon: Heart, count: '1.1k+ Books' },
  { id: 'horror', label: 'Horror', icon: Moon, count: '430+ Books' },
  { id: 'biography', label: 'Biography', icon: User, count: '620+ Books' },
  { id: 'history', label: 'History', icon: Feather, count: '780+ Books' },
  { id: 'science', label: 'Science', icon: FlaskConical, count: '510+ Books' },
  { id: 'self-help', label: 'Self-Help', icon: Activity, count: '990+ Books' },
  { id: 'business', label: 'Business', icon: Briefcase, count: '830+ Books' },
  { id: 'comics', label: 'Comics', icon: Palette, count: '1.4k+ Books' },
  { id: 'poetry', label: 'Poetry', icon: PenTool, count: '310+ Books' },
  { id: 'childrens', label: "Children's", icon: Baby, count: '1.0k+ Books' },
  { id: 'thriller', label: 'Thriller', icon: Flame, count: '890+ Books' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function BrowseCategorySection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#f4f7ff] via-[#eef3ff] to-[#e8edff] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Ambient Background Lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3"
        >
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-[#024968] uppercase bg-cyan-100/70 border border-cyan-200/60 rounded-full shadow-sm">
            Categories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#024968]">
            Browse by Category
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore our curated collection across every genre, from timeless classics to modern masterpieces.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-5"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;

            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="h-full"
              >
                <Card className="relative h-full border border-sky-200/60 bg-white/70 backdrop-blur-md hover:bg-white hover:border-[#024968]/30 hover:shadow-xl hover:shadow-[#024968]/10 transition-all duration-300 rounded-2xl cursor-pointer group overflow-hidden">
                  {/* Hover Corner Icon Accent */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#024968]">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  <CardContent className="flex flex-col items-center justify-center p-5 sm:p-7 space-y-3 h-full">
                    {/* Animated Icon Wrapper */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: [0, -6, 6, 0] }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-sky-50 group-hover:bg-[#024968] flex items-center justify-center text-[#024968] group-hover:text-white transition-colors duration-300 shadow-sm"
                    >
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                    </motion.div>

                    {/* Label & Book Count */}
                    <div className="text-center space-y-0.5">
                      <h3 className="text-xs sm:text-sm font-bold tracking-wide text-slate-800 group-hover:text-[#024968] transition-colors">
                        {category.label}
                      </h3>
                      <p className="text-[11px] font-medium text-slate-400 group-hover:text-slate-500 transition-colors">
                        {category.count}
                      </p>
                    </div>
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