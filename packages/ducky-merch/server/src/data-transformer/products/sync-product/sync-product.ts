import { descriptions } from "../../../constants/products/descriptions";
import {
  PrintfulSyncProduct,
  SyncVariants,
  ProductVariants,
} from "../../../types/printful/products";
import { getProductColor } from "./helpers/get-product-color";
import { getProductSize } from "./helpers/get-product-size";

export const syncProduct = (data: unknown) => {
  // @ts-ignore COME BACK
  const product = data.result.sync_product as PrintfulSyncProduct;

  // @ts-ignore COME BACK
  const variants = data.result.sync_variants as SyncVariants;

  const description =
    product.id in descriptions ? descriptions[product.id.toString()] : "";
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

    variantObj.size = getProductSize(variantObj.sku);
    variantObj.color = getProductColor(variantObj.sku);

    for (const file of variant.files) {
      // eslint-disable-next-line max-depth
      if (file.type === "preview") {
        variantObj.previewImage = file.preview_url;
      }
    }

    variantsArray.push(variantObj);
  }

  const responseObject = {
    data,
    variants: variantsArray,
    description,
  };

  console.log(JSON.stringify(responseObject, null, 2));

  return responseObject;
};
