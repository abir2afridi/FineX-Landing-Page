import React from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-yellow-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-[20%] w-[500px] h-[500px] bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-semibold uppercase tracking-wide text-primary mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                v2.0 Released
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-dark leading-[1.1] mb-6">
                Experience the <span className="text-primary relative inline-block">
                  Excellence
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span> of Financial Innovations
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed"
            >
              We aspire to empower you in steering your financial journey, providing inventive solutions to simplify and enrich your financial experience.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Button className="pl-8 pr-6 py-4 text-base shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300">
                Open Account <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <button className="inline-flex items-center px-6 py-4 rounded-full border border-gray-300 bg-white font-medium hover:bg-gray-50 transition-all hover:border-gray-400 text-dark shadow-sm hover:shadow-md">
                Generate Card <ArrowUpRight className="ml-2 w-5 h-5 text-gray-400" />
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-6 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60 inline-flex"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <motion.img 
                    key={i}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    src={`https://picsum.photos/100/100?random=${i}`} 
                    alt="User" 
                    className="w-12 h-12 rounded-full border-4 border-cream object-cover relative z-10"
                  />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-cream bg-dark text-white flex items-center justify-center text-xs font-bold relative z-20">
                  15M+
                </div>
              </div>
              <div className="border-l border-gray-200 pl-6">
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-900">Trusted by global companies</p>
              </div>
            </motion.div>
          </div>

          {/* Visual Content - Floating Cards Illustration */}
          <div className="relative h-[600px] w-full hidden lg:block perspective-[1000px]">
            {/* Background decorative path */}
            <svg className="absolute top-0 right-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
               <motion.path 
                 d="M50,250 C100,100 400,100 450,250 S100,400 50,250" 
                 fill="none" 
                 stroke="#D1D5DB" 
                 strokeWidth="1" 
                 strokeDasharray="8,8"
                 initial={{ pathLength: 0, opacity: 0 }}
                 animate={{ pathLength: 1, opacity: 0.5 }}
                 transition={{ duration: 2, ease: "easeInOut" }}
               />
               <motion.circle 
                 cx="450" cy="250" r="8" fill="#FF6B00"
                 animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                 transition={{ duration: 3, repeat: Infinity }}
               />
            </svg>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px]">
                {/* Yellow Card - Premium */}
                <motion.div 
                  className="absolute top-0 left-10 z-10"
                  animate={{ y: [-15, 0, -15], rotate: [-12, -10, -12] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-72 h-44 bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-2xl shadow-[0_20px_50px_-12px_rgba(252,211,77,0.5)] flex flex-col p-6 border border-white/40 backdrop-blur-sm relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        <div className="text-xs font-bold uppercase tracking-widest text-yellow-800 mb-auto relative z-10 flex items-center gap-2">
                           <Zap className="w-4 h-4" /> Premium
                        </div>
                        <div className="flex justify-between items-end relative z-10">
                            <div>
                                <div className="text-lg font-mono text-yellow-900 tracking-wider">**** 4241</div>
                                <div className="text-[10px] uppercase text-yellow-800/60 font-bold mt-1">Elikem Daniels</div>
                            </div>
                            <div className="w-10 h-6 bg-yellow-500/20 rounded flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-yellow-600/50 mr-1"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-600/50"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                 {/* Black Card - Main */}
                 <motion.div 
                   className="absolute top-24 right-[-20px] z-20"
                   animate={{ y: [0, -20, 0], rotate: [6, 8, 6] }}
                   transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                 >
                    <div className="w-72 h-44 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] flex flex-col p-6 text-white border border-gray-700 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        <div className="flex justify-between items-start mb-auto">
                             <span className="font-bold text-lg tracking-tight">FineX</span>
                             <span className="text-xs opacity-70 border border-white/20 px-2 py-0.5 rounded">VISA</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="text-xs opacity-50 mb-1 font-medium">Current Balance</div>
                                <div className="text-2xl font-bold tracking-tight">$24,050.00</div>
                            </div>
                            <div className="w-8 h-8 flex items-center justify-center">
                                <div className="w-5 h-5 bg-white/30 rounded-full mr-[-10px] backdrop-blur-md"></div>
                                <div className="w-5 h-5 bg-white/30 rounded-full backdrop-blur-md"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Glass Card - Business */}
                <motion.div 
                  className="absolute bottom-20 left-4 z-15"
                  animate={{ y: [-10, 5, -10], rotate: [-6, -4, -6] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <div className="w-72 h-44 bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl flex flex-col p-6 border border-white/60 relative group hover:scale-105 transition-transform duration-300">
                         <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 opacity-50"></div>
                         <div className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-auto relative z-10 flex items-center gap-2">
                             <Globe className="w-4 h-4 text-green-600" /> Business
                         </div>
                         <div className="flex justify-between items-end relative z-10">
                            <div>
                              <div className="text-lg font-mono text-gray-800 tracking-wider">**** 8821</div>
                              <div className="text-sm font-bold text-gray-700 mt-1">EXP 12/26</div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                              <ShieldCheck className="w-4 h-4 text-green-600" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Floating Notification */}
                <motion.div 
                   className="absolute top-[30%] -right-[15%] z-30"
                   initial={{ scale: 0, opacity: 0, x: 20 }}
                   animate={{ scale: 1, opacity: 1, x: 0 }}
                   transition={{ delay: 1.5, type: "spring" }}
                >
                   <div className="bg-white p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4 animate-bounce hover:animate-none cursor-pointer hover:scale-105 transition-transform">
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                         <Zap className="w-6 h-6 fill-current" />
                      </div>
                      <div>
                          <div className="text-xs text-gray-500 font-medium">Payment Sent</div>
                          <div className="font-bold text-dark">-$120.50</div>
                      </div>
                   </div>
                </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker / Marquee */}
      <div className="w-full bg-white/80 backdrop-blur-sm border-y border-gray-100 py-8 overflow-hidden mt-12 relative z-10">
         <div className="absolute inset-0 bg-gradient-to-r from-cream via-transparent to-cream z-10 pointer-events-none"></div>
         <div className="flex whitespace-nowrap scrolling-text">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center mx-8 gap-12 group cursor-default">
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest group-hover:text-primary transition-colors">Robust Security</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest group-hover:text-primary transition-colors">Secure Transactions</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest group-hover:text-primary transition-colors">Instant Settlements</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};