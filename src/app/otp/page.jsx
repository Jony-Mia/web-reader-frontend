'use client';

import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function OtpPage() {
  const [value, setValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length < 6) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row font-sans">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 bg-[url(/images/book-shelf.jpg)] bg-cover bg-blend-overlay bg-[#005f73] p-8 md:p-12 lg:p-16  flex-col justify-center hidden md:flex lg:flex min-h-[300px] md:min-h-screen">
        <div className="bg-[#8ecae6]/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 max-w-md border border-white/20 text-white space-y-3 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Secure Access
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-100">
            To maintain the integrity of your cognitive library, we require a brief verification. This ensures your curated knowledge remains exclusively yours.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 bg-[#f0f8ff] flex flex-col items-center justify-center p-6 sm:p-12 min-h-[calc(100vh-300px)] md:min-h-screen">
        <div className="w-full max-w-md flex flex-col items-center space-y-6">
          
          {/* Brand Logo Icon */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-100 via-sky-200 to-teal-100 flex items-center justify-center shadow-md border-sky-200">
            {/* <div className="w-14 h-14 rounded-full flex items-center justify-center"> */}
              {/* <BookOpen className="w-8 h-8 text-[#005f73]" /> */}
              <Image src={"/images/web-reader.png"} width={60} height={60} className='w-full' alt="web reader logo" />
            {/* </div> */}
          </div>

          {/* Heading */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
              Verify Your Email
            </h1>
            <p className="text-sm text-slate-500">
              We&apos;ve sent a 6-digit code to your email.
            </p>
          </div>

          {/* Shadcn Card */}
          <Card className="w-full border-slate-100 shadow-sm rounded-2xl bg-white">
            <CardContent className="pt-6 sm:pt-8 p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6">
                
                {/* Shadcn InputOTP */}
                <InputOTP
                  maxLength={6}
                  value={value}
                  onChange={(val) => setValue(val)}
                >
                  <InputOTPGroup className="gap-2 sm:gap-3">
                    <InputOTPSlot index={0} className="w-10 h-12 sm:w-12 sm:h-14 text-lg sm:text-xl border-slate-200 rounded-xl" />
                    <InputOTPSlot index={1} className="w-10 h-12 sm:w-12 sm:h-14 text-lg sm:text-xl border-slate-200 rounded-xl" />
                    <InputOTPSlot index={2} className="w-10 h-12 sm:w-12 sm:h-14 text-lg sm:text-xl border-slate-200 rounded-xl" />
                    <InputOTPSlot index={3} className="w-10 h-12 sm:w-12 sm:h-14 text-lg sm:text-xl border-slate-200 rounded-xl" />
                    <InputOTPSlot index={4} className="w-10 h-12 sm:w-12 sm:h-14 text-lg sm:text-xl border-slate-200 rounded-xl" />
                    <InputOTPSlot index={5} className="w-10 h-12 sm:w-12 sm:h-14 text-lg sm:text-xl border-slate-200 rounded-xl" />
                  </InputOTPGroup>
                </InputOTP>

                {/* Shadcn Button */}
                <Button
                  type="submit"
                  disabled={value.length < 6 || isSubmitting}
                  className="w-full h-12 bg-[#005f73] hover:bg-[#004d5e] text-white font-semibold rounded-xl text-base shadow-md transition-all"
                 
                >
                  {isSubmitting ? (
                    <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : (
                    'Verify Account'
                  )}
                </Button>
              </form>

              {/* Resend Action */}
              <div className="mt-6 text-center text-sm text-slate-500">
                <span>Didn&apos;t receive the code? </span>
                <button
                  type="button"
                  className="font-semibold text-[#005f73] hover:underline focus:outline-none"
                >
                  Resend Code
                </button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}