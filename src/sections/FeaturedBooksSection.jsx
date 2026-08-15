'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const books = [
    {
        id: 1,
        title: 'The Silent Echo',
        author: 'Elena Vance',
        image: '/images/beyond-the-horizon.jpg',
    },
    {
        id: 2,
        title: 'Beyond the Horizon',
        author: 'Marcus Thorne',
        image: '/images/the-tide.jpg',
    },
    {
        id: 3,
        title: 'A Quantum of Solace',
        author: 'David longhorn',
        image: '/images/nightmare-revelation.jpg',
    },
    {
        id: 4,
        title: 'The Art of Stillness',
        author: 'Pico Iyer',
        image: '/images/the-silent-tides.jpg',
    },
    {
        id: 5,
        title: 'Nightfall Chronicles',
        author: 'Liam Masters',
        image: '/images/the-tide.jpg',
    },
    {
        id: 6,
        title: 'The Silent Echo',
        author: 'Elena Vance',
        image: '/images/beyond-the-horizon.jpg',
    },
    {
        id: 7,
        title: 'The Silent Echo',
        author: 'Elena Vance',
        image: '/images/beyond-the-horizon.jpg',
    },
];

export default function FeaturedBooksSection() {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 250;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
                loop: true,
            });
        }
    };

    return (
        <section className="w-full bg-[#f2f9fd] py-12 px-4 md:px-8">
            <div className="container mx-auto p-3">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f4c5c]">
                            Featured Books
                        </h2>
                        <p className="text-[#527982] text-sm md:text-base mt-2">
                            Handpicked selections for you this week.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => scroll('left')}
                            className="w-10 h-10 rounded-full border-[#0f4c5c]/20 text-[#0f4c5c] hover:bg-[#0f4c5c] hover:text-white transition-colors"
                            aria-label="Scroll left"
                        >
                            <ArrowLeft className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => scroll('right')}
                            className="w-10 h-10 rounded-full border-[#0f4c5c]/20 text-[#0f4c5c] hover:bg-[#0f4c5c] hover:text-white transition-colors"
                            aria-label="Scroll right"
                        >
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex items-start gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {books.map((book) => (
                        <div
                            key={book.id}
                            className="flex-shrink-0 w-[220px] md:w-[240px] group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                                <Image
                                    src={book.image}
                                    alt={book.title}
                                    fill
                                    sizes="(max-width: 768px) 220px, 240px"
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="space-y-1">
                                <h3 className="font-serif font-semibold text-[#0f4c5c] text-base md:text-lg line-clamp-1 group-hover:text-[#e36414] transition-colors">
                                    {book.title}
                                </h3>
                                <p className="text-[#527982] text-sm line-clamp-1">
                                    {book.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}