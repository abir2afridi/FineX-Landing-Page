import React from 'react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative bg-white">
      {/* Watermark */}
       <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[10rem] font-bold text-outline leading-none opacity-30 whitespace-nowrap">CONTACT US</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Start selling with FineX</h2>
            <h2 className="text-4xl md:text-5xl font-bold">Connect with Us</h2>
         </div>

         <div className="grid lg:grid-cols-2 gap-16">
             {/* Form */}
             <div className="bg-cream rounded-[2rem] p-8 md:p-12">
                 <form className="space-y-6">
                     <div className="flex items-center gap-6 mb-8">
                         <label className="flex items-center gap-2 cursor-pointer">
                             <input type="radio" name="type" className="w-4 h-4 text-primary focus:ring-primary bg-gray-100 border-gray-300" defaultChecked />
                             <span className="font-medium">Say Hi</span>
                         </label>
                         <label className="flex items-center gap-2 cursor-pointer">
                             <input type="radio" name="type" className="w-4 h-4 text-primary focus:ring-primary bg-gray-100 border-gray-300" />
                             <span className="font-medium">Get a Quote</span>
                         </label>
                     </div>

                     <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                         <input type="text" placeholder="Name" className="w-full rounded-xl border-none bg-gray-100 p-4 focus:ring-2 focus:ring-primary" />
                     </div>
                      <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                         <input type="email" placeholder="Email" className="w-full rounded-xl border-none bg-gray-100 p-4 focus:ring-2 focus:ring-primary" />
                     </div>
                      <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                         <textarea rows={4} placeholder="Message" className="w-full rounded-xl border-none bg-gray-100 p-4 focus:ring-2 focus:ring-primary"></textarea>
                     </div>

                     <Button type="submit" className="w-full !rounded-xl py-4 bg-black hover:bg-gray-800">
                         Send Message
                     </Button>
                 </form>
             </div>

             {/* Illustration */}
             <div className="hidden lg:flex items-center justify-center relative">
                 <div className="relative w-full h-[500px]">
                      {/* Decorative elements */}
                      <svg className="absolute top-0 right-10 w-20 h-20 text-gray-300" viewBox="0 0 100 100">
                          <path d="M50,0 L100,50 L50,100 L0,50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      
                       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-[400px]">
                           {/* Cards floating */}
                            <div className="absolute top-0 left-0 bg-black text-white p-6 rounded-2xl w-64 h-96 transform -rotate-12 z-10 shadow-2xl border border-gray-800">
                                <div className="flex justify-between mb-8"><span className="font-bold">FineX</span><span>VISA</span></div>
                                <div className="mt-auto pt-20">
                                     <div className="text-3xl font-mono mb-4">**** 4241</div>
                                     <div className="flex justify-between">
                                        <div>
                                            <div className="text-xs opacity-50">Expires</div>
                                            <div>12/25</div>
                                        </div>
                                         <div className="w-10 h-6 bg-red-500/80 rounded"></div>
                                     </div>
                                </div>
                            </div>
                            
                            <div className="absolute top-10 left-20 bg-yellow-200 p-6 rounded-2xl w-64 h-96 transform rotate-12 z-0 shadow-xl opacity-80">
                                 <div className="w-full h-full border-2 border-dashed border-yellow-500/30 rounded-xl"></div>
                            </div>
                       </div>
                       
                       <div className="absolute bottom-20 right-20 text-4xl">
                           <span className="inline-block transform rotate-12">➰</span>
                       </div>
                 </div>
             </div>
         </div>
      </div>
    </section>
  );
};