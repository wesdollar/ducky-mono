import {
  Box,
  Button,
  Column,
  Grid,
  Heading,
  Label,
  Option,
  Paragraph,
  Select,
  Text,
} from "@twilio-paste/core";
import { Spacer } from "../../../components/utilities/spacer/spacer";
import { PageWrapper } from "../../../components/utilities/page-wrapper/page-wrapper";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import axios from "axios";
import { PrintfulSyncProduct } from "../../../types/printful/products";
import { uniqueId } from "lodash";

export interface PrintfulProductResponse {
  data: Data;
  variants: Variant[];
  description: string;
}

export interface Data {
  code: number;
  result: Result;
  extra: any[];
}

export interface Result {
  sync_product: SyncProduct;
  sync_variants: SyncVariant[];
}

export interface SyncProduct {
  id: number;
  external_id: string;
  name: string;
  variants: number;
  synced: number;
  thumbnail_url: string;
  is_ignored: boolean;
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
  product: Product;
  files: File[];
  options: any[];
  is_ignored: boolean;
}

export interface File {
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
}

export interface Product {
  variant_id: number;
  product_id: number;
  image: string;
  name: string;
}

export interface Variant {
  variantId: number;
  retailPrice: string;
  sku: string;
  previewImage: string;
  size: string;
  color: string;
}

const getProductById = async (id: string) => {
  try {
    const products = await axios.get(
      `http://localhost:5001/api/printful/products/${id}`
    );

    return products.data;
  } catch (error) {
    console.log(error);

    return { errorStatus: true, error };
  }
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.id) {
    return undefined;
  }

  const products = await getProductById(params.id);

  return products;
};

export const ProductView = () => {
  const response = useLoaderData() as PrintfulProductResponse;
  const burnedColors = [] as string[];
  const burnedSizes = [] as string[];
  const product: PrintfulSyncProduct = response.data.result.sync_product;

  return (
    <PageWrapper>
      <Spacer height={["40px", "40px", "40px"]} />
      <Box>
        {product ? (
          <Grid gutter={"space60"}>
            <Column span={4}>
              <Box>
                <img
                  src={`${product.thumbnail_url}`}
                  alt={product.name}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Column>
            <Column span={6}>
              <Box>
                <Heading as={"h2"} variant={"heading20"}>
                  {product.name}
                  <Spacer width={["16px", "16px", "16px"]} />
                  <Text
                    as="span"
                    color={[
                      "colorTextIconNew",
                      "colorTextIconNew",
                      "colorTextIconNew",
                    ]}
                  >
                    $12.99
                  </Text>
                </Heading>
                <Paragraph>{response.description}</Paragraph>
                <Spacer height={["10px", "10px", "10px"]} />

                {response.variants.length &&
                  response.variants[0].size &&
                  response.variants[0].color && (
                    <>
                      <Label htmlFor="color_selector">Size</Label>
                      <Select id="color_selector">
                        {response.variants.map((variant) => {
                          if (burnedSizes.includes(variant.size)) {
                            return null;
                          }

                          burnedSizes.push(variant.size);

                          return (
                            <Option value={variant.size} key={uniqueId()}>
                              {variant.size}
                            </Option>
                          );
                        })}
                      </Select>
                    </>
                  )}
                <Spacer height={["30px", "30px", "30px"]} />
                {response.variants.length &&
                  response.variants[0].size &&
                  response.variants[0].color && (
                    <>
                      <Label htmlFor="color_selector">Color</Label>
                      <Select id="color_selector">
                        {response.variants.map((variant) => {
                          if (burnedColors.includes(variant.color)) {
                            return null;
                          }

                          burnedColors.push(variant.color);

                          return (
                            <Option value={variant.color} key={uniqueId()}>
                              {variant.color}
                            </Option>
                          );
                        })}
                      </Select>
                    </>
                  )}
                <Spacer height={["30px", "30px", "30px"]} />
                <Button variant={"primary"}>Add to Cart</Button>
              </Box>
            </Column>
          </Grid>
        ) : (
          <p>No product data loaded. Standby.</p>
        )}
      </Box>
    </PageWrapper>
  );
};
