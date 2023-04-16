type ProductSize = string;

export const getProductSize = (sku: string): ProductSize => {
  const sizeRegex = /(XS|S|M|L|XL|2XL|3XL|4XL)$/;
  const sizeMatch = sku.match(sizeRegex);

  return sizeMatch ? sizeMatch[1] : "";
};
