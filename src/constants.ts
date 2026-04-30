import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Petal Dreams Girl Dress',
    description: 'A soft, handmade pink dress with delicate crochet flower accents. Perfect for parties and special occasions.',
    price: 45.00,
    category: 'Dresses',
    image: 'https://images.unsplash.com/photo-1620803135981-85b8fa6712fe?q=80&w=600&auto=format&fit=crop',
    tags: ['Popular', 'Customizable']
  },
  {
    id: '2',
    name: 'Sleepy Bunny Amigurumi',
    description: 'Ultra-soft yarn bunny toy with long ears. Safe for babies and perfect for cuddling.',
    price: 25.00,
    category: 'Amigurumi',
    image: 'https://images.unsplash.com/photo-1574359411659-15573a27f0c2?q=80&w=600&auto=format&fit=crop',
    tags: ['New']
  },
  {
    id: '3',
    name: 'Cloud Nine Baby Set',
    description: 'Newborn baby dress with matching booties. Made with organic cotton blend yarn.',
    price: 35.00,
    category: 'Baby',
    image: 'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?q=80&w=600&auto=format&fit=crop',
    tags: ['Popular']
  },
  {
    id: '4',
    name: 'Boho Summer Tote',
    description: 'Spacious crochet bag with sturdy handles. Ideal for beach days or casual outings.',
    price: 30.00,
    category: 'Bags',
    image: 'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?q=80&w=600&auto=format&fit=crop',
    tags: ['Customizable']
  },
  {
    id: '5',
    name: 'Everlasting Rose Bouquet',
    description: 'Hand-crocheted roses that never fade. A beautiful gift for any room.',
    price: 15.00,
    category: 'Flowers',
    image: 'https://images.unsplash.com/photo-1490750967868-886a50ad94a0?q=80&w=600&auto=format&fit=crop',
    tags: ['Limited']
  },
  {
    id: '6',
    name: 'Little Princess Lavender Dress',
    description: 'Exquisite lavender dress with layered textures and a matching hairband.',
    price: 50.00,
    category: 'Dresses',
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=600&auto=format&fit=crop',
    tags: ['New', 'Customizable']
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    user: 'Sarah M.',
    rating: 5,
    comment: 'The dress for my daughter arrived today and it is even more beautiful than in the photos! The quality is amazing.',
    date: '2 days ago'
  },
  {
    id: '2',
    user: 'Emily R.',
    rating: 5,
    comment: 'Bought the bunny amigurumi for my niece. She hasn\'t let go of it since! So soft and well-made.',
    date: '1 week ago'
  },
  {
    id: '3',
    user: 'Jessica L.',
    rating: 4,
    comment: 'Beautiful flowers. They look so real from a distance and add a lovely touch to my desk.',
    date: '2 weeks ago'
  }
];

export const CONTACT_INFO = {
  phone: '099 254 76 88',
  facebook: 'Crochet Villa',
  instagram: 'Crochet Villa',
  whatsapp: 'https://wa.me/94992547688'
};
