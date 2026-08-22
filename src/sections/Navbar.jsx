'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Search, Menu, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/categories', label: 'Categories' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f2f9ff] border-b border-slate-200/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Left Side: Logo & Desktop Links */}
        <div className="flex items-center gap-8 lg:gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="rounded-full bg-gradient-to-tr from-cyan-100 via-sky-200 to-teal-100 flex items-center justify-center shadow-sm border border-sky-200 transition-transform group-hover:scale-105">
              <Image width={60} height={60} src={"/images/web-reader.png"} alt={"web reader logo"}  />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-medium text-[#024968] hover:text-[#01354c] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side: Search Input & Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-1 max-w-md justify-end">
          {/* Search Input */}
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10 rounded-full bg-sky-100/60 border-sky-200 focus-visible:ring-[#024968] focus-visible:border-[#024968] text-sm text-slate-800 placeholder:text-slate-400 shadow-none"
            />
          </div>

          {/* Auth Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/login"
              className="text-sm font-semibold text-[#024968] hover:text-[#01354c] transition-colors px-2"
            >
              Log In
            </Link>
            <Button
              
              className="h-10 px-6 bg-[#024968] hover:bg-[#01354c] text-white font-semibold rounded-full text-sm shadow-md shadow-[#024968]/20 transition-all"
            >
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Trigger (Hamburger Menu) */}
        <div className="flex md:hidden items-center gap-3">
          <Sheet>
            <SheetTrigger >
              <Button
                variant="ghost"
                size="icon"
                className="text-[#024968] hover:bg-sky-100/60 p-2 rounded-full"
                aria-label="Toggle Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#f2f9ff] border-l p-6 border-slate-200 w-[300px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <div className="rounded-full bg-cyan-100 flex items-center justify-center border border-cyan-200">
                    {/* <BookOpen className="w-4 h-4 text-[#024968]" /> */}
                    <Image src={"/images/web-reader.png"} alt='web reader logo ' height={70} width={70} />
                  </div>
                  <span className="text-lg font-bold text-[#024968]">Web Reader</span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 mt-8 ">
                {/* Mobile Search */}
                <div className="relative w-full">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Search books..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-10 rounded-full bg-white border-sky-200 focus-visible:ring-[#024968] text-sm text-slate-800"
                  />
                </div>

                {/* Mobile Links */}
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-lg font-medium text-[#024968] hover:text-[#01354c] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <hr className="border-slate-200/80" />

                {/* Mobile Auth Actions */}
                <div className="flex flex-col gap-3">
                  <Button
                    
                    variant="outline"
                    className="w-full h-11 border-sky-200 text-[#024968] font-semibold rounded-full bg-white hover:bg-sky-50"
                  >
                    <Link href="/login">Log In</Link>
                  </Button>
                  <Button
                    
                    className="w-full h-11 bg-[#024968] hover:bg-[#01354c] text-white font-semibold rounded-full shadow-md shadow-[#024968]/20"
                  >
                    <Link href="/register">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}