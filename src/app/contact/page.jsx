"use client"
import  { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { BookOpen, MessageSquare, PenTool, Store, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Contact() {
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