'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Jumbotron() {
  return (
    <section className="relative w-full min-h-[85vh] bg-[#02131e] text-white flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dark Globe Background */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-25 mix-blend-screen scale-110 md:scale-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop')`,
          }}
        />

        {/* Radial Gradients for Atmosphere */}
        <div className="absolute inset-0 bg-radial-gradient from-cyan-500/10 via-transparent to-[#02131e]" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px]" />
        
        {/* Subtle Overlay Vignette */}
        <div className="absolute inset-0 bg-[#02131e]/60" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex absolute top-28 left-[12%] items-center space-x-2 bg-[#05283b]/80 border border-cyan-500/30 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl shadow-cyan-950/50 z-10"
      >
        <Compass className="w-4 h-4 text-cyan-400" />
        <span className="text-xs font-medium text-cyan-100">Global Knowledge Network</span>
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex absolute bottom-28 right-[12%] items-center space-x-2 bg-[#05283b]/80 border border-cyan-500/30 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl shadow-cyan-950/50 z-10"
      >
        <ShieldCheck className="w-4 h-4 text-teal-400" />
        <span className="text-xs font-medium text-cyan-100">Verified Literature Base</span>
      </motion.div>

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <Badge className="bg-[#052d42] hover:bg-[#083c57] text-cyan-300 border border-cyan-500/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide flex items-center space-x-2 shadow-lg shadow-cyan-950/40">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Introducing Reb Reader 2.0</span>
          </Badge>
        </motion.div>

        {/* Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-white"
        >
          Explore Endless Knowledge Across The{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
            Digital Globe
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg lg:text-xl text-cyan-100/80 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Access millions of curated books, research papers, and literary works in a unified, modern interface designed for curious minds everywhere.
        </motion.p>

        {/* CTA Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
            <Button
              asChild
              className="w-full sm:w-auto h-13 px-8 bg-cyan-500 hover:bg-cyan-400 text-[#02131e] font-bold rounded-xl text-base transition-all duration-200 shadow-xl shadow-cyan-500/20 flex items-center justify-center space-x-2"
            >
              <Link href="/register" className='flex gap-2 items-center'>
                <span>Start Reading Free</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto h-13 px-8 bg-[#05283b]/60 hover:bg-[#073650] hover:text-cyan-100 border-cyan-500/30 text-cyan-100 font-semibold rounded-xl text-base backdrop-blur-sm transition-all duration-200"
            >
              <Link href="/categories" className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Browse Genres</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Quick Highlights / Metrics */}
        <motion.div 
          variants={itemVariants}
          className="pt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl mx-auto border-t border-cyan-900/40 text-center"
        >
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">50K+</p>
            <p className="text-xs sm:text-sm text-cyan-200/60 mt-1">Active Readers</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">100K+</p>
            <p className="text-xs sm:text-sm text-cyan-200/60 mt-1">Books Available</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-white">4.9/5</p>
            <p className="text-xs sm:text-sm text-cyan-200/60 mt-1">Community Rating</p>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}