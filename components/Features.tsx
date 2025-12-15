import React from 'react';
import { ArrowRight, BarChart3, Globe, Layers, Wallet, CreditCard, PieChart } from 'lucide-react';
import { Button } from './ui/Button';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Text Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[12rem] font-bold text-outline leading-none opacity-40">FEATURES</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <h2 className="text-4xl md:text-5xl font-bold max-w-md">Feel the best experience with our features</h2>
           <p className="text-lg text-gray-600 max-w-xs">Empower individuals and businesses to reach their financial aspirations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          
          {/* Card 1: Custom Design */}
          <div className="bg-[#D1FAE5] rounded-[2rem] p-8 flex flex-col row-span-2 overflow-hidden relative group">
             <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-6">
                <CreditCard className="w-5 h-5 text-green-700" />
             </div>
             <h3 className="text-2xl font-bold mb-4">Custom and design your card, make it look unique</h3>
             <p className="text-sm text-gray-600 mb-8">Create a custom card that reflects your unique style and personality. Choose from a range of colors.</p>
             
             <div className="relative h-64 mt-auto">
                 {/* Mockup cards */}
                 <div className="absolute bottom-[-40px] left-0 w-full h-full">
                     <div className="bg-black text-white p-4 rounded-xl w-48 h-72 absolute bottom-0 left-4 transform -rotate-6 border border-white/10 shadow-xl z-10">
                        <div className="flex justify-between mb-8"><span className="font-bold">FineX</span><span>VISA</span></div>
                        <div className="mt-auto">
                             <div className="text-xs opacity-70">Card Holder</div>
                             <div className="font-medium">Jayesh Patil</div>
                        </div>
                     </div>
                     <div className="bg-[#99f6e4] text-teal-900 p-4 rounded-xl w-48 h-72 absolute bottom-0 left-20 transform rotate-6 border border-white/10 shadow-lg">
                        <div className="flex justify-between mb-8"><span className="font-bold">FineX</span><span>VISA</span></div>
                        <div className="mt-32">
                             <div className="text-4xl">)))</div>
                        </div>
                     </div>
                 </div>
             </div>
          </div>

          {/* Card 2: Financial Insights */}
          <div className="bg-[#DBEAFE] rounded-[2rem] p-8 flex flex-col md:col-span-2 relative overflow-hidden">
             <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-5 h-5 text-blue-600" />
             </div>
             <div className="grid md:grid-cols-2 gap-8">
                 <div>
                    <h3 className="text-2xl font-bold mb-4">Personalized your Financial insights and goals</h3>
                    <p className="text-sm text-gray-600">Track your spending patterns, analyze income or expenses easily, and receive personalized recommendations.</p>
                 </div>
                 <div className="bg-white rounded-2xl p-4 shadow-sm">
                     <div className="flex gap-2 mb-4">
                         <button className="bg-black text-white px-3 py-1 rounded text-xs flex items-center"><ArrowRight className="w-3 h-3 rotate-45 mr-1"/> Income</button>
                         <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs flex items-center"><ArrowRight className="w-3 h-3 -rotate-45 mr-1"/> Expense</button>
                     </div>
                     <div className="mb-4">
                         <div className="text-xs text-gray-500">Income Average</div>
                         <div className="text-2xl font-bold">$1,00,546.00</div>
                         <div className="text-xs text-green-500 flex items-center mt-1">
                             <ArrowRight className="w-3 h-3 -rotate-45 mr-1" /> +15% from last month
                         </div>
                     </div>
                     <div className="h-16 flex items-end gap-1">
                         {[40, 60, 35, 70, 50, 80, 65].map((h, i) => (
                             <div key={i} className={`flex-1 rounded-t ${i === 5 ? 'bg-orange-500' : 'bg-gray-100'}`} style={{height: `${h}%`}}></div>
                         ))}
                     </div>
                 </div>
             </div>
          </div>

          {/* Card 3: Transfer Anywhere */}
          <div className="bg-[#E0D4FC] rounded-[2rem] p-8 flex flex-col md:col-span-2 relative overflow-hidden">
             <div className="flex justify-between items-start mb-6">
                 <div>
                     <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-6">
                        <Globe className="w-5 h-5 text-purple-600" />
                     </div>
                     <h3 className="text-2xl font-bold mb-4 max-w-sm">Free Transfer anywhere around the world</h3>
                     <p className="text-sm text-gray-600 max-w-sm">Create a custom card that reflects your unique style and personality.</p>
                 </div>
                 {/* Simple Dot Map Illustration */}
                 <div className="hidden md:block w-1/2 h-full absolute right-0 top-0 opacity-50">
                    <svg viewBox="0 0 200 100" className="w-full h-full">
                        {[...Array(50)].map((_, i) => (
                             <circle key={i} cx={Math.random() * 200} cy={Math.random() * 100} r={Math.random() * 1.5} fill="#6D28D9" opacity="0.4" />
                        ))}
                        <path d="M40,50 Q100,20 160,50" fill="none" stroke="#6D28D9" strokeWidth="1" strokeDasharray="2,2"/>
                        <circle cx="40" cy="50" r="2" fill="#6D28D9"/>
                        <circle cx="160" cy="50" r="2" fill="#6D28D9"/>
                    </svg>
                 </div>
             </div>
          </div>

          {/* Card 4: Currencies */}
          <div className="bg-[#CCFBEF] rounded-[2rem] p-8 flex flex-col relative overflow-hidden">
             <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-6">
                <Wallet className="w-5 h-5 text-teal-600" />
             </div>
             <h3 className="text-xl font-bold mb-4">Hold money in 30+ currencies</h3>
             
             <div className="mt-8 flex flex-wrap gap-2">
                 <div className="bg-white p-2 rounded-full shadow-sm flex items-center gap-2 pr-4">
                     <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px]">USD</div>
                     <span className="text-xs font-bold">USD</span>
                 </div>
                  <div className="bg-white p-2 rounded-full shadow-sm flex items-center gap-2 pr-4">
                     <div className="w-6 h-6 rounded-full bg-yellow-400 text-black flex items-center justify-center text-[8px]">EUR</div>
                     <span className="text-xs font-bold">EURO</span>
                 </div>
                 <div className="bg-white p-2 rounded-full shadow-sm flex items-center gap-2 pr-4">
                     <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-[8px]">YEN</div>
                     <span className="text-xs font-bold">YEN</span>
                 </div>
                 <div className="bg-white p-2 rounded-full shadow-sm flex items-center gap-2 pr-4">
                     <div className="w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[8px]">GBP</div>
                     <span className="text-xs font-bold">GBP</span>
                 </div>
             </div>
          </div>

          {/* Card 5: Subscriptions */}
          <div className="bg-[#FECACA] rounded-[2rem] p-8 flex flex-col relative overflow-hidden">
             <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-5 h-5 text-red-500" />
             </div>
             <h3 className="text-xl font-bold mb-4">Subscriptions you control in one place</h3>
             
             <div className="mt-4 bg-white rounded-xl p-3 shadow-sm flex items-center justify-between">
                 <div className="flex items-center gap-2">
                     <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white text-xs font-bold">Fi</div>
                     <div>
                         <div className="text-xs font-bold">Figma Pro</div>
                         <div className="text-[10px] text-gray-500">Monthly</div>
                     </div>
                 </div>
                 <div className="font-bold">$12.00</div>
             </div>
             <div className="mt-2 bg-white/50 rounded-xl p-3 flex items-center justify-between opacity-70">
                 <div className="flex items-center gap-2">
                     <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold">Sp</div>
                     <div>
                         <div className="text-xs font-bold">Spotify</div>
                     </div>
                 </div>
             </div>
          </div>
          
           {/* Card 6: CTA */}
           <div className="bg-black text-white rounded-[2rem] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
             <h3 className="text-2xl font-bold mb-6">Check our other product features</h3>
             <Button variant="outline" className="border-none bg-white text-black hover:bg-gray-200">
                 View more <ArrowRight className="w-4 h-4 ml-2" />
             </Button>
          </div>

        </div>
      </div>
    </section>
  );
};