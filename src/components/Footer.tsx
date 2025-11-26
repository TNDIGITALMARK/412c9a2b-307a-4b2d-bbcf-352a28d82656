import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">
              Oceanic Towing
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Professional tugboat and barge rental services for all your maritime cargo transportation needs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/leasing" className="text-gray-300 hover:text-gold transition-colors">
                  Leasing Options
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-gray-300 hover:text-gold transition-colors">
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 text-gold flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@oceanictowing.com"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  info@oceanictowing.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-gold flex-shrink-0" />
                <span className="text-gray-300">
                  123 Harbor Drive<br />
                  Port City, PC 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">Business Hours</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="font-medium">24/7</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-medium">24/7</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium">24/7</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-400">
              Emergency services available 24/7
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Oceanic Towing & Barge Rentals. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
