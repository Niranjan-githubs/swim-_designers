import React from 'react';
import { Waves, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Award, Shield, Star } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Reviews', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    'Custom Pool Design',
    'Pool Installation',
    'Water Features',
    'Pool Renovation',
    'Maintenance Services',
    'Emergency Repairs'
  ];

  const certifications = [
    { icon: Shield, text: 'Licensed Contractor' },
    { icon: Award, text: 'Bonded & Insured' },
    { icon: Star, text: 'BBB A+ Rating' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-br from-sky-400 to-blue-600 p-2 rounded-lg">
                <Waves className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">AquaDesigns</h3>
                <p className="text-xs text-gray-400">Premium Pool Designers</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming backyards into stunning aquatic retreats for over 15 years. 
              Your trusted partner for custom pool design and installation.
            </p>
            
            {/* Certifications */}
            <div className="space-y-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center text-sm text-gray-300">
                  <cert.icon size={14} className="mr-2 text-sky-400" />
                  {cert.text}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-sky-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 hover:text-sky-400 transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-sky-400" />
                <div>
                  <p className="text-gray-300">(555) 123-POOL</p>
                  <p className="text-xs text-gray-400">24/7 Emergency: (555) 911-POOL</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-sky-400" />
                <div>
                  <p className="text-gray-300">info@aquadesigns.com</p>
                  <p className="text-xs text-gray-400">quotes@aquadesigns.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1 text-sky-400" />
                <div>
                  <p className="text-gray-300">Serving Southern California</p>
                  <p className="text-xs text-gray-400">LA, Orange & Ventura Counties</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} AquaDesigns. All rights reserved. | 
              <span className="mx-2">License #123456</span> | 
              <span className="mx-2">Bonded & Insured</span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Sitemap</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Strip */}
     
    </footer>
  );
};

export default Footer;