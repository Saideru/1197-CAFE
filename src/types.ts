export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'non-coffee' | 'flavored-soda';
  tempOptions?: ('Iced' | 'Hot')[];
  description?: string;
  isPopular?: boolean;
}

export interface SignatureDrink {
  id: string;
  name: string;
  scriptTitle: string;
  tagline: string;
  description: string;
  ingredients: string[];
  imagePath: string;
  topTexture: string;
  bottomTexture: string;
  bgColor: string;
  accentColor: string;
}

export interface CateringPackage {
  id: string;
  pax: number;
  price: number;
  inclusions: string[];
}

export interface PromoItem {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  schedule?: string;
  details: string;
  finePrint: string;
  bgGradient: string;
  accentColor: string;
  imagePath?: string;
}

export interface CateringFormData {
  name: string;
  email: string;
  phone: string;
  packageType: '50pax' | '100pax' | 'custom';
  customPax: number;
  eventDate: string;
  eventLocation: string;
  selectedCoffee: string[];
  selectedNonCoffee: string[];
  selectedSoda: string[];
  notes: string;
}
