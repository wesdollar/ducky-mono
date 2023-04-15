import { PrintfulProductResponse } from "../../../../../client/src/types/printful/products";
import { syncProduct } from "./sync-product";

const mockData: PrintfulProductResponse = {
  code: 200,
  result: {
    sync_product: {
      id: 305605548,
      external_id: "6439ecc8dc2512",
      name: "Ducky Hoodie",
      variants: 18,
      synced: 18,
      thumbnail_url:
        "https://files.cdn.printful.com/files/322/322fd4a35f2e16acb9e1dceb8c4809f8_preview.png",
      is_ignored: false,
    },
    sync_variants: [
      {
        id: 3849399559,
        external_id: "6439ecc8dc25e8",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Charcoal Heather / S",
        synced: true,
        variant_id: 11481,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "26.00",
        sku: "6439ECC8DB8D1_Charcoal-Heather-S",
        currency: "USD",
        product: {
          variant_id: 11481,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/11481_1642689794.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie  (Charcoal Heather / S)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030645,
            type: "preview",
            hash: "322fd4a35f2e16acb9e1dceb8c4809f8",
            url: null,
            filename:
              "unisex-premium-hoodie-charcoal-heather-front-6439ecc15fe52.jpg",
            mime_type: "image/jpeg",
            size: 84056,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/322/322fd4a35f2e16acb9e1dceb8c4809f8_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/322/322fd4a35f2e16acb9e1dceb8c4809f8_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
      {
        id: 3849399560,
        external_id: "6439ecc8dc2627",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Charcoal Heather / M",
        synced: true,
        variant_id: 11482,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "26.00",
        sku: "6439ECC8DB8D1_Charcoal-Heather-M",
        currency: "USD",
        product: {
          variant_id: 11482,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/11482_1642689792.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie  (Charcoal Heather / M)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030645,
            type: "preview",
            hash: "322fd4a35f2e16acb9e1dceb8c4809f8",
            url: null,
            filename:
              "unisex-premium-hoodie-charcoal-heather-front-6439ecc15fe52.jpg",
            mime_type: "image/jpeg",
            size: 84056,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/322/322fd4a35f2e16acb9e1dceb8c4809f8_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/322/322fd4a35f2e16acb9e1dceb8c4809f8_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
      {
        id: 3849399561,
        external_id: "6439ecc8dc2652",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Charcoal Heather / L",
        synced: true,
        variant_id: 11483,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "26.00",
        sku: "6439ECC8DB8D1_Charcoal-Heather-L",
        currency: "USD",
        product: {
          variant_id: 11483,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/11483_1642689780.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie  (Charcoal Heather / L)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030645,
            type: "preview",
            hash: "322fd4a35f2e16acb9e1dceb8c4809f8",
            url: null,
            filename:
              "unisex-premium-hoodie-charcoal-heather-front-6439ecc15fe52.jpg",
            mime_type: "image/jpeg",
            size: 84056,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/322/322fd4a35f2e16acb9e1dceb8c4809f8_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/322/322fd4a35f2e16acb9e1dceb8c4809f8_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
      {
        id: 3849399562,
        external_id: "6439ecc8dc2681",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Charcoal Heather / XL",
        synced: true,
        variant_id: 11484,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "26.00",
        sku: "6439ECC8DB8D1_Charcoal-Heather-XL",
        currency: "USD",
        product: {
          variant_id: 11484,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/11484_1642689801.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie  (Charcoal Heather / XL)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030645,
            type: "preview",
            hash: "322fd4a35f2e16acb9e1dceb8c4809f8",
            url: null,
            filename:
              "unisex-premium-hoodie-charcoal-heather-front-6439ecc15fe52.jpg",
            mime_type: "image/jpeg",
            size: 84056,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/322/322fd4a35f2e16acb9e1dceb8c4809f8_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/322/322fd4a35f2e16acb9e1dceb8c4809f8_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
      {
        id: 3849399563,
        external_id: "6439ecc8dc26a9",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Charcoal Heather / 2XL",
        synced: true,
        variant_id: 11485,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "28.00",
        sku: "6439ECC8DB8D1_Charcoal-Heather-2XL",
        currency: "USD",
        product: {
          variant_id: 11485,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/11485_1642689780.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie  (Charcoal Heather / 2XL)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030645,
            type: "preview",
            hash: "322fd4a35f2e16acb9e1dceb8c4809f8",
            url: null,
            filename:
              "unisex-premium-hoodie-charcoal-heather-front-6439ecc15fe52.jpg",
            mime_type: "image/jpeg",
            size: 84056,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/322/322fd4a35f2e16acb9e1dceb8c4809f8_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/322/322fd4a35f2e16acb9e1dceb8c4809f8_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
      {
        id: 3849399564,
        external_id: "6439ecc8dc26d3",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Charcoal Heather / 3XL",
        synced: true,
        variant_id: 13419,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "30.00",
        sku: "6439ECC8DB8D1_Charcoal-Heather-3XL",
        currency: "USD",
        product: {
          variant_id: 13419,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/13419_1642689942.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie (Charcoal Heather / 3XL)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030645,
            type: "preview",
            hash: "322fd4a35f2e16acb9e1dceb8c4809f8",
            url: null,
            filename:
              "unisex-premium-hoodie-charcoal-heather-front-6439ecc15fe52.jpg",
            mime_type: "image/jpeg",
            size: 84056,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/322/322fd4a35f2e16acb9e1dceb8c4809f8_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/322/322fd4a35f2e16acb9e1dceb8c4809f8_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
      {
        id: 3849399565,
        external_id: "6439ecc8dc26f4",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Team Royal / S",
        synced: true,
        variant_id: 13905,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "26.00",
        sku: "6439ECC8DB8D1_Team-Royal-S",
        currency: "USD",
        product: {
          variant_id: 13905,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/13905_1643027673.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie (Team Royal / S)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030646,
            type: "preview",
            hash: "072a6b7922dd8c3d652620cdebea632d",
            url: null,
            filename:
              "unisex-premium-hoodie-team-royal-front-6439ecc16306f.jpg",
            mime_type: "image/jpeg",
            size: 82380,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/072/072a6b7922dd8c3d652620cdebea632d_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/072/072a6b7922dd8c3d652620cdebea632d_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
      {
        id: 3849399566,
        external_id: "6439ecc8dc2725",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Team Royal / M",
        synced: true,
        variant_id: 13906,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "26.00",
        sku: "6439ECC8DB8D1_Team-Royal-M",
        currency: "USD",
        product: {
          variant_id: 13906,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/13906_1643027673.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie (Team Royal / M)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030646,
            type: "preview",
            hash: "072a6b7922dd8c3d652620cdebea632d",
            url: null,
            filename:
              "unisex-premium-hoodie-team-royal-front-6439ecc16306f.jpg",
            mime_type: "image/jpeg",
            size: 82380,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/072/072a6b7922dd8c3d652620cdebea632d_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/072/072a6b7922dd8c3d652620cdebea632d_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
      {
        id: 3849399567,
        external_id: "6439ecc8dc2741",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Team Royal / L",
        synced: true,
        variant_id: 13907,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "26.00",
        sku: "6439ECC8DB8D1_Team-Royal-L",
        currency: "USD",
        product: {
          variant_id: 13907,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/13907_1643027663.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie (Team Royal / L)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030646,
            type: "preview",
            hash: "072a6b7922dd8c3d652620cdebea632d",
            url: null,
            filename:
              "unisex-premium-hoodie-team-royal-front-6439ecc16306f.jpg",
            mime_type: "image/jpeg",
            size: 82380,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/072/072a6b7922dd8c3d652620cdebea632d_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/072/072a6b7922dd8c3d652620cdebea632d_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
      {
        id: 3849399568,
        external_id: "6439ecc8dc2775",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Team Royal / XL",
        synced: true,
        variant_id: 13908,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "26.00",
        sku: "6439ECC8DB8D1_Team-Royal-XL",
        currency: "USD",
        product: {
          variant_id: 13908,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/13908_1643027675.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie (Team Royal / XL)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030646,
            type: "preview",
            hash: "072a6b7922dd8c3d652620cdebea632d",
            url: null,
            filename:
              "unisex-premium-hoodie-team-royal-front-6439ecc16306f.jpg",
            mime_type: "image/jpeg",
            size: 82380,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/072/072a6b7922dd8c3d652620cdebea632d_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/072/072a6b7922dd8c3d652620cdebea632d_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
      {
        id: 3849399569,
        external_id: "6439ecc8dc27a1",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Team Royal / 2XL",
        synced: true,
        variant_id: 13909,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "28.00",
        sku: "6439ECC8DB8D1_Team-Royal-2XL",
        currency: "USD",
        product: {
          variant_id: 13909,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/13909_1643027663.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie (Team Royal / 2XL)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030646,
            type: "preview",
            hash: "072a6b7922dd8c3d652620cdebea632d",
            url: null,
            filename:
              "unisex-premium-hoodie-team-royal-front-6439ecc16306f.jpg",
            mime_type: "image/jpeg",
            size: 82380,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/072/072a6b7922dd8c3d652620cdebea632d_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/072/072a6b7922dd8c3d652620cdebea632d_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
      {
        id: 3849399570,
        external_id: "6439ecc8dc27c9",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Team Royal / 3XL",
        synced: true,
        variant_id: 13910,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "30.00",
        sku: "6439ECC8DB8D1_Team-Royal-3XL",
        currency: "USD",
        product: {
          variant_id: 13910,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/13910_1643027663.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie (Team Royal / 3XL)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030646,
            type: "preview",
            hash: "072a6b7922dd8c3d652620cdebea632d",
            url: null,
            filename:
              "unisex-premium-hoodie-team-royal-front-6439ecc16306f.jpg",
            mime_type: "image/jpeg",
            size: 82380,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/072/072a6b7922dd8c3d652620cdebea632d_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/072/072a6b7922dd8c3d652620cdebea632d_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
      {
        id: 3849399571,
        external_id: "6439ecc8dc27e9",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Purple / S",
        synced: true,
        variant_id: 13911,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "26.00",
        sku: "6439ECC8DB8D1_Purple-S",
        currency: "USD",
        product: {
          variant_id: 13911,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/13911_1643027632.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie (Purple / S)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030647,
            type: "preview",
            hash: "1b13856d236885528bef6c3242f851bd",
            url: null,
            filename: "unisex-premium-hoodie-purple-front-6439ecc16358e.jpg",
            mime_type: "image/jpeg",
            size: 81607,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/1b1/1b13856d236885528bef6c3242f851bd_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/1b1/1b13856d236885528bef6c3242f851bd_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
      {
        id: 3849399572,
        external_id: "6439ecc8dc2812",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Purple / M",
        synced: true,
        variant_id: 13912,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "26.00",
        sku: "6439ECC8DB8D1_Purple-M",
        currency: "USD",
        product: {
          variant_id: 13912,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/13912_1643027623.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie (Purple / M)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030647,
            type: "preview",
            hash: "1b13856d236885528bef6c3242f851bd",
            url: null,
            filename: "unisex-premium-hoodie-purple-front-6439ecc16358e.jpg",
            mime_type: "image/jpeg",
            size: 81607,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/1b1/1b13856d236885528bef6c3242f851bd_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/1b1/1b13856d236885528bef6c3242f851bd_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
      {
        id: 3849399574,
        external_id: "6439ecc8dc2845",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Purple / L",
        synced: true,
        variant_id: 13913,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "26.00",
        sku: "6439ECC8DB8D1_Purple-L",
        currency: "USD",
        product: {
          variant_id: 13913,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/13913_1643027623.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie (Purple / L)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030647,
            type: "preview",
            hash: "1b13856d236885528bef6c3242f851bd",
            url: null,
            filename: "unisex-premium-hoodie-purple-front-6439ecc16358e.jpg",
            mime_type: "image/jpeg",
            size: 81607,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/1b1/1b13856d236885528bef6c3242f851bd_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/1b1/1b13856d236885528bef6c3242f851bd_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
      {
        id: 3849399575,
        external_id: "6439ecc8dc2884",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Purple / XL",
        synced: true,
        variant_id: 13914,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "26.00",
        sku: "6439ECC8DB8D1_Purple-XL",
        currency: "USD",
        product: {
          variant_id: 13914,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/13914_1643027632.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie (Purple / XL)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030647,
            type: "preview",
            hash: "1b13856d236885528bef6c3242f851bd",
            url: null,
            filename: "unisex-premium-hoodie-purple-front-6439ecc16358e.jpg",
            mime_type: "image/jpeg",
            size: 81607,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/1b1/1b13856d236885528bef6c3242f851bd_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/1b1/1b13856d236885528bef6c3242f851bd_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
      {
        id: 3849399576,
        external_id: "6439ecc8dc28b2",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Purple / 2XL",
        synced: true,
        variant_id: 13915,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "28.00",
        sku: "6439ECC8DB8D1_Purple-2XL",
        currency: "USD",
        product: {
          variant_id: 13915,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/13915_1643027622.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie (Purple / 2XL)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030647,
            type: "preview",
            hash: "1b13856d236885528bef6c3242f851bd",
            url: null,
            filename: "unisex-premium-hoodie-purple-front-6439ecc16358e.jpg",
            mime_type: "image/jpeg",
            size: 81607,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/1b1/1b13856d236885528bef6c3242f851bd_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/1b1/1b13856d236885528bef6c3242f851bd_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
      {
        id: 3849399577,
        external_id: "6439ecc8dc28f4",
        sync_product_id: 305605548,
        name: "Ducky Hoodie - Purple / 3XL",
        synced: true,
        variant_id: 13916,
        main_category_id: 28,
        warehouse_product_variant_id: null,
        retail_price: "30.00",
        sku: "6439ECC8DB8D1_Purple-3XL",
        currency: "USD",
        product: {
          variant_id: 13916,
          product_id: 380,
          image:
            "https://files.cdn.printful.com/products/380/13916_1643027622.jpg",
          name: "Cotton Heritage M2580 Premium Unisex Hoodie (Purple / 3XL)",
        },
        files: [
          {
            id: 549698014,
            type: "default",
            hash: "fcdf1a15a35586baaaf35c587165e981",
            url: null,
            filename: "duck-emblem-01.png",
            mime_type: "image/png",
            size: 622384,
            width: 4167,
            height: 4167,
            dpi: 300,
            status: "ok",
            created: 1681440136,
            thumbnail_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/fcd/fcdf1a15a35586baaaf35c587165e981_preview.png",
            visible: true,
            is_temporary: false,
          },
          {
            id: 550030647,
            type: "preview",
            hash: "1b13856d236885528bef6c3242f851bd",
            url: null,
            filename: "unisex-premium-hoodie-purple-front-6439ecc16358e.jpg",
            mime_type: "image/jpeg",
            size: 81607,
            width: 1000,
            height: 1000,
            dpi: null,
            status: "ok",
            created: 1681517768,
            thumbnail_url:
              "https://files.cdn.printful.com/files/1b1/1b13856d236885528bef6c3242f851bd_thumb.png",
            preview_url:
              "https://files.cdn.printful.com/files/1b1/1b13856d236885528bef6c3242f851bd_preview.png",
            visible: false,
            is_temporary: false,
          },
        ],
        options: [
          {
            id: "embroidery_type",
            value: "flat",
          },
          {
            id: "thread_colors",
            value: [],
          },
          {
            id: "text_thread_colors",
            value: [],
          },
          {
            id: "thread_colors_3d",
            value: [],
          },
          {
            id: "thread_colors_chest_left",
            value: [],
          },
          {
            id: "text_thread_colors_chest_left",
            value: [],
          },
          {
            id: "thread_colors_chest_center",
            value: [],
          },
          {
            id: "text_thread_colors_chest_center",
            value: [],
          },
          {
            id: "thread_colors_large_center",
            value: [],
          },
          {
            id: "text_thread_colors_large_center",
            value: [],
          },
          {
            id: "thread_colors_wrist_left",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_left",
            value: [],
          },
          {
            id: "thread_colors_wrist_right",
            value: [],
          },
          {
            id: "text_thread_colors_wrist_right",
            value: [],
          },
          {
            id: "lifelike",
            value: false,
          },
        ],
        is_ignored: false,
      },
    ],
  },
  extra: [],
};

describe("sync products response from printful", () => {
  it("compile the data correctly ", () => {
    const result = syncProduct(mockData);

    expect(result).toEqual({
      description:
        "Keep warm and cozy while representing your favorite community with our Ducky Hoodie. It features our Ducky on the front and a drawstring hood for added warmth. Whether you're running errands or snuggling up on the couch, this hoodie is a must-have.",
      color: "Team-Royal",
      previewImage:
        "https://files.cdn.printful.com/files/322/322fd4a35f2e16acb9e1dceb8c4809f8_preview.png",
      retailPrice: "26.00",
      size: "S",
      sku: "6439ECC8DB8D1_Charcoal-Heather-S",
      variantId: 3849399559,
    });
  });
});
