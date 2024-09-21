// getUniqueCategoryProducts.js
interface Product {
  category: string;
  name: string;
  price: number;
}
export const getUniqueCategoryProducts = (products: Product[]): Product[] => {
  const uniqueCategoryProducts = Array.from(
    products.reduce((acc, product) => {
      // If the category is not in the map yet, add the product
      if (!acc.has(product.category)) {
        acc.set(product.category, product);
      }
      return acc;
    }, new Map())
  ).map(([_, product]) => product);

  return uniqueCategoryProducts;
};
