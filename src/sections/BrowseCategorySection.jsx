import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { fraunces, inter } from '../app/layout';

const categories = [
  'FICTION',
  'SCI-FI',
  'MYSTERY',
  'FANTASY',
  'ROMANCE',
  'HORROR',
  'BIOGRAPHY',
  'HISTORY',
  'SCIENCE',
  'SELF-HELP',
  'BUSINESS',
  'COMICS',
  'POETRY',
  "CHILDREN'S",
  'THRILLER',
];

export default function BrowseCategorySection() {
  return (
    <section className="w-full bg-[#f2f9fd] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className={`text-3xl md:text-4xl font-serif font-bold text-[#0f4c5c] mb-4 ${inter.className}`}>
            Browse by Category
          </h2>
          <p className="text-[#527982] text-sm md:text-base leading-relaxed">
            Explore our curated collection across every genre, from timeless classics to modern masterpieces.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="bg-[#e2f1f8] border-[#c0e0ef] hover:border-[#0f4c5c]/40 hover:bg-[#d8ebf5] rounded-xl shadow-none transition-all duration-200 cursor-pointer group"
            >
              <CardContent className="p-0 flex items-center justify-center h-20 md:h-24">
                <span className="text-xs md:text-sm font-semibold tracking-wider text-[#0f4c5c] uppercase text-center px-2 group-hover:scale-105 transition-transform duration-200">
                  {category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}