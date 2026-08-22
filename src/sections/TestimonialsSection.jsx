'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { inter } from '../app/layout';

const testimonials = [
  {
    id: 1,
    quote:
      'Reb Reader completely changed how I consume literature. The interface is stunning and distraction-free.',
    name: 'Alice M.',
    role: 'Avid Reader',
    avatar: 'https://github.com/shadcn.png',
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The curated lists are fantastic. I've discovered so many hidden gems I would have otherwise missed.",
    name: 'David K.',
    role: 'Book Blogger',
    avatar: 'https://github.com/evilrabbit.png',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'Syncing across devices is flawless. It feels like my library is always right in my pocket.',
    name: 'Samantha R.',
    role: 'Student',
    avatar: 'https://github.com/maxleiter.png',
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function TestimonialsSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 font-sans">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#f2f8fc] via-[#eaf4fb] to-[#e1f0f8] p-6 sm:p-10 md:p-16 border border-[#d2ecf8]/80 shadow-xl shadow-sky-900/5">
        
        {/* Ambient Decorative Lighting */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-300/15 rounded-full blur-3xl pointer-events-none" />

        {/* Section Heading */}
        <div className="relative text-center max-w-xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0f4c5c] bg-white/80 border border-sky-200/70 rounded-full shadow-sm">
            Community Feedback
          </span>
          <h2
            className={`${inter.className} text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f4c5c]`}
          >
            What Our Readers Say
          </h2>
          <p className="text-sm sm:text-base text-[#4a7788] leading-relaxed">
            Real stories from readers who modernized their daily reading routine with us.
          </p>
        </div>

        {/* Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((item) => (
            <motion.div key={item.id} variants={cardVariants} className="h-full">
              <Card className="relative h-full bg-white/80 backdrop-blur-md border border-[#cbe6f5] rounded-2xl shadow-sm hover:shadow-xl hover:shadow-sky-900/10 hover:border-[#0f4c5c]/30 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                
                {/* Decorative Quote Mark */}
                <div className="absolute top-5 right-5 text-sky-100 group-hover:text-sky-200/70 transition-colors pointer-events-none">
                  <Quote className="w-10 h-10 stroke-[1.2]" />
                </div>

                <CardContent className="p-6 sm:p-8 flex flex-col justify-between h-full min-h-[240px] space-y-6">
                  <div className="space-y-4">
                    
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className="text-[#2c5361] text-sm sm:text-base leading-relaxed font-medium">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* User Profile Footer */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-sky-100/80 mt-auto">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#bce0f0] group-hover:border-[#0f4c5c] transition-colors shadow-sm">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0f4c5c] text-sm sm:text-base leading-tight group-hover:text-[#0b3844] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs font-medium text-[#6890a0]">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}