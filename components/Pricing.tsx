import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Pricing: React.FC = () => {
  const features = [
    "Fast online signup",
    "Active fraud prevention",
    "Account takeover protection",
    "Live phone support",
    "End-to-end encrypted payments"
  ];

  return (
    <section id="pricing" className="py-20 relative">
      {/* Watermark */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none">
         <h2 className="text-[12rem] font-bold text-outline leading-none opacity-40 ml-[-10%]">PRICING</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
                 <h2 className="text-4xl md:text-5xl font-bold mb-6">Priced to help you grow and thrive</h2>
                 <p className="text-gray-600 max-w-md">Start for free and add tools as you need them, or explore our plans to get everything you need at once.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="font-bold text-xl min-w-max">Included with every FineX account:</div>
                <div className="h-px w-full md:w-px md:h-24 bg-gray-200"></div>
                <ul className="space-y-2">
                    {features.map((f, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-primary mr-2" /> {f}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4">Free</h3>
                <p className="text-sm text-gray-500 mb-8 h-12">Sell in person, online, over the phone, or out in the field. No setup fees.</p>
                <div className="mb-2">
                    <span className="text-4xl font-bold">$0.00</span>
                    <span className="text-gray-500 text-sm">/month</span>
                </div>
                <div className="text-xs text-gray-400 mb-8">+ processing fees</div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white group">
                    Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>

            {/* Plus Plan */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
                <h3 className="text-xl font-bold mb-4">Plus</h3>
                <p className="text-sm text-gray-500 mb-8 h-12">Get advanced features designed specifically for restaurants, retailers.</p>
                <div className="mb-2">
                    <span className="text-4xl font-bold">$29+</span>
                    <span className="text-gray-500 text-sm">/month</span>
                </div>
                <div className="text-xs text-gray-400 mb-8">+ processing fees</div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white group">
                    Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>

            {/* Custom Plan */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4">Premium</h3>
                <p className="text-sm text-gray-500 mb-8 h-12">Build a bespoke plan that meets the complexity of your operations.</p>
                <div className="mb-2">
                    <span className="text-4xl font-bold">Custom</span>
                </div>
                <div className="text-xs text-gray-400 mb-8">+ processing fees</div>
                <Button variant="outline" className="w-full group">
                    Contact Sale <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>

      </div>
    </section>
  );
};