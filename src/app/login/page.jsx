"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Google, GoogleIcon,Apple } from "@dev.icons/react";


import {
    Eye,
    EyeOff,
    Lock,
    Mail,
    Monitor,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="min-h-screen bg-[#EEF3F6] flex items-center justify-center p-4">
            <Card className="w-full max-w-6xl overflow-hidden rounded-2xl p-0 border-0 shadow-xl">
                <div className="grid lg:grid-cols-2">
                    {/* LEFT SIDE */}
                    <div className="bg-[#D8ECF7] p-10 flex flex-col justify-center">
                        <div className="max-w-md mx-auto text-center space-y-4">
                            <h1 className="text-5xl font-bold text-[#005C86]">
                                Cognitive Clarity.
                            </h1>

                            <p className="text-slate-600 leading-7">
                                Accelerate your knowledge acquisition with the intelligent
                                reading platform designed for deep focus.
                            </p>

                            <div className="mt-8 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                                <Image
                                    src="/images/tab-on-table.jpg"
                                    alt="Tablet preview"
                                    width={600}
                                    height={700}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="bg-[#F6F9FB] p-8 lg:p-12 flex items-center">
                        <div className="w-full max-w-md mx-auto space-y-6">
                            {/* Logo */}
                            <div className="space-y-3">
                                <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center border-2 border-cyan-300">
                                    <Image src={"/images/web-reader.png"} alt="logo" width={70} height={70} />
                                </div>

                                <div>
                                    <h2 className="text-4xl font-bold text-[#005C86]">
                                        Welcome back
                                    </h2>
                                    <p className="text-slate-500 mt-1">
                                        Enter your details to access your library.
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
                                    Email or Username
                                </label>

                                <div className="relative">
                                    <Mail className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                                    <Input
                                        placeholder="you@example.com"
                                        className="pl-10 h-12 bg-white"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
                                        Password
                                    </label>

                                    <Link
                                        href="/forgotten"
                                        className="text-sm text-[#0077A8] font-medium hover:underline"
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>

                                <div className="relative">
                                    <Lock className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />

                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="pl-10 pr-10 h-12 bg-white"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-3 text-slate-500"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember */}
                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember" />
                                <label
                                    htmlFor="remember"
                                    className="text-sm text-slate-600 cursor-pointer"
                                >
                                    Remember me
                                </label>
                            </div>

                            {/* Login Button */}
                            <Button className="w-full h-12 bg-[#0077A8] hover:bg-[#006892] text-white tracking-[0.25em] uppercase">
                                Log In
                            </Button>

                            {/* Divider */}
                            <div className="flex items-center gap-3">
                                <Separator className="flex-1" />
                                <span className="text-sm text-slate-400">
                                    Or continue with
                                </span>
                                <Separator className="flex-1" />
                            </div>

                            {/* Social */}
                            <div className="grid grid-cols-2 gap-3">
                                <Button variant="outline" className="h-11 bg-white">
                                    {/* <Google size={32} /> */}
                                    <GoogleIcon size={32} />
                                </Button>

                                <Button variant="outline" className="h-11 bg-white">
                                    {/* <Monitor className="mr-2 h-4 w-4" /> */}
                                    <Apple/>
                                </Button>
                            </div>

                            {/* Signup */}
                            <p className="text-center text-sm text-slate-600">
                                Don't have an account?{" "}
                                <Link
                                    href="/signup"
                                    className="font-semibold text-[#0077A8] hover:underline"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Card>
        </main>
    );
}