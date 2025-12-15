import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
       {/* Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[10rem] font-bold text-outline leading-none opacity-40 whitespace-nowrap">TESTIMONIALS</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative flex justify-center lg:justify-end">
                <div className="w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] bg-gray-200 rounded-[3rem] overflow-hidden relative">
                    <img src="https://picsum.photos/600/800?random=5" alt="Testimonial User" className="w-full h-full object-cover" />
                </div>
                {/* Decorative Elements */}
                 <div className="absolute bottom-10 left-10 lg:left-20 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-[200px]">
                    <div className="flex gap-1 mb-2">
                        {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-sm">★</span>)}
                    </div>
                    <div className="text-xs font-medium">"Best financial decision I ever made!"</div>
                 </div>
            </div>

            {/* Content */}
            <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Join 15+ million people who already trust us with their money</h2>
                
                <div className="bg-[#E0E7FF] p-8 rounded-3xl relative">
                    <div className="absolute -top-6 left-8 bg-black text-white p-3 rounded-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                        </svg>
                    </div>
                    
                    <p className="text-lg text-gray-800 leading-relaxed mb-6 pt-4">
                        "Overall, this system has been a life-changer for me. It has revolutionized the way I approach my finances, providing me with the tools, insights, and security I need to unlock my financial freedom."
                    </p>
                    
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-bold text-lg">Samriddhi Singh</h4>
                            <span className="text-sm text-gray-500">Entrepreneur</span>
                        </div>
                        <div className="flex gap-2">
                             <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
                                 <ArrowLeft className="w-4 h-4" />
                             </button>
                             <button className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition-colors">
                                 <ArrowRight className="w-4 h-4" />
                             </button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </section>
  );
};