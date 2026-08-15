import Link from 'next/link';
import { redirect } from 'next/navigation';
import { CheckCircle2, ArrowRight, Mail, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { stripe } from '../../lib/stripe';

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error('Please provide a valid session_id (`cs_test_...`)');
  }

  const {
    status,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent'],
  });

  if (status === 'open') {
    return redirect('/');
  }

  if (status === 'complete') {
    return (
      <section className="min-h-screen bg-[#f2f9fd] flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-md bg-white border border-[#e2f1f8] rounded-3xl shadow-lg overflow-hidden text-center">
          <CardHeader className="pt-10 pb-4 px-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-serif font-bold text-[#0c4a60]">
              Payment Successful!
            </CardTitle>
            <p className="text-sm text-[#4a7280] mt-1">
              Thank you for your purchase. We appreciate your business!
            </p>
          </CardHeader>

          <CardContent className="px-6 py-4 space-y-4">
            <div className="bg-[#f0f8fd] border border-[#d2ecf8] rounded-2xl p-4 text-left flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#0c4a60] shrink-0 mt-0.5" />
              <div className="text-xs md:text-sm text-[#3b6878]">
                A confirmation email will be sent to{' '}
                <span className="font-semibold text-[#0c4a60] break-all">
                  {customerEmail}
                  orders@example.com
                </span>.
              </div>
            </div>

            <div className="text-xs text-[#6890a0] flex items-center justify-center gap-1">
              <HelpCircle className="w-4 h-4" />
              <span>
                Questions? Email{' '}
                <a
                  href="mailto:orders@example.com"
                  className="text-[#0c4a60] font-medium underline hover:text-[#083444] transition-colors"
                >
                  orders@example.com
                </a>
              </span>
            </div>
          </CardContent>

          <CardFooter className="pb-8 pt-4 px-6">
            <Button
              asChild
              className="w-full bg-[#0c4a60] hover:bg-[#083444] text-white font-medium py-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-none"
            >
              <Link href="/" className=' flex items-center gap-3'>
                <span>Return to Homepage</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </section>
    );
  }

  return null;
}