import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white/5 rounded-3xl p-8 mb-16 border border-white/10">
            <div className="mb-6 md:mb-0">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 text-white">
                    <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Keep up with the latest</h3>
                <p className="text-gray-400">Join our newsletter to stay up to date on features and releases.</p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
                 <div className="relative">
                     <input type="email" placeholder="Enter your email" className="w-full sm:w-80 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary" />
                     <div className="absolute -bottom-6 left-6 text-[10px] text-gray-500">By subscribing you agree to our <a href="#" className="underline">Privacy Policy</a></div>
                 </div>
                 <Button variant="secondary" className="px-8">Subscribe</Button>
            </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16 border-b border-white/10 pb-16">
            <div className="col-span-2 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                    <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
                        <span className="bg-primary rounded-full"></span>
                        <span className="bg-white rounded-full"></span>
                        <span className="bg-white rounded-full"></span>
                        <span className="bg-gray-500 rounded-full"></span>
                    </div>
                    <span className="font-bold text-xl">FineX</span>
                </div>
                <p className="text-gray-400 text-sm max-w-xs mb-6">
                    Make your complicated finance more simple.
                </p>
            </div>

            <div>
                <h4 className="font-bold mb-6 text-gray-300">FineX</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-primary">Payment</a></li>
                    <li><a href="#" className="hover:text-primary">Card</a></li>
                    <li><a href="#" className="hover:text-primary">Pricing</a></li>
                </ul>
            </div>
            
            <div>
                <h4 className="font-bold mb-6 text-gray-300">Products</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-primary">Personal</a></li>
                    <li><a href="#" className="hover:text-primary">Business</a></li>
                    <li><a href="#" className="hover:text-primary">Invoices</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold mb-6 text-gray-300">Company</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-primary">About</a></li>
                    <li><a href="#" className="hover:text-primary">Careers</a></li>
                    <li><a href="#" className="hover:text-primary">Press Kit</a></li>
                </ul>
            </div>

            <div>
                 <h4 className="font-bold mb-6 text-gray-300">Support</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-primary">Help</a></li>
                    <li><a href="#" className="hover:text-primary">FAQ</a></li>
                    <li><a href="#" className="hover:text-primary">Contact</a></li>
                </ul>
            </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>© 2024 FineX. All Rights Reserved</div>
            <div className="flex gap-4">
                <a href="#" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white"><Youtube className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white"><Linkedin className="w-5 h-5" /></a>
            </div>
        </div>

      </div>
    </footer>
  );
};