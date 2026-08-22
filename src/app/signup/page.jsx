'use client';

import React, { useState } from 'react';
import { 
  BookOpen, 
  User, 
  Mail, 
  Lock, 
  RotateCcw, 
  ArrowRight, 
  Eye, 
  EyeOff 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Apple, GoogleIcon } from '@dev.icons/react';
import Image from 'next/image';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreed: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pError, setPsError] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {return}
    else{
      if(formData.email!=="" || formData.fullName!=="" || formData.confirmPassword!=="" || formData.password!==""){
        if (formData.password!==formData.confirmPassword) {
          setPsError(true);
          return;
        }else{
              console.log(formData);
          }
        
      }
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 500);

  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row font-sans">
      {/* Left Banner Section */}
      <div className="relative w-full md:w-5/12 lg:w-7/12 bg-[#024968] p-8 md:p-12 lg:p-14 flex flex-col justify-between overflow-hidden min-h-[360px] md:min-h-screen">
        {/* Top Logo Header */}
        <div className="flex items-center space-x-3 z-10">
          <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center border border-cyan-200">
            {/* <BookOpen className="w-5 h-5 text-[#024968]" /> */}
            <Image src={"/images/web-reader.png"} alt='web reader logo' height={65} width={65} />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">
            Web Reader
          </span>
        </div>

        {/* Content Body */}
        <div className="my-auto py-8 z-10 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Start your knowledge journey today.
          </h1>
          <p className="text-sm sm:text-base text-cyan-100/80 leading-relaxed max-w-sm">
            Join thousands of readers organizing their thoughts, discovering new insights, and managing their digital libraries with unparalleled clarity.
          </p>
        </div>

        {/* Decorative Background Shape */}
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-cyan-400/15 pointer-events-none" />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-7/12 lg:w-8/12 bg-[#f2f9ff] flex items-center justify-center p-6 sm:p-10 lg:p-16 min-h-[calc(100vh-360px)] md:min-h-screen">
        <div className="w-full max-w-md space-y-8">
          
          {/* Form Header */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Create Account
            </h2>
            <p className="text-sm text-slate-500">
              Enter your details to get started with Reb Reader.
            </p>
          </div>

          {/* Social Register Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-11 bg-white hover:cursor-pointer hover:bg-slate-50 border-slate-200 text-slate-700 font-medium rounded-xl shadow-sm transition-all"
            >
              <GoogleIcon/>
              <span>Google</span>
            </Button>

            <Button
              type="button"
              variant="outline"
              className="h-11 bg-white hover:cursor-pointer hover:bg-slate-50 border-slate-200 text-slate-700 font-medium rounded-xl shadow-sm transition-all"
            >
              <Apple/>
              <span>Apple</span>
            </Button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="w-full border-t border-slate-200" />
            <span className="absolute bg-[#f2f9ff] px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              OR REGISTER WITH EMAIL
            </span>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <Label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Full Name
              </Label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Jane Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="pl-10 h-11 bg-white border-slate-200 focus-visible:ring-[#024968] focus-visible:border-[#024968] rounded-xl text-slate-800 placeholder:text-slate-400 shadow-sm"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <Label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10 h-11 bg-white border-slate-200 focus-visible:ring-[#024968] focus-visible:border-[#024968] rounded-xl text-slate-800 placeholder:text-slate-400 shadow-sm"
                />
              </div>
            </div>

            {/* Password Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Password */}
              <div className="space-y-1.5">
                <Label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    
                    className={` ${pError && "border-red-600 "} pl-10 pr-10 h-11 bg-white border-slate-200 focus-visible:ring-[#024968] focus-visible:border-[#024968] rounded-xl text-slate-800 placeholder:text-slate-400 shadow-sm`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <Label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Confirm Password
                </Label>
                <div className="relative">
                  <RotateCcw className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="pl-10 pr-10 h-11 bg-white border-slate-200 focus-visible:ring-[#024968] focus-visible:border-[#024968] rounded-xl text-slate-800 placeholder:text-slate-400 shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                    aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox
                id="agreed"
                checked={formData.agreed}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, agreed: checked }))
                }
                className="border-slate-300 data-[state=checked]:bg-[#024968] data-[state=checked]:border-[#024968]"
              />
              <label
                htmlFor="agreed"
                className="text-xs text-slate-600 leading-none cursor-pointer select-none"
              >
                I agree to the{' '}
                <a href="/terms" className="font-medium text-[#024968] hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="font-medium text-[#024968] hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!formData.agreed || isSubmitting}
              className="w-full h-11 bg-[#024968] hover:bg-[#01354c] text-white font-semibold rounded-xl text-sm shadow-md shadow-[#024968]/20 transition-all flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          {/* Footer Link */}
          <div className="text-center text-xs text-slate-500 pt-2">
            <span>Already have an account? </span>
            <a href="/login" className="font-bold text-[#024968] hover:underline">
              Log In
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}