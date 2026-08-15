'use client'
import React from 'react';
import Image from 'next/image';
import { BookOpen, MessageSquare, PenTool, Store, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: BookOpen,
    title: 'Digital Library',
    description:
      'Access thousands of curated books and articles in a distraction-free environment.',
    bgColor: 'bg-[#38bdf8]',
    titleColor: 'text-[#0284c7]',
  },
  {
    icon: MessageSquare,
    title: 'Community Hub',
    description:
      'Engage in thoughtful discussions and share insights with fellow readers.',
    bgColor: 'bg-[#16a34a]',
    titleColor: 'text-[#16a34a]',
  },
  {
    icon: PenTool,
    title: 'Author Tools',
    description:
      'Powerful analytics and drafting tools designed for digital-first creators.',
    bgColor: 'bg-[#0284c7]',
    titleColor: 'text-[#0284c7]',
  },
  {
    icon: Store,
    title: 'Marketplace',
    description:
      'Discover and purchase premium content directly from independent authors.',
    bgColor: 'bg-[#f87171]',
    titleColor: 'text-[#dc2626]',
  },
];

export default function AboutAndServicesSection() {
  return (
    <section className="w-full bg-[#f2f9fd] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Main Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#0c4a60] mb-3">
            About & Contact
          </h1>
          <p className="text-[#3b6878] text-sm md:text-base">
            Empowering minds through digital literacy and connected knowledge.
          </p>
        </div>

        {/* Our Story Card */}
        <Card className="bg-white rounded-3xl border border-[#e2f1f8] shadow-sm overflow-hidden p-6 md:p-10">
          <CardContent className="p-0 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c4a60]">
                Our Story
              </h2>
              <p className="text-[#4a7280] text-sm md:text-base leading-relaxed">
                Reb Reader was founded on the belief that digital literacy is the
                cornerstone of modern enlightenment. In a world overflowing with
                information, true knowledge requires structured engagement,
                critical thinking, and accessible tools.
              </p>
              <p className="text-[#4a7280] text-sm md:text-base leading-relaxed">
                Our mission is to create a serene, focused environment where
                readers can consume, retain, and connect ideas. We blend cutting-edge
                knowledge management with intuitive design to foster a community
                of lifelong learners.
              </p>
            </div>

            <div className="relative w-full h-[260px] md:h-[320px] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/book-on-table.jpg"
                alt="Workspace with book and laptop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </CardContent>
        </Card>

        {/* Our Services Header */}
        <div className="space-y-10">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0c4a60]">
              Our Services
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Card
                  key={index}
                  className="bg-white border border-[#e2f1f8] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center p-6 flex flex-col items-center"
                >
                  <CardContent className="p-0 flex flex-col items-center">
                    {/* Circle Icon Badge */}
                    <div
                      className={`w-14 h-14 rounded-full ${service.bgColor} flex items-center justify-center text-white mb-4 shadow-sm`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-sm md:text-base font-semibold tracking-wider uppercase mb-2 ${service.titleColor}`}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#4a7280] text-xs md:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <ContactSection/>
    </section>
  );
}



import  { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export  function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, value} = e.target
    console.log(formData);
    
    // Handle form submission logic here
  };

  return (
    <section className="w-full bg-[#f2f9fd] py-16 px-4 md:px-8 flex justify-center items-center">
      <Card className="w-full max-w-2xl bg-white border border-[#e2f1f8] rounded-3xl shadow-sm p-6 md:p-10">
        <CardHeader className="text-center p-0 mb-8 space-y-2">
          <CardTitle className="text-3xl md:text-4xl font-serif font-bold text-[#0c4a60]">
            Contact Us
          </CardTitle>
          <CardDescription className="text-[#4a7280] text-sm md:text-base font-normal">
            Have a question or feedback? We&apos;d love to hear from you.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-semibold text-[#4a7280] uppercase tracking-wider">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white border-[#bce0f0] focus-visible:ring-[#0c4a60] text-[#0c4a60] placeholder:text-[#94a3b8] rounded-xl h-11"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-semibold text-[#4a7280] uppercase tracking-wider">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white border-[#bce0f0] focus-visible:ring-[#0c4a60] text-[#0c4a60] placeholder:text-[#94a3b8] rounded-xl h-11"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-xs font-semibold text-[#4a7280] uppercase tracking-wider">
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={handleChange}
                className="bg-white border-[#bce0f0] focus-visible:ring-[#0c4a60] text-[#0c4a60] placeholder:text-[#94a3b8] rounded-xl h-11"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-xs font-semibold text-[#4a7280] uppercase tracking-wider">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="bg-white border-[#bce0f0] focus-visible:ring-[#0c4a60] text-[#0c4a60] placeholder:text-[#94a3b8] rounded-xl resize-none p-3"
                required
              />
            </div>

            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                className="bg-[#0c4a60] hover:bg-[#083444] text-white font-medium px-6 py-5 rounded-xl flex items-center gap-2 transition-colors shadow-none"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}