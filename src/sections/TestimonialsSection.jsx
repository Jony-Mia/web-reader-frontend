import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { inter } from '../app/layout';

const testimonials = [
  {
    id: 1,
    quote: '"Reb Reader completely changed how I consume literature. The interface is stunning and distraction-free."',
    name: 'Alice M.',
    role: 'Avid Reader',
    avatar: 'https://github.com/shadcn.png',
    rating: 5,
  },
  {
    id: 2,
    quote: '"The curated lists are fantastic. I\'ve discovered so many hidden gems I would have otherwise missed."',
    name: 'David K.',
    role: 'Book Blogger',
    avatar: 'https://github.com/evilrabbit.png',
    rating: 5,
  },
  {
    id: 3,
    quote: '"Syncing across devices is flawless. It feels like my library is always right in my pocket."',
    name: 'Samantha R.',
    role: 'Student',
    avatar: 'https://github.com/maxleiter.png',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full container mx-auto p-4 md:p-8">
      <div className="bg-[#f0f8fd] rounded-3xl p-8 md:p-14 border border-[#e0f1f9]">
        <div className="text-center mb-10">
          <h2 className={` ${inter.className} text-2xl md:text-3xl font-bold text-[#0f4c5c]`}>
            What Our Readers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <Card
              key={item.id}
              className="bg-white/90 border-[#d2ecf8] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <CardContent className="p-6 flex flex-col justify-between h-full min-h-[220px]">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#0f4c5c] fill-none stroke-[1.5]"
                      />
                    ))}
                  </div>

                  <p className="text-[#3b6878] italic text-sm md:text-base leading-relaxed font-serif">
                    {item.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 mt-auto">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-[#bce0f0]">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f4c5c] text-sm md:text-base">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#6890a0]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}