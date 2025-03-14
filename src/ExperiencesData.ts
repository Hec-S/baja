export interface Experience {
  id: number;
  title: string;
  description: string;
  price: string;
  location: string;
  category: 'Private Jet' | 'Yacht Tour' | '5-Star Resort' | 'Adventure Package';
  imageUrl: string;
  vipAddons: string[];
  featured: boolean;
}

export const categories = [
  'Private Jet',
  'Yacht Tour',
  '5-Star Resort',
  'Adventure Package'
] as const;

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Private Jet Escape to Cabo',
    description: 'Experience the ultimate luxury with a private jet journey to the pristine beaches of Cabo San Lucas.',
    price: '$12,500',
    location: 'Cabo San Lucas',
    category: 'Private Jet',
    imageUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    vipAddons: ['Champagne Service', 'Gourmet Catering', 'Concierge'],
    featured: true
  },
  {
    id: 2,
    title: 'Luxury Yacht Week',
    description: 'Sail the crystal-clear waters of the Sea of Cortez on a private luxury yacht with full crew and amenities.',
    price: '$18,900',
    location: 'Sea of Cortez',
    category: 'Yacht Tour',
    imageUrl: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    vipAddons: ['Private Chef', 'Scuba Equipment', 'Jet Skis'],
    featured: true
  },
  {
    id: 3,
    title: 'Exclusive Resort Retreat',
    description: 'Indulge in a week of pure relaxation at one of Baja\'s most exclusive 5-star resorts with private beach access.',
    price: '$8,750',
    location: 'Todos Santos',
    category: '5-Star Resort',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    vipAddons: ['Spa Package', 'Private Pool', 'Butler Service'],
    featured: true
  },
  {
    id: 4,
    title: 'Desert & Sea Adventure',
    description: 'Experience the best of both worlds with a curated adventure package exploring Baja\'s unique desert and sea landscapes.',
    price: '$6,200',
    location: 'La Paz',
    category: 'Adventure Package',
    imageUrl: 'https://images.unsplash.com/photo-1596662977545-a0f9d5b1f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    vipAddons: ['Private Guide', 'Helicopter Tours', 'Luxury Camping'],
    featured: false
  },
  {
    id: 5,
    title: 'Beachfront Villa Getaway',
    description: 'Escape to your own private beachfront villa with panoramic ocean views and personalized service.',
    price: '$9,300',
    location: 'San José del Cabo',
    category: '5-Star Resort',
    imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    vipAddons: ['Private Chef', 'In-Villa Spa', 'Infinity Pool'],
    featured: false
  },
  {
    id: 6,
    title: 'Sunset Yacht Cruise',
    description: 'Embark on an unforgettable sunset cruise aboard a luxury yacht with gourmet dining and premium drinks.',
    price: '$3,500',
    location: 'Cabo San Lucas',
    category: 'Yacht Tour',
    imageUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    vipAddons: ['Live Music', 'Premium Bar', 'Photography Service'],
    featured: false
  },
  {
    id: 7,
    title: 'Private Jet Island Hopping',
    description: 'Discover multiple Baja destinations in style with a private jet island-hopping adventure.',
    price: '$15,800',
    location: 'Multiple Destinations',
    category: 'Private Jet',
    imageUrl: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    vipAddons: ['Luxury Transfers', 'Exclusive Reservations', 'Personal Shopper'],
    featured: false
  },
  {
    id: 8,
    title: 'Whale Watching Expedition',
    description: 'Get up close with majestic whales on this luxury expedition with marine biologists and premium accommodations.',
    price: '$7,200',
    location: 'Magdalena Bay',
    category: 'Adventure Package',
    imageUrl: 'https://images.unsplash.com/photo-1511314522102-bac9d5cd0571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    vipAddons: ['Private Boat', 'Underwater Photography', 'Gourmet Meals'],
    featured: false
  }
];
