export type Measurements = {
  waist: number;
  height: number;
  hips: number;
  bust: number;
};

export type ListingContact = {
  phone: string;
  whatsapp: string;
  telegram: string;
};

export type Listing = {
  id: string;
  name: string;
  age: number;
  price: number;
  image: string;
  images: string[];
  videos?: string[];
  description: string;
  locations: string[];
  measurements: Measurements;
  contact: ListingContact;
  createdAt?: any;

  // counters opcionales
  likesCount?: number;
  commentsCount?: number;
  views?: number;

  // computed (cliente)
  liked?: boolean;
};

export type MarketplaceItem =
  | { kind: "listing"; listing: Listing }
  | { kind: "ad"; id: string };

export type CommentDoc = {
  id: string;
  uid: string;
  username: string;
  text: string;
  parentId: string | null;
  createdAt: any;
};
