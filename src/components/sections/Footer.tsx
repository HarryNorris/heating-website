import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-24 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white tracking-tight">HeatPump<span className="text-emerald-500">Pro</span></h3>
          <p className="text-sm leading-relaxed">
            Reinventing home heating with sustainable, efficient, and quiet technology.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Engineers</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Heat Pump Installation</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">System Design</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Maintenance</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Grant Application</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-emerald-500" />
              <span>hello@heatpumppro.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-emerald-500" />
              <span>0800 123 4567</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>123 Green Street, London</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-stone-800 text-center text-xs">
        &copy; {new Date().getFullYear()} HeatPumpPro Ltd. All rights reserved. MCS Certified.
      </div>
    </footer>
  );
};
