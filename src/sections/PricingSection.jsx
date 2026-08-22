"use client"
import { Button } from '@/components/ui/button';
import { Zap, CheckCircle2, CircleMinus, Sparkles, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { inter } from '../app/layout';

import { useState } from "react";

const plans = [
  {
    id: 'basic_free',
    name: 'Basic',
    price: '$0',
    period: '/mo',
    popular: false,
    features: [
      'Access to free classics',
      'Ad-supported reading',
      '1 device sync',
    ],
    cta: 'Current Plan',
    variant: 'outline',
  },
  {
    id: "standard_month",
    name: 'Pro',
    price: '$9.99',
    period: '/mo',
    popular: true,
    badge: 'MOST POPULAR',
    features: [
      'Unlimited access to full library',
      'Ad-free experience',
      'Sync across unlimited devices',
      'Offline reading',
    ],
    cta: 'Upgrade to Pro',
    variant: 'default',
  },
  {
    id:"premium_family",
    name: 'Family',
    price: '$19.99',
    period: '/mo',
    popular: false,
    features: [
      'Everything in Pro',
      'Up to 6 profiles',
      'Parental controls',
    ],
    cta: 'Start Trial',
    variant: 'outline',
  },
];


export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingData = [
    {
      id: "basic",
      name: "Basic",
      priceMonthly: "Free",
      priceAnnual: "Free",
      period: "/forever",
      description: "Essential tools for the casual reader seeking clarity.",
      isPopular: false,
      buttonText: "GET STARTED",
      buttonVariant: "outline",
      features: [
        { text: "Standard reading formats", included: true },
        { text: "5 Offline downloads / month", included: true },
        { text: "Ad-supported experience", included: false },
        { text: "Community support only", included: false },
      ],
    },
    {
      id: "standard",
      name: "Standard",
      priceMonthly: "$12",
      priceAnnual: "$28.8",
      periodMonthly: "/mo",
      periodAnnual: "/y",
      description: "Uninterrupted focus for dedicated knowledge workers.",
      isPopular: true,
      buttonText: "CHOOSE STANDARD",
      buttonVariant: "solid",
      features: [
        { text: "Ad-free reading", included: true, highlighted: true },
        { text: "Unlimited offline downloads", included: true },
        { text: "Advanced annotations & tags", included: true },
        { text: "Priority email support", included: true },
      ],
    },
    {
      id: "premium",
      name: "Premium",
      priceMonthly: "$29",
      priceAnnual: "$69.6",
      periodMonthly: "/3mo",
      periodAnnual: "/y",
      description: "The ultimate cognitive toolkit for research and synthesis.",
      isPopular: false,
      buttonText: "CHOOSE PREMIUM",
      buttonVariant: "outline",
      features: [
        { text: "Everything in Standard", included: true },
        { text: "Early access to beta features", included: true, highlighted: true },
        { text: "AI-powered knowledge mapping", included: true },
        { text: "Dedicated account manager", included: true },
      ],
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-slate-50 text-slate-800 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center items-center">
      {/* Background Decorative Abstract Waves & Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 w-[500px] h-[500px] bg-teal-100/50 rounded-full blur-3xl" />

        {/* Subtle wavy lines SVG pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30 stroke-teal-300/40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="wave-pattern"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 50 Q 25 30, 50 50 T 100 50"
                fill="none"
                strokeWidth="1.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
        {/* Header Section */}
        <div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-teal-800 text-xs font-bold tracking-widest uppercase shadow-sm backdrop-blur-sm">
            <Zap className="w-3.5 h-3.5 fill-teal-600 text-teal-600" />
            <span>PRICING PLANS</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#082a36] tracking-tight leading-tight">
            Accelerate your cognitive velocity.
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            Choose the tier that fits your knowledge management workflow. Experience seamless reading, advanced mapping, and uninterrupted focus.
          </p>

          {/* Optional Billing Toggle */}
          <div className="pt-2 flex items-center gap-3">
            <span className={`text-sm font-medium ${!isAnnual ? "text-slate-900" : "text-slate-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-12 h-6 bg-teal-800 rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
              aria-label="Toggle annual billing"
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${isAnnual ? "translate-x-6" : "translate-x-0"
                  }`}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-1.5 ${isAnnual ? "text-slate-900" : "text-slate-500"}`}>
              Annual
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-0.5 rounded-full border border-teal-200">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 items-stretch">
          {pricingData.map((tier) => {
            const price = isAnnual ? tier.priceAnnual : tier.priceMonthly;
            const period = isAnnual ? tier.periodAnnual : tier.periodMonthly;

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between bg-white/90 backdrop-blur-md rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl border ${tier.isPopular
                  ? "border-teal-600 shadow-xl shadow-teal-900/10 scale-105 z-20"
                  : "border-slate-200/80 shadow-lg shadow-slate-200/50 hover:border-teal-300"
                  }`}
              >
                {/* Most Popular Badge */}
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#084c61] text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="space-y-6 text-left">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-[#082a36]">
                    {tier.name}
                  </h3>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#082a36] tracking-tight">
                      {price}
                    </span>
                    <span className="text-slate-500 font-medium text-sm sm:text-base">
                      {period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed min-h-[40px]">
                    {tier.description}
                  </p>

                  <div className="h-px w-full bg-slate-100" />

                  {/* Feature List */}
                  <ul className="space-y-3.5 pt-2">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <CheckCircle2 className="w-5 h-5 text-[#084c61] fill-teal-100 shrink-0 mt-0.5" />
                        ) : (
                          <CircleMinus className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm leading-snug ${!feature.included
                            ? "text-slate-400"
                            : feature.highlighted
                              ? "font-bold text-[#084c61]"
                              : "text-slate-700"
                            }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                {/* <form >
                  <section>
                    <button type="submit" role="link">
                      Checkout
                    </button>
                  </section>
                </form> */}

                <form action="/api/checkout_sessions" method="POST" className="pt-8 mt-auto">
                  {tier.buttonVariant === "solid" ? (
                    <button  type="submit" role="link" className="w-full py-3 px-6 rounded-full bg-[#084c61] hover:bg-[#053543] text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg focus:ring-2 focus:ring-teal-700 focus:ring-offset-2">
                      {tier.buttonText}
                    </button>
                  ) : (
                    <button  type="submit" role="link" className="w-full py-3 px-6 rounded-full border-2 border-[#084c61] text-[#084c61] hover:bg-teal-50 font-bold text-xs tracking-wider uppercase transition-all duration-200 focus:ring-2 focus:ring-teal-700 focus:ring-offset-2">
                      {tier.buttonText}
                    </button>
                  )}
                </form>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}