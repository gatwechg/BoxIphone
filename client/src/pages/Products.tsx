import { useQuery } from "@tanstack/react-query";
import ProductGrid from "@/components/ProductGrid";
import { Product } from "@shared/schema";

export default function Products() {
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ['/api/products']
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>

      {isLoading ? (
        <div className="text-center py-8">Loading products...</div>
      ) : error ? (
        <div className="text-center py-8 text-red-500">
          Error loading products. Please try again later.
        </div>
      ) : products ? (
        <ProductGrid products={products} />
      ) : null}
    </div>
  );
}