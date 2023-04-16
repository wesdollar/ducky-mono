import express from "express";
import cors from "cors";
import * as dotenv from "dotenv-flow";
import bodyParser from "body-parser";
import axios from "axios";
import { syncProduct } from "./data-transformer/products/sync-product/sync-product";
import { PrintfulProductResponse } from "./types/printful/products";
import { descriptions } from "./constants/products/descriptions";

dotenv.config({
  path: process.cwd(),
});

const port = process.env.PORT || 5001;

const app = express();

app.use(cors());
app.use(bodyParser.json());

const token = process.env.PRINTFUL_TOKEN;
const printfulApiUrl = `https://api.printful.com`;

const printfulHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
  "X-PF-Store-Id": "10482303",
};

app.get("/", (req, res) => {
  res.json({
    message:
      "Hi! I'm Ducky, and this is my bot. This section of the pond is only for my flock. Thanks for dropping by, though!",
    hangout: "Join us twitch.tv/dollardojo if you want to take a dip with us!",
  });
});

app.get("/api/printful/products", async (req, res) => {
  try {
    const printfulProductResponse = await axios.get(
      `${printfulApiUrl}/store/products`,
      {
        headers: printfulHeaders,
      }
    );

    const products = printfulProductResponse.data.result;

    const modifiedProducts = [];

    for (const product of products) {
      const description = descriptions[product.id];

      const newObject = {
        ...product,
        description,
      };

      modifiedProducts.push(newObject);
    }

    const responseObject: PrintfulProductResponse = {
      code: printfulProductResponse.data.code,
      result: {
        sync_product: [...modifiedProducts],
        sync_variants: printfulProductResponse.data.result.sync_variants,
      },
      extra: printfulProductResponse.data.extra,
    };

    return res.json(responseObject);
  } catch (error) {
    return res.status(500).json({ error: "you broke it" });
  }
});

app.get("/api/printful/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { data } = await axios.get(`${printfulApiUrl}/store/products/${id}`, {
      headers: printfulHeaders,
    });

    const response = syncProduct(data);

    return res.json(response);
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error: "you broke it" });
  }
});

app.get("/api/printful/products/variants/:variantId", async (req, res) => {
  const { variantId } = req.params;

  try {
    const variants = await axios.get(
      `${printfulApiUrl}/store/variants/${variantId}`,
      {
        headers: printfulHeaders,
      }
    );

    return res.json(variants.data);
  } catch (error) {
    return res.status(500).json({ error: "you broke it" });
  }
});

app.get("/health-check", (req, res) => {
  return res.json({ healthy: true });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
