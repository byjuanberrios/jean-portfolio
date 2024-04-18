/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

export interface Block {
  _key: string;
  _type: string;
  children: {
    _key: string;
    _type: string;
    marks: string[];
    text: string;
  }[];
  markDefs: any[]; // Depending on your schema, this could be more specific
  style: string;
}

export interface ImageAsset {
  _ref: string;
  _type: string;
}

export interface Image {
  _key: string;
  _type: string;
  asset: ImageAsset;
}

export interface CoverImage {
  _type: string;
  asset: ImageAsset;
}

export interface Description {
  _key: string;
  _type: string;
  children: {
    _key: string;
    _type: string;
    marks: string[];
    text: string;
  }[];
  markDefs: any[]; // Depending on your schema, this could be more specific
  style: string;
}

export interface Slug {
  _type: string;
  current: string;
}

export interface Work {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  client: string;
  coverImage: CoverImage;
  description: Description[];
  images: Image[];
  name: string;
  services: string[];
  slug: Slug;
  year: number;
}
