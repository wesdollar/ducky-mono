import {
  Box,
  Button,
  Column,
  Grid,
  Heading,
  Paragraph,
  Text,
} from "@twilio-paste/core";
import { Spacer } from "../../../components/utilities/spacer/spacer";
import { PageWrapper } from "../../../components/utilities/page-wrapper/page-wrapper";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import axios from "axios";
import {
  PrintfulProductResponse,
  PrintfulSyncProduct,
} from "../../../types/printful/products";
import { descriptions } from "../../../constants/products/descriptions";

interface ProductVariants {
  variantId: number;
  retailPrice: string;
  sku: string;
  previewImage: string;
  size: string;
  color: string;
}

interface SyncProductObject {
  data: PrintfulProductResponse;
  variantsArray: ProductVariants;
  description: string;
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
  const response = useLoaderData() as SyncProductObject;

  const product: PrintfulSyncProduct = response.data.result.sync_product;
  // @ts-ignore complaining about descriptions
  const description = descriptions[product.id];

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
                <Paragraph>{description}</Paragraph>
                <Spacer height={["10px", "10px", "10px"]} />
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
