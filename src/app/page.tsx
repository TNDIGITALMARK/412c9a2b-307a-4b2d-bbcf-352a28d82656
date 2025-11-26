import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { VesselCard } from '@/components/VesselCard';
import { FLEET_DATA } from '@/lib/fleet-data';
import Link from 'next/link';
import { Anchor, Ship, Package } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/generated/hero-tugboat.png)',
          }}
        />
        <div className="absolute inset-0 bg-navy" style={{ opacity: 0.85 }} />

        <div className="relative z-10 container mx-auto text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wide mb-6 leading-tight">
            Professional<br />
            Tugboat & Barge<br />
            Solutions
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Reliable marine transportation for cargo operations. Expert service, modern fleet, competitive rates.
          </p>
          <Link href="/quote" className="btn-primary inline-block text-lg">
            Request Quote
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-navy mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg p-8 text-center shadow hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 mx-auto mb-6 text-gold flex items-center justify-center">
                <Anchor className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-3">
                Tugboat Rental
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Powerful tugs for any marine operation. Modern fleet with professional crews for harbor assistance and towing.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg p-8 text-center shadow hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 mx-auto mb-6 text-gold flex items-center justify-center">
                <Ship className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-3">
                Barge Leasing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reliable flat-deck barges for heavy cargo. Flexible leasing options for construction and logistics projects.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg p-8 text-center shadow hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 mx-auto mb-6 text-gold flex items-center justify-center">
                <Package className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-3">
                Cargo Transport
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Full-service logistics for maritime cargo. Expert handling for heavy equipment and bulk materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Fleet</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern, well-maintained vessels ready for your cargo transportation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FLEET_DATA.map((vessel) => (
              <VesselCard key={vessel.id} vessel={vessel} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              All vessels available for daily, weekly, or monthly rental
            </p>
            <Link
              href="/quote"
              className="btn-primary inline-block"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-navy mb-12">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center text-white font-bold text-xl border-3 border-gold">
                  MS
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-navy">Marcus Sullivan</h4>
                  <p className="text-sm text-gray-600">Port Operations Manager</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Oceanic Towing has been our go-to partner for three years. Their fleet is reliable, crews are professional, and rates are competitive. Highly recommended!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center text-white font-bold text-xl border-3 border-gold">
                  JH
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-navy">Jennifer Hayes</h4>
                  <p className="text-sm text-gray-600">Logistics Coordinator</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Outstanding service! The team handled our heavy equipment transport with expertise and care. Will definitely use them again for future projects."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a custom quote on tugboat rentals or barge leasing. Our team is ready to support your maritime operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-primary inline-block">
              Request a Quote
            </Link>
            <a
              href="tel:+15551234567"
              className="btn-secondary inline-block"
            >
              Call: (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
