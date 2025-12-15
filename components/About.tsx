import React from 'react';
import { Trophy, PieChart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#FDF8F3] relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[10rem] lg:text-[14rem] font-bold text-outline leading-none opacity-40 whitespace-nowrap">ABOUT US</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get To Know More About FineX</h2>
          <p className="text-lg text-gray-600">
            We prioritize you at the heart of our digital banking experience, offering comprehensive financial solutions to fulfill all your monetary requirements.
          </p>
        </div>

        {/* Visuals - Card Stack */}
        <div className="relative h-80 mb-20 flex justify-center items-center">
            {/* Card 1 */}
            <div className="absolute transform -rotate-12 bg-yellow-200 w-64 h-40 rounded-xl shadow-lg border border-white/20 z-0"></div>
            {/* Card 2 */}
            <div className="absolute transform -rotate-6 bg-[#CCFBEF] w-64 h-40 rounded-xl shadow-lg border border-white/20 z-10"></div>
            {/* Card 3 */}
            <div className="absolute transform rotate-0 bg-[#FDF8F3] w-64 h-40 rounded-xl shadow-xl border border-gray-200 z-20 flex flex-col p-5">
                 <div className="flex justify-between mb-4">
                     <span className="font-bold text-lg">FineX</span>
                     <span>)))</span>
                 </div>
                 <div className="text-2xl tracking-widest font-mono mt-auto">4241 6200</div>
                 <div className="flex justify-between text-xs mt-2">
                     <span>Elikem Daniels</span>
                     <span>09/25</span>
                 </div>
            </div>
             {/* Card 4 */}
            <div className="absolute transform rotate-6 bg-black text-white w-64 h-40 rounded-xl shadow-lg border border-gray-800 z-10 translate-x-32 translate-y-4 flex flex-col p-5">
                 <div className="flex justify-between mb-4">
                     <span className="font-bold text-lg">FineX</span>
                     <div className="w-8 h-5 bg-orange-500 rounded-sm"></div>
                 </div>
                 <div className="mt-auto">
                     <div className="text-xs opacity-50">Balance</div>
                     <div className="text-xl font-bold">$12,400.00</div>
                 </div>
            </div>
        </div>

        {/* Badges */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-20">
            <div className="bg-orange-500 text-white rounded-full pl-2 pr-6 py-2 flex items-center gap-3 shadow-lg shadow-orange-200">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                    <div className="text-xs font-medium opacity-90">Achievements</div>
                    <div className="font-bold text-sm">Best Finance App On Playstore</div>
                </div>
            </div>
            
            <div className="bg-[#CD853F] text-white rounded-full pl-2 pr-6 py-2 flex items-center gap-3 shadow-lg shadow-orange-100">
                 <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <PieChart className="w-5 h-5 text-white" />
                </div>
                <div>
                    <div className="text-xs font-medium opacity-90">Finance</div>
                    <div className="font-bold text-sm">Most Popular Accounting App</div>
                </div>
            </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-gray-200 pt-12">
            <div>
                <div className="text-5xl font-bold text-dark mb-2">243K</div>
                <div className="text-sm text-gray-500 font-medium">FineX Users From All Over The Globe</div>
            </div>
            <div>
                <div className="text-5xl font-bold text-dark mb-2">489M</div>
                <div className="text-sm text-gray-500 font-medium">FineX Revenue In 2024 In The First Quarter</div>
            </div>
            <div>
                <div className="text-5xl font-bold text-dark mb-2">270%</div>
                <div className="text-sm text-gray-500 font-medium">FineX Investment Growth In 2024</div>
            </div>
        </div>
      </div>
    </section>
  );
};