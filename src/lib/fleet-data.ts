export interface Vessel {
  id: string;
  name: string;
  type: 'tugboat' | 'barge';
  image: string;
  specifications: {
    horsepower?: number;
    length: number;
    bollardPull?: number;
    payloadCapacity?: number;
  };
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
  availability: 'available' | 'booked' | 'maintenance';
  description: string;
}

export const FLEET_DATA: Vessel[] = [
  {
    id: 'atlantic-warrior',
    name: 'Atlantic Warrior',
    type: 'tugboat',
    image: '/generated/fleet-tugboat-1.png',
    specifications: {
      horsepower: 3200,
      length: 65,
      bollardPull: 75,
    },
    dailyRate: 2800,
    weeklyRate: 17500,
    monthlyRate: 65000,
    availability: 'available',
    description: 'Powerful 3200 HP tugboat with 75-ton bollard pull capacity, ideal for heavy-duty towing operations and harbor assistance.',
  },
  {
    id: 'harbor-master',
    name: 'Harbor Master',
    type: 'tugboat',
    image: '/generated/fleet-tugboat-2.png',
    specifications: {
      horsepower: 2800,
      length: 58,
      bollardPull: 65,
    },
    dailyRate: 2500,
    weeklyRate: 15000,
    monthlyRate: 55000,
    availability: 'available',
    description: 'Versatile 2800 HP tugboat perfect for port operations and medium-duty cargo assistance with reliable 65-ton bollard pull.',
  },
  {
    id: 'coastal-champion',
    name: 'Coastal Champion',
    type: 'tugboat',
    image: '/generated/fleet-tugboat-3.png',
    specifications: {
      horsepower: 4000,
      length: 72,
      bollardPull: 85,
    },
    dailyRate: 3200,
    weeklyRate: 19500,
    monthlyRate: 72000,
    availability: 'available',
    description: 'Our flagship tugboat with 4000 HP and 85-ton bollard pull, designed for the most demanding offshore and deep-water operations.',
  },
  {
    id: 'cargo-barge-a1',
    name: 'Cargo Barge A1',
    type: 'barge',
    image: '/generated/fleet-barge-1.png',
    specifications: {
      length: 200,
      payloadCapacity: 2000,
    },
    dailyRate: 1800,
    weeklyRate: 11000,
    monthlyRate: 40000,
    availability: 'available',
    description: '200-foot deck barge with 2000-ton payload capacity, perfect for heavy equipment transport, construction materials, and large-scale cargo operations.',
  },
  {
    id: 'cargo-barge-b2',
    name: 'Cargo Barge B2',
    type: 'barge',
    image: '/generated/fleet-barge-2.png',
    specifications: {
      length: 180,
      payloadCapacity: 1500,
    },
    dailyRate: 1500,
    weeklyRate: 9000,
    monthlyRate: 33000,
    availability: 'available',
    description: '180-foot deck barge with 1500-ton capacity, ideal for medium-sized cargo transport, port logistics, and coastal operations.',
  },
];

export const SERVICE_CATEGORIES = [
  {
    id: 'tugboat-rental',
    title: 'Tugboat Rental',
    description: 'Powerful tugs for any marine operation',
    icon: 'anchor',
  },
  {
    id: 'barge-leasing',
    title: 'Barge Leasing',
    description: 'Reliable flat-deck barges for heavy cargo',
    icon: 'ship',
  },
  {
    id: 'cargo-transport',
    title: 'Cargo Transport',
    description: 'Full-service logistics for maritime cargo',
    icon: 'container',
  },
];

export interface QuoteRequest {
  projectLocation: string;
  cargoType: string;
  tonnageEstimate: number;
  projectDuration: string;
  preferredStartDate: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  additionalDetails?: string;
}
