import React from 'react';
import { RefreshCw, Moon, Share2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { fraunces } from '../app/layout';

const features = [
  {
    icon: RefreshCw,
    title: 'Cross-device Sync',
    description: 'Start reading on your phone and pick up right where you left off on your tablet or desktop.',
  },
  {
    icon: Moon,
    title: 'Night Mode',
    description: 'Protect your eyes during late-night reading sessions with a beautifully optimized dark theme.',
  },
  {
    icon: Share2,
    title: 'Social Sharing',
    description: 'Share your favorite quotes, reviews, and reading lists easily with friends and followers.',
  },
];

export default function WhyChooseSection() {
  return (

    <>

      <section className="container mx-auto p-4 md:p-8">
        <div className="bg-[#e6f4fa] rounded-3xl p-8 md:p-14 text-center">
          <div className="max-w-3xl mx-auto mb-10">
            <h2 className={`text-3xl md:text-4xl font-serif font-bold text-[#0c4a60] mb-4 ${fraunces.className}`}>
              Why Choose Reb Reader?
            </h2>
            <p className="text-[#3b6878] text-base md:text-lg">
              Enhance your reading experience with features designed for modern book lovers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-[#f4fafd]/80 border border-[#bce0f0] rounded-2xl p-6 shadow-none flex flex-col items-center justify-start text-center"
                >
                  <CardHeader className="p-0 pb-4 w-full flex flex-col items-center">
                    <div className="mb-3 text-[#0c4a60]">
                      <Icon className="w-8 h-8 stroke-[1.75]" />
                    </div>
                    <CardTitle className={`text-xl font-serif font-semibold text-[#0c4a60] ${fraunces.className}`}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-[#4a7280] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>


      <StatsSection />

    </>
  );
}


import { Users, BookOpen, Star, ListOrdered } from 'lucide-react';

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

export function StatsSection() {
  return (
    <section className="w-full container mx-auto p-4 md:p-8">
      <Card className="bg-[#e6f4fa] border border-[#bce0f0]/60 rounded-2xl shadow-none overflow-hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#bce0f0]/60">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center justify-center p-8 transition-all duration-300 hover:bg-white/50 cursor-pointer"
                >
                  <div className="mb-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                    <span className="text-3xl md:text-5xl font-serif font-bold text-[#0c4a60] tracking-tight">
                      {stat.value}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 transition-colors duration-300 text-[#3b6878] group-hover:text-[#0c4a60]">
                    <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-xs font-semibold tracking-wider uppercase font-serif">
                      {stat.label}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#0c4a60] rounded-full transition-all duration-300 group-hover:w-16" />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

    </section>
  );
}