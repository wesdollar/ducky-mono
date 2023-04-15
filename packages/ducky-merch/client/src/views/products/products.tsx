import {
  Box,
  Button,
  Card,
  Column,
  Grid,
  Heading,
  Paragraph,
  Stack,
} from "@twilio-paste/core";
import { uniqueId } from "lodash";
import { Spacer } from "../../components/utilities/spacer/spacer";
import { Header } from "../../components/header/header";
import axios from "axios";
import { PrintfulResponse } from "../../types/printful/products";
import { ProductSkeleton } from "../../components/products/product-skeleton/product-skeleton";
import { useLoaderData, useNavigate } from "react-router-dom";
import { descriptions } from "../../constants/products/descriptions";

const getProducts = async () => {
  try {
    const products = await axios.get(
      `http://localhost:5001/api/printful/products`
    );

    return products.data;
  } catch (error) {
    console.log(error);

    return { errorStatus: true, error };
  }
};

export const loader = async () => {
  const products = await getProducts();

  return products;
};

export const Products = () => {
  const navigate = useNavigate();
  const handleOnClick = (id: number) => navigate(`/products/${id}`);

  // @ts-ignore go away
  const data: PrintfulResponse = useLoaderData();

  const { result: products } = data;

  console.log(products);

  return (
    <Box margin={"space100"}>
      <Header />
      {!products ? (
        <Grid key={uniqueId()} gutter={"space60"}>
          <Column span={4}>
            <ProductSkeleton />
          </Column>
          <Column span={4}>
            <ProductSkeleton />
          </Column>
          <Column span={4}>
            <ProductSkeleton />
          </Column>
        </Grid>
      ) : (
        <Grid key={uniqueId()} gutter={"space60"}>
          {products.map((product) => {
            // @ts-ignore TODO: come back
            const productDescription = descriptions[product.id];

            return (
              <Column span={4} key={uniqueId()}>
                <Stack orientation={"vertical"} spacing={"space60"}>
                  <Card
                    onClick={() => handleOnClick(product.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <Box marginBottom={"space80"}>
                      <Heading as={"h3"} variant={"heading30"}>
                        {product.name}
                      </Heading>
                    </Box>
                    <Box marginBottom={"space80"}>
                      <img
                        src={product.thumbnail_url}
                        alt={product.name}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Box>
                    <Box marginBottom={"space80"}>
                      <Paragraph>{productDescription}</Paragraph>
                    </Box>
                    <Spacer height={["30px", "30px", "30px"]} />
                    <Box marginBottom={"space80"}>
                      <Button
                        as="a"
                        href={`/products/${product.id}`}
                        variant={"primary"}
                      >
                        View Cart
                      </Button>
                    </Box>
                  </Card>
                </Stack>
                <Spacer height={["40px", "40px", "40px"]} />
              </Column>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};
