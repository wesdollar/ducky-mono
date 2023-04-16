export interface PrintfulResponse {
  code: number;
  result: PrintfulProduct[];
  extra: any[];
  paging: {
    total: number;
    offset: number;
    limit: number;
  };
}

export interface PrintfulProduct {
  id: number;
  external_id: string;
  name: string;
  variants: number;
  synced: number;
  thumbnail_url: string;
  is_ignored: boolean;
}

export interface PrintfulSyncProduct {
  id: number;
  external_id: string;
  name: string;
  variants: number;
  synced: number;
  thumbnail_url: string;
  is_ignored: boolean;
  description?: string;
}

export interface PrintfulProductResponse {
  code: number;
  result: {
    sync_product: PrintfulSyncProduct[];
    sync_variants: {
      id: number;
      external_id: string;
      sync_product_id: number;
      name: string;
      synced: boolean;
      variant_id: number;
      main_category_id: number;
      warehouse_product_variant_id: null;
      retail_price: string;
      sku: string;
      currency: string;
      product: {
        variant_id: number;
        product_id: number;
        image: string;
        name: string;
      };
      files: {
        id: number;
        type: string;
        hash: string;
        url: null;
        filename: string;
        mime_type: string;
        size: number;
        width: number;
        height: number;
        dpi: number | null;
        status: string;
        created: number;
        thumbnail_url: string;
        preview_url: string;
        visible: boolean;
        is_temporary: boolean;
      }[];
      options: {
        id: string;
        value: any;
      }[];
      is_ignored: boolean;
    }[];
  };
  extra: any[];
}

export interface SyncVariant {
  id: number;
  external_id: string;
  sync_product_id: number;
  name: string;
  synced: boolean;
  variant_id: number;
  main_category_id: number;
  warehouse_product_variant_id: null;
  retail_price: string;
  sku: string;
  currency: string;
  product: {
    variant_id: number;
    product_id: number;
    image: string;
    name: string;
  };
  files: {
    id: number;
    type: string;
    hash: string;
    url: string | null;
    filename: string;
    mime_type: string;
    size: number;
    width: number;
    height: number;
    dpi: number | null;
    status: string;
    created: number;
    thumbnail_url: string;
    preview_url: string;
    visible: boolean;
    is_temporary: boolean;
  }[];
  options: {
    id: string;
    value: string[] | number[] | string | number | null;
  }[];
  is_ignored: boolean;
}

export type SyncVariants = SyncVariant[];

export interface ProductVariants {
  variantId: number;
  retailPrice: string;
  sku: string;
  previewImage: string;
  size: string;
  color: string;
}
