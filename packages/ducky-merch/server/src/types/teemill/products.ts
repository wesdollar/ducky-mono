export interface Product {
  id: string;
  ref: string;
  title: string;
  description: string;
  type: {
    id: string;
    name: string;
  };
  slug: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  images: {
    id: string;
    src: string;
    alt: string;
    sortOrder: number;
    createdAt: string;
    updatedAt: string;
    variantIds: string[];
  }[];
  variants: {
    id: string;
    ref: string;
    sku: null | string;
    sortOrder: number;
    attributes: {
      name: string;
      value: string;
    }[];
    retailPrice: {
      amount: number;
      currencyCode: string;
    };
    salePrice: {
      amount: number;
      currencyCode: string;
    };
    price: {
      amount: number;
      currencyCode: string;
    };
    stock: {
      level: number;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    images: {
      id: string;
      src: string;
      alt: string;
      sortOrder: number;
      createdAt: string;
      updatedAt: string;
      variantIds: string[];
    }[];
  }[];
}
