import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FLEET_DATA } from '@/lib/fleet-data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, CheckCircle } from 'lucide-react';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  return FLEET_DATA.map((vessel) => ({
    id: vessel.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function VesselDetailPage({ params }: PageProps) {
  const { id } = await params;
  const vessel = FLEET_DATA.find((v) => v.id === id);

  if (!vessel) {
    notFound();
  }

  const statusColors = {
    available: 'bg-green-500',
    booked: 'bg-red-500',
    maintenance: 'bg-yellow-500',
  };

  const statusLabels = {
    available: 'Available Now',
    booked: 'Currently Booked',
    maintenance: 'In Maintenance',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="flex items-center text-navy hover:text-gold transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Fleet
          </Link>
        </div>
      </div>

      {/* Vessel Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={vessel.image}
                alt={vessel.name}
                fill
                className="object-cover"
              />
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <div className={`${statusColors[vessel.availability]} text-white px-4 py-2 rounded-full font-semibold shadow-lg`}>
                  {statusLabels[vessel.availability]}
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="mb-6">
                <p className="text-gold font-semibold uppercase tracking-wide mb-2">
                  {vessel.type === 'tugboat' ? 'Tugboat' : 'Cargo Barge'}
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
                  {vessel.name}
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {vessel.description}
                </p>
              </div>

              {/* Specifications Table */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Technical Specifications
                </h2>
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 text-gray-600 font-medium">Length</td>
                      <td className="py-3 text-right text-navy font-bold">
                        {vessel.specifications.length} feet
                      </td>
                    </tr>
                    {vessel.specifications.horsepower && (
                      <tr>
                        <td className="py-3 text-gray-600 font-medium">Horsepower</td>
                        <td className="py-3 text-right text-navy font-bold">
                          {vessel.specifications.horsepower} HP
                        </td>
                      </tr>
                    )}
                    {vessel.specifications.bollardPull && (
                      <tr>
                        <td className="py-3 text-gray-600 font-medium">Bollard Pull</td>
                        <td className="py-3 text-right text-navy font-bold">
                          {vessel.specifications.bollardPull} tons
                        </td>
                      </tr>
                    )}
                    {vessel.specifications.payloadCapacity && (
                      <tr>
                        <td className="py-3 text-gray-600 font-medium">Payload Capacity</td>
                        <td className="py-3 text-right text-navy font-bold">
                          {vessel.specifications.payloadCapacity} tons
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td className="py-3 text-gray-600 font-medium">Type</td>
                      <td className="py-3 text-right text-navy font-bold capitalize">
                        {vessel.type}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pricing */}
              <div className="bg-navy text-white rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">Rental Rates</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Daily Rate</span>
                    <span className="text-2xl font-bold text-gold">
                      ${vessel.dailyRate.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Weekly Rate</span>
                    <span className="text-2xl font-bold text-gold">
                      ${vessel.weeklyRate.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Monthly Rate</span>
                    <span className="text-2xl font-bold text-gold">
                      ${vessel.monthlyRate.toLocaleString()}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mt-4">
                  * Custom project pricing available. Contact us for long-term contracts.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  href="/quote"
                  className="btn-primary w-full text-center block"
                >
                  Request Quote for This Vessel
                </Link>
                <a
                  href="tel:+15551234567"
                  className="btn-secondary w-full text-center block"
                >
                  Call Now: (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">
              Included Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy mb-1">Professional Crew</h3>
                  <p className="text-gray-600 text-sm">
                    Experienced maritime professionals operate all vessels
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy mb-1">24/7 Support</h3>
                  <p className="text-gray-600 text-sm">
                    Round-the-clock assistance for your operations
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy mb-1">Safety Certified</h3>
                  <p className="text-gray-600 text-sm">
                    All vessels meet international maritime safety standards
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy mb-1">Regular Maintenance</h3>
                  <p className="text-gray-600 text-sm">
                    Well-maintained fleet ensures reliable operation
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy mb-1">Insurance Coverage</h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive insurance for peace of mind
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy mb-1">Flexible Scheduling</h3>
                  <p className="text-gray-600 text-sm">
                    Book by day, week, or month based on your needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Vessels CTA */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Explore Our Full Fleet
          </h2>
          <p className="text-gray-600 mb-6">
            We have a variety of tugboats and barges to meet your specific needs
          </p>
          <Link href="/" className="btn-primary inline-block">
            View All Vessels
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
