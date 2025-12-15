import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#' },
    { label: 'Feature', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 grid grid-cols-2 gap-0.5">
               <span className="bg-primary rounded-full"></span>
               <span className="bg-dark rounded-full"></span>
               <span className="bg-dark rounded-full"></span>
               <span className="bg-gray-300 rounded-full"></span>
            </div>
            <span className="font-bold text-2xl tracking-tight">FineX</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1 p-1 bg-white rounded-full border border-gray-200">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${link.label === 'Home' ? 'bg-dark text-white' : 'text-gray-600 hover:text-dark hover:bg-gray-100'}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm font-medium hover:text-primary">Login</a>
            <Button variant="secondary" className="!px-6 !py-2 text-sm">
              Signup <User className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-dark focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-dark hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3 px-3">
              <a href="#" className="text-base font-medium text-center">Login</a>
              <Button variant="secondary" className="w-full">Signup</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};