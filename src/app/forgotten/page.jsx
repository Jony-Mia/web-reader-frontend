'use client';

import { useState } from 'react';
import { BookOpen, ArrowLeft, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row font-sans">
      {/* Left Hero Section */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-[#bde0fe] via-[#cbe6ff] to-[#d8eeff] p-6 sm:p-12 lg:p-16 flex items-center justify-center min-h-[380px] md:min-h-screen">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-lg border border-white/60 space-y-6">
          <div className="w-12 h-12 rounded-xl bg-[#006680]/10 flex items-center justify-center text-[#006680]">
            <BookOpen className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Restore <br />
              Your <br />
              Access
            </h1>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Regain entry to your personalized library, saved annotations, and continuous learning journey. The knowledge awaits your return.
          </p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 bg-[#f4f9ff] flex flex-col items-center justify-center p-6 sm:p-12 min-h-[calc(100vh-380px)] md:min-h-screen">
        <Card className="w-full max-w-md border-0 shadow-xl rounded-3xl bg-white p-2 sm:p-4">
          <CardContent className="pt-8 pb-8 px-6 sm:px-8 flex flex-col items-center space-y-6">
            
            {/* Logo Badge */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-100 via-sky-200 to-teal-100 flex items-center justify-center shadow-sm border border-sky-200">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-inner">
                <BookOpen className="w-6 h-6 text-[#006680]" />
              </div>
            </div>

            {/* Header Text */}
            <div className="text-center space-y-1.5">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Forgot Password?
              </h2>
              <p className="text-sm text-slate-500">
                Enter your email to receive a password reset link
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full space-y-5 pt-2">
              <div className="space-y-2">
                <Label 
                  htmlFor="email" 
                  className="text-[11px] font-bold text-slate-500 uppercase tracking-widest"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 rounded-xl border-slate-200 focus-visible:ring-[#006680] focus-visible:border-[#006680] text-slate-800 placeholder:text-slate-400"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-[#006680] hover:bg-[#004d61] text-white font-semibold rounded-xl tracking-wider text-xs uppercase shadow-md shadow-[#006680]/20 transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <span>Send Reset Link</span>
                    <Send className="w-3.5 h-3.5 fill-current" />
                  </>
                )}
              </Button>
            </form>

            {/* Back to Login */}
            <div className="pt-2">
              <a
                href="/login"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#006680] hover:underline"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Login</span>
              </a>
            </div>

            <div className="w-full pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
              <span>Need help? </span>
              <a href="/support" className="font-semibold text-[#006680] hover:underline">
                Contact Support
              </a>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}