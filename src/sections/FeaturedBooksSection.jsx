'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ChevronLeft,
    ChevronRight,
    Star,
    ShoppingCart,
    Heart,
    BookOpen
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const featuredBooks = [
    {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        rating: 4.8,
        reviews: 1240,
        price: '$14.99',
        category: 'Fiction',
        cover: '/images/The-Great-Gatsby.jpg',
    },
    {
        id: 2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        rating: 4.9,
        reviews: 2100,
        price: '$12.50',
        category: 'Classic',
        cover: '/images/To-Kill-a-Mockingbird.jpg',
    },
    {
        id: 3,
        title: '1984',
        author: 'George Orwell',
        rating: 4.7,
        reviews: 1850,
        price: '$11.99',
        category: 'Sci-Fi',
        cover: '/images/1984.jpg',
    },
    {
        id: 4,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        rating: 4.8,
        reviews: 1620,
        price: '$10.99',
        category: 'Romance',
        cover: '/images/Pride-and-Prejudice.jpg',
    },
    {
        id: 5,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        rating: 4.9,
        reviews: 3100,
        price: '$15.99',
        category: 'Fantasy',
        cover: "/images/The-Hobbit.jpg",
    },
    {
        id: 6,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        rating: 4.5,
        reviews: 980,
        price: '$13.20',
        category: 'Fiction',
        cover: "/images/The Catcher in the Rye.jpg",
    },
    {
        id: 7,
        title: 'Dune',
        author: 'Frank Herbert',
        rating: 4.9,
        reviews: 2450,
        price: '$18.99',
        category: 'Sci-Fi',
        cover: "/images/Dune.jpg",
    },
    {
        id: 8,
        title: 'Brave New World',
        author: 'Aldous Huxley',
        rating: 4.6,
        reviews: 1120,
        price: '$12.99',
        category: 'Sci-Fi',
        cover: '/images/Brave New World.jpg',
    },
    {
        id: 9,
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        rating: 4.7,
        reviews: 1430,
        price: '$11.50',
        category: 'Dystopian',
        cover: '/images/Fahrenheit 451.jpg',
    },
    {
        id: 10,
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        rating: 4.8,
        reviews: 2890,
        price: '$14.00',
        category: 'Adventure',
        cover: '/images/the-alchemist.jpg',
    },
    {
        id: 11,
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        rating: 5.0,
        reviews: 4200,
        price: '$24.99',
        category: 'Fantasy',
        cover: '/images/The Lord of the Rings.jpg'
        ,
    },
    {
        id: 12,
        title: 'Animal Farm',
        author: 'George Orwell',
        rating: 4.7,
        reviews: 1780,
        price: '$9.99',
        category: 'Satire',
        cover: '/images/animal-farm.jpg',
    },
    {
        id: 13,
        title: 'The Book Thief',
        author: 'Markus Zusak',
        rating: 4.8,
        reviews: 1940,
        price: '$13.99',
        category: 'Historical',
        cover: '/images/the-book-theig.jpg',
    },
    {
        id: 14,
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        rating: 4.6,
        reviews: 1290,
        price: '$11.20',
        category: 'Romance',
        cover: '/images/jane-eyre.jpg',
    },
    {
        id: 15,
        title: 'The Shadow of the Wind',
        author: 'Carlos Ruiz Zafón',
        rating: 4.9,
        reviews: 1560,
        price: '$15.50',
        category: 'Mystery',
        cover: '/images/The Shadow of the Wind.jpg',
    },
    {
        id: 16,
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        rating: 4.7,
        reviews: 1340,
        price: '$10.50',
        category: 'Gothic',
        cover: '/images/The Picture of Dorian Gray.jpg',
    },
];

export default function FeaturedBooksSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCardsToShow(1);
            } else if (window.innerWidth < 768) {
                setCardsToShow(2);
            } else if (window.innerWidth < 1024) {
                setCardsToShow(3);
            } else {
                setCardsToShow(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, featuredBooks.length - cardsToShow);

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    return (
        <section className="relative w-full bg-gradient-to-b from-[#f8fbff] to-[#eef5fc] py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Section Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-sky-100/80 pb-6">
                    <div className="space-y-2">
                        <Badge
                            variant="outline"
                            className="px-3.5 py-1 bg-sky-100/80 border-sky-200 text-[#024968] font-bold text-xs uppercase tracking-wider rounded-full shadow-sm"
                        >
                            Handpicked Selection
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#024968] tracking-tight">
                            Featured Books
                        </h2>
                        <p className="text-slate-500 text-sm sm:text-base max-w-xl">
                            Explore our top-rated collections curated for readers worldwide.
                        </p>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-2.5">
                        <Button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            variant="outline"
                            size="icon"
                            className="w-11 h-11 rounded-full border-sky-200 bg-white hover:bg-sky-50 text-[#024968] disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all"
                            aria-label="Previous Slide"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button
                            onClick={handleNext}
                            disabled={currentIndex >= maxIndex}
                            variant="outline"
                            size="icon"
                            className="w-11 h-11 rounded-full border-sky-200 bg-white hover:bg-sky-50 text-[#024968] disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all"
                            aria-label="Next Slide"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Motion Slider Wrapper */}
                <div className="relative overflow-hidden" ref={containerRef}>
                    <motion.div
                        className="flex gap-5"
                        animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
                        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                    >
                        {featuredBooks.map((book) => (
                            <div
                                key={book.id}
                                className="w-full shrink-0"
                                style={{ width: `calc(${100 / cardsToShow}% - ${(20 * (cardsToShow - 1)) / cardsToShow}px)` }}
                            >
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                                    className="h-full"
                                >
                                    <Card className="h-full border border-sky-100 bg-white/90 backdrop-blur-sm hover:shadow-xl hover:shadow-sky-500/10 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between group">
                                        <CardContent className="p-4 flex flex-col h-full space-y-4">

                                            {/* Image Frame */}
                                            <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
                                                <img
                                                    src={book.cover}
                                                    alt={book.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    loading="lazy"
                                                />

                                                {/* Category Badge */}
                                                <div className="absolute top-3 left-3 z-10">
                                                    <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase text-white bg-[#024968]/85 backdrop-blur-md rounded-md shadow-sm">
                                                        {book.category}
                                                    </span>
                                                </div>

                                                {/* Wishlist Button */}
                                                <button
                                                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-600 hover:text-red-500 hover:bg-white transition-colors shadow-sm"
                                                    aria-label="Add to wishlist"
                                                >
                                                    <Heart className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {/* Card Details */}
                                            <div className="flex flex-col flex-1 justify-between space-y-3">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
                                                        <Star className="w-3.5 h-3.5 fill-current" />
                                                        <span>{book.rating}</span>
                                                        <span className="text-slate-400 font-normal">({book.reviews})</span>
                                                    </div>

                                                    <h3 className="font-bold text-slate-800 text-base line-clamp-1 group-hover:text-[#024968] transition-colors">
                                                        {book.title}
                                                    </h3>
                                                    <p className="text-xs text-slate-500 font-medium">
                                                        {book.author}
                                                    </p>
                                                </div>
                                                <Button
                                                    size="lg"
                                                    variant='outline'
                                                    className="cursor-pointer h-9 px-3.5 bg-sky-50 hover:bg-[#024968] text-[#024968] hover:text-white rounded-xl transition-colors font-semibold flex items-center gap-1.5 shadow-none"
                                                >
                                                    <BookOpen className="w-3.5 h-3.5" />
                                                    <span className="text-xs">Read</span>
                                                </Button>
                                                {/* Footer Action */}
                                                {/* <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                                                    <span className="text-lg font-extrabold text-[#024968]">
                                                        {book.price}
                                                    </span>

                                                    <Button
                                                        size="sm"
                                                        className="h-9 px-3.5 bg-sky-50 hover:bg-[#024968] text-[#024968] hover:text-white rounded-xl transition-colors font-semibold flex items-center gap-1.5 shadow-none"
                                                    >
                                                        <ShoppingCart className="w-3.5 h-3.5" />
                                                        <span className="text-xs">Add</span>
                                                    </Button>
                                                </div> */}
                                            </div>

                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}