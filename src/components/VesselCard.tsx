import Image from 'next/image';
import Link from 'next/link';
import { Vessel } from '@/lib/fleet-data';

interface VesselCardProps {
  vessel: Vessel;
}

export function VesselCard({ vessel }: VesselCardProps) {
  const statusColors = {
    available: 'bg-green-500',
    booked: 'bg-red-500',
    maintenance: 'bg-yellow-500',
  };

  const statusLabels = {
    available: 'Available',
    booked: 'Booked',
    maintenance: 'Maintenance',
  };

  return (
    <Link href={`/vessel/${vessel.id}`}>
      <div className="group relative bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={vessel.image}
            alt={vessel.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">View Details</span>
          </div>
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <div className={`${statusColors[vessel.availability]} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
              {statusLabels[vessel.availability]}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-navy mb-2">{vessel.name}</h3>
          <p className="text-sm text-gray-600 mb-3 capitalize">
            {vessel.type === 'tugboat' ? 'Tugboat' : 'Cargo Barge'}
          </p>

          {/* Specifications */}
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Length:</span>
              <span className="font-semibold text-navy">{vessel.specifications.length} ft</span>
            </div>
            {vessel.specifications.horsepower && (
              <div className="flex justify-between">
                <span className="text-gray-600">Horsepower:</span>
                <span className="font-semibold text-navy">{vessel.specifications.horsepower} HP</span>
              </div>
            )}
            {vessel.specifications.bollardPull && (
              <div className="flex justify-between">
                <span className="text-gray-600">Bollard Pull:</span>
                <span className="font-semibold text-navy">{vessel.specifications.bollardPull} tons</span>
              </div>
            )}
            {vessel.specifications.payloadCapacity && (
              <div className="flex justify-between">
                <span className="text-gray-600">Capacity:</span>
                <span className="font-semibold text-navy">{vessel.specifications.payloadCapacity} tons</span>
              </div>
            )}
          </div>

          {/* Pricing */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Daily Rate</span>
              <span className="text-gold font-bold text-lg">
                ${vessel.dailyRate.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
