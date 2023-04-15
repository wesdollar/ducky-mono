import { descriptions } from "../../../constants/products/descriptions";
import {
  PrintfulSyncProduct,
  SyncVariants,
} from "../../../types/printful/products";

interface ProductVariants {
  variantId: number;
  retailPrice: string;
  sku: string;
  previewImage: string;
  size: string;
  color: string;
}

export const syncProduct = (data: unknown) => {
  // @ts-ignore COME BACK
  const product = data.result.sync_product as PrintfulSyncProduct;

  // @ts-ignore COME BACK
  const variants = data.result.sync_variants as SyncVariants;

  // @ts-ignore TODO: fix me
  const description = descriptions[product.id];
  const variantsArray: ProductVariants[] = [];

  for (const variant of variants) {
    const variantObj: ProductVariants = {
      variantId: variant.id,
      retailPrice: variant.retail_price,
      sku: variant.sku,
      previewImage: "",
      size: "",
      color: "",
    };

    for (const file of variant.files) {
      // eslint-disable-next-line max-depth
      if (file.type === "preview") {
        variantObj.previewImage = file.preview_url;
      }

      const sizeRegex = /(XS|S|M|L|XL|2XL|3XL|4XL)$/;

      const sizeMatch = variantObj.sku.match(sizeRegex);

      // eslint-disable-next-line max-depth
      if (sizeMatch) {
        // eslint-disable-next-line prefer-destructuring
        variantObj.size = sizeMatch[1];
      }

      const sku = "6439ECC8DB8D1_Team-Royal-S";
      const colorRegex = /_(.*)-/;
      const colorMatch = sku.match(colorRegex);
      let color = "";

      if (colorMatch) {
        [, color] = colorMatch;
        variantObj.color = color;
      }
    }

    variantsArray.push(variantObj);

    return {
      data,
      variantsArray,
      description,
    };
  }
};
