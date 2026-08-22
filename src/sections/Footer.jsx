'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BookOpen,
  // Sofa as Github,
  // X as Twitter,
  // Sofa as Linkedin,
  Mail,
  ArrowRight,
  Heart,
  Sparkles,
} from 'lucide-react';
import { GithubIcon as Github, Linkerd, Twitter } from '@dev.icons/react';
import Image from 'next/image';

const navigation = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Changelog', href: '#changelog' },
    { name: 'Documentation', href: '#docs' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Press Kit', href: '#press' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'Security', href: '#security' },
  ],
  social: [
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkerd },
  ],
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#F2F9FF] text-slate-300 font-sans border-t border-slate-800/80 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12"
      >
        {/* Newsletter Banner */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0c4a60] to-[#084c61] p-8 sm:p-10 mb-16 shadow-2xl border border-teal-500/20"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-semibold border border-teal-400/20 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Stay Connected</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Stay updated with our latest insights
              </h3>
              <p className="text-teal-100/80 text-sm sm:text-base font-normal">
                Join our newsletter to receive feature updates, curated reads, and workflow enhancements.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <div className="relative w-full">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/60 text-white placeholder-slate-400 rounded-xl border border-slate-700/80 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400 transition-all backdrop-blur-md"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shrink-0 cursor-pointer shadow-lg shadow-teal-500/20 active:scale-95"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Links & Brand Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex flex-col gap-2.5">
              <div className="  rounded-xl flex items-center text-slate-950 ">
                I<Image src={"/images/web-reader.png"} alt='web reader logo' height={100} width={100} />
              </div>
              <span className="text-xl font-bold text-black tracking-tight">
                Web Reader
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
              Empowering readers and knowledge workers to organize, annotate, and synthesize digital content effortlessly.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl {/*bg-slate-800/80*/} hover:bg-teal-500/20 hover:border-teal-500/40 text-slate-300 hover:text-teal-300 flex items-center justify-center transition-all duration-200 border border-slate-700/60"
                    aria-label={item.name}
                  >
                    <Icon className="w-4 h-4" />
                    
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Links: Product */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2.5">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links: Company */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links: Legal */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400"
        >
          <p>© {new Date().getFullYear()} Web Reader, Inc. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for modern web developers.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}