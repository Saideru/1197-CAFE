import { MenuItem, SignatureDrink, CateringPackage, PromoItem } from '../types';

// Image asset paths (generated images matching brand specifications)
export const IMAGES = {
  logoOval: '/src/assets/images/eleven97_official_logo_1785868383429.jpg',
  mascot: '/src/assets/images/eleven97_mascot_1785867471438.jpg',
  ubeMatcha: '/src/assets/images/ube_matcha_drink_1785867491083.jpg',
  strawberryCloud: '/src/assets/images/strawberry_cloud_drink_1785867501650.jpg',
  goldenHourOat: '/src/assets/images/golden_hour_oat_drink_1785867513886.jpg',
  lemonEspresso: '/src/assets/images/lemon_espresso_drink_1785867528071.jpg',
  sunnyNana: '/src/assets/images/sunny_nana_drink_1785867544435.jpg',
  macAndCheese: '/src/assets/images/mac_and_cheese_bowl_1785867559267.jpg',
};

export const CAFE_INFO = {
  name: "Eleven97 Neighborhood Cafe",
  shorthand: "1197",
  established: "EST. 2023",
  tagline: "Neighborhood Cafe",
  address: "9B Lourdes St., Brgy. Plainview, Mandaluyong, Philippines",
  email: "cafe.eleven97@gmail.com",
  messengerId: "293478050507482",
  messengerUrl: "https://m.me/293478050507482",
  facebookPageUrl: "https://www.facebook.com/293478050507482",
  // Clearly marked non-breaking placeholders for info not provided in prompt
  hoursPlaceholder: "Mon - Sun: 8:00 AM - 10:00 PM",
  phonePlaceholder: "+63 9XX XXX XXXX",
  socialFacebook: "https://www.facebook.com/293478050507482",
  socialInstagram: "@eleven97cafe",
  socialTikTok: "@eleven97cafe",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.439871148425!2d121.03714657577531!3d14.57399438590924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c84c1fbb4621%3A0xd6ef70e53a2eb67e!2sLourdes%2C%20Mandaluyong%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sph!4v1710000000000!5m2!1sen!2sph"
};

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE (ICED / HOT)
  { id: 'c1', name: 'Americano', category: 'coffee', tempOptions: ['Iced', 'Hot'], description: 'Classic double shot espresso diluted with hot or cold water.' },
  { id: 'c2', name: 'Latte', category: 'coffee', tempOptions: ['Iced', 'Hot'], description: 'Smooth espresso combined with silky steamed or cold milk.' },
  { id: 'c3', name: 'Vanilla Latte', category: 'coffee', tempOptions: ['Iced', 'Hot'], isPopular: true, description: 'Classic latte infused with rich, aromatic vanilla syrup.' },
  { id: 'c4', name: 'Hazelnut Latte', category: 'coffee', tempOptions: ['Iced', 'Hot'], description: 'Espresso milk drink sweetened with nutty hazelnut goodness.' },
  { id: 'c5', name: 'Caramel Macchiato', category: 'coffee', tempOptions: ['Iced', 'Hot'], isPopular: true, description: 'Layered espresso with vanilla milk and rich caramel drizzle.' },
  { id: 'c6', name: 'Salted Caramel', category: 'coffee', tempOptions: ['Iced', 'Hot'], isPopular: true, description: 'Decadent balance of sweet caramel syrup and sea salt flakes.' },
  { id: 'c7', name: 'Mocha', category: 'coffee', tempOptions: ['Iced', 'Hot'], description: 'Rich chocolate blended with dark espresso and creamy milk.' },
  { id: 'c8', name: 'White Mocha', category: 'coffee', tempOptions: ['Iced', 'Hot'], description: 'Creamy white chocolate sauce paired with bold espresso shots.' },
  { id: 'c9', name: 'Spanish Latte', category: 'coffee', tempOptions: ['Iced', 'Hot'], isPopular: true, description: 'Velvety sweet latte made with condensed milk and rich espresso.' },
  { id: 'c10', name: 'Ube Latte', category: 'coffee', tempOptions: ['Iced', 'Hot'], isPopular: true, description: 'Local Filipino favorite ube halaya cream paired with espresso.' },
  { id: 'c11', name: 'Dirty Matcha', category: 'coffee', tempOptions: ['Iced', 'Hot'], isPopular: true, description: 'Premium Ceremonial Matcha layered with a shot of dark espresso.' },

  // NON-COFFEE
  { id: 'nc1', name: 'Strawberry Milk', category: 'non-coffee', isPopular: true, description: 'Real strawberry reduction swirled with creamy fresh milk.' },
  { id: 'nc2', name: 'Blueberry Milk', category: 'non-coffee', description: 'Sweet blueberry compote layered with fresh cold milk.' },
  { id: 'nc3', name: 'Ube Milk', category: 'non-coffee', isPopular: true, description: 'Creamy real ube purple yam sauce with ice cold milk.' },
  { id: 'nc4', name: 'Choco Hazelnut', category: 'non-coffee', description: 'Indulgent chocolate hazelnut blend topped with cocoa powder.' },
  { id: 'nc5', name: 'Matcha', category: 'non-coffee', isPopular: true, description: 'Authentic Japanese green tea matcha whisked with sweet milk.' },
  { id: 'nc6', name: 'Ube Matcha', category: 'non-coffee', isPopular: true, description: 'Signature layered drink with purple ube base and green matcha top.' },

  // FLAVORED SODA
  { id: 'fs1', name: 'Blueberry', category: 'flavored-soda', description: 'Refreshing sparkling soda with sweet blueberry fruit syrup.' },
  { id: 'fs2', name: 'Strawberry', category: 'flavored-soda', description: 'Crisp carbonated soda infused with bright strawberry flavor.' },
  { id: 'fs3', name: 'Mixed Berries', category: 'flavored-soda', isPopular: true, description: 'Fizzy soda packed with berry puree burst.' },
  { id: 'fs4', name: 'Green Apple', category: 'flavored-soda', description: 'Tangy and sweet green apple sparkling refresher.' },
  { id: 'fs5', name: 'Lychee', category: 'flavored-soda', description: 'Floral and sweet lychee syrup over sparkling soda and ice.' },
];

export const SIGNATURE_DRINKS: SignatureDrink[] = [
  {
    id: 'sd-ube-matcha',
    name: 'Ube Matcha',
    scriptTitle: 'Ube Matcha',
    tagline: 'Vibrant Layered Goodness',
    description: 'A harmonious collision of rich Filipino purple ube halaya and premium Japanese green tea matcha whisked to perfection over cold milk.',
    ingredients: ['Real Ube Halaya', 'Japanese Ceremonial Matcha', 'Cold Fresh Milk', 'Ice Cubes'],
    imagePath: IMAGES.ubeMatcha,
    topTexture: 'Purple Ube Texture',
    bottomTexture: 'Green Matcha Splash',
    bgColor: 'from-purple-900 to-emerald-900',
    accentColor: '#9333EA'
  },
  {
    id: 'sd-strawberry-cloud',
    name: 'Strawberry Cloud',
    scriptTitle: 'Strawberry Cloud',
    tagline: 'Light, Creamy & Sweet',
    description: 'Real strawberry reduction poured into cold milk, crowned with a thick, velvety whipped cream cloud top that melts in your mouth.',
    ingredients: ['Hand-crafted Strawberry Jam', 'Fresh Whole Milk', 'Signature Cream Cloud Foam'],
    imagePath: IMAGES.strawberryCloud,
    topTexture: 'Fresh Red Strawberries',
    bottomTexture: 'Swirling Cream Splash',
    bgColor: 'from-pink-800 to-rose-950',
    accentColor: '#EC4899'
  },
  {
    id: 'sd-golden-hour-oat',
    name: 'Golden Hour Oat',
    scriptTitle: 'Golden Hour Oat',
    tagline: 'Warm Honey & Roasted Oat',
    description: 'Rich espresso layered over creamy oat milk with a golden honey drizzle motif that captures the cozy Mandaluyong sunset vibe.',
    ingredients: ['Double Shot Espresso', 'Barista Oat Milk', 'Pure Natural Honey', 'Rolled Oats Accent'],
    imagePath: IMAGES.goldenHourOat,
    topTexture: 'Golden Honey Drizzle',
    bottomTexture: 'Roasted Espresso Beans',
    bgColor: 'from-amber-900 to-yellow-950',
    accentColor: '#F59E0B'
  },
  {
    id: 'sd-honey-lemon-espresso',
    name: 'Honey Lemon Espresso',
    scriptTitle: 'Honey Lemon Espresso',
    tagline: 'Bright, Zesty & Bold',
    description: 'An invigorating citrus espresso tonic with fresh lemon juice, sweet honey drizzle, and dark espresso over sparkling ice.',
    ingredients: ['Fresh Squeezed Lemon Juice', 'Wild Honey Drizzle', 'Dark Roast Espresso', 'Sparkling Tonic'],
    imagePath: IMAGES.lemonEspresso,
    topTexture: 'Golden Honey Stream',
    bottomTexture: 'Effervescent Bubbles',
    bgColor: 'from-amber-700 to-yellow-900',
    accentColor: '#EAB308'
  },
  {
    id: 'sd-sunny-nana',
    name: 'Sunny Nana',
    scriptTitle: 'Sunny Nana',
    tagline: 'Banana Cinnamon Craze',
    description: 'Creamy banana-infused milk layered with bold espresso and topped with soft whipped cream lightly dusted with aromatic cinnamon.',
    ingredients: ['Sweet Banana Milk', 'Bold Espresso Shot', 'Fluffy Whipped Cream', 'Ground Ceylon Cinnamon'],
    imagePath: IMAGES.sunnyNana,
    topTexture: 'Cinnamon Sticks Macro',
    bottomTexture: 'Sliced Fresh Bananas',
    bgColor: 'from-orange-900 to-amber-950',
    accentColor: '#F97316'
  }
];

export const MAC_AND_CHEESE_INFO = {
  title: "Heavy Hitter's Mac & Cheese",
  price: 250,
  priceText: "₱250",
  mainDescription: "The ultimate comfort bowl. Loaded with creamy mac & cheese, crispy chicken tenders, crinkle-cut fries, and extra cheese sauce.",
  imagePath: IMAGES.macAndCheese,
  variants: [
    {
      name: "Lite Weight",
      description: "Creamy macaroni smothered in signature cheese sauce. Simple, but rich, and satisfying.",
      badge: "Classic Bowl"
    },
    {
      name: "Loaded",
      description: "Signature mac & cheese topped with crispy golden chicken tenders for the perfect cheesy-crunchy combo.",
      badge: "Crowd Favorite"
    },
    {
      name: "Heavy Hitter's",
      description: "The ultimate comfort bowl. Loaded with creamy mac & cheese, crispy chicken tenders, crinkle-cut fries, and extra cheese sauce.",
      badge: "BEST VALUE · ₱250"
    }
  ]
};

export const PROMOS: PromoItem[] = [
  {
    id: 'p1',
    title: 'August Promo',
    tagline: 'Seasonal Callout',
    badge: 'SPECIAL',
    details: 'Exclusive seasonal drinks & bundle rewards available for a limited time at your neighborhood cafe.',
    finePrint: 'Valid for in-store purchases during August. Ask barista for current seasonal drink line-up.',
    bgGradient: 'bg-gradient-to-br from-[#FF5B00] to-[#E64A00]',
    accentColor: '#FF5B00'
  },
  {
    id: 'p2',
    title: 'BUY 2 GET 1',
    tagline: 'Share the Vibe',
    badge: 'MON - WED ONLY',
    schedule: 'Every Mon - Wed',
    details: 'Buy any 2 signature drinks or coffee favorites and get 1 drink free! Bring your friends, co-workers, or neighbors.',
    finePrint: 'Not valid with other promo or discount. Free item applies to equal or lesser value.',
    bgGradient: 'bg-gradient-to-br from-[#0F4C81] to-[#002F6C]',
    accentColor: '#0F4C81'
  },
  {
    id: 'p3',
    title: '5% DISCOUNT',
    tagline: 'Cashless Savings',
    badge: 'EVERYDAY',
    details: 'Enjoy 5% OFF your total bill when you pay using QR Payment (GCash / Maya) or Card Payment (Visa / Mastercard).',
    finePrint: 'Thank you for supporting your neighborhood cafe.',
    bgGradient: 'bg-gradient-to-br from-[#1E3A8A] to-[#0F4C81]',
    accentColor: '#1E3A8A'
  }
];

export const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: 'pkg-50',
    pax: 50,
    price: 4500,
    inclusions: [
      'Choose 5 coffee and 3 non-coffee drinks from our menu',
      'Maximum of 50 cups',
      '2 professional baristas',
      'Mobile cart setup',
      'Commercial espresso machine',
      'Coffee grinder',
      '4 hrs operation only'
    ]
  },
  {
    id: 'pkg-100',
    pax: 100,
    price: 8500,
    inclusions: [
      'Choose 5 coffee, 3 non-coffee, and flavored soda from our menu',
      'Maximum of 100 cups',
      '2 professional baristas',
      'Mobile cart setup',
      'Commercial espresso machine',
      'Coffee grinder',
      '4 hrs operation only'
    ]
  }
];

export const CATERING_TERMS = [
  'A 50% down payment is required to secure a slot, one week before the event.',
  'The transportation fee is not included; price may vary depending on the location.',
  'Customers will be billed upon exceeding the agreed number of cups.',
  'Clients must prepare to secure the power supply for the espresso machine and equipment.'
];
