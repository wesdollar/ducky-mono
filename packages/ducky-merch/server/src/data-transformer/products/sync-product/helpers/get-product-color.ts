type ProductColor = string;

export const getProductColor = (sku: string): ProductColor => {
  const colorRegex = /_(.*)-/;
  const colorMatch = sku.match(colorRegex);

  return colorMatch ? colorMatch[1] : "";
};
