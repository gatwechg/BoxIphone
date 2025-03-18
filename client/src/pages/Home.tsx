import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@shared/schema";

export default function Home() {
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ['/api/products']
  });

  return (
    <div>
      <Hero />

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        {isLoading ? (
          <div className="text-center">Loading products...</div>
        ) : error ? (
          <div className="text-center text-red-500">
            Error loading products. Please try again later.
          </div>
        ) : products ? (
          <ProductGrid products={products} />
        ) : null}
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1695048663867-e41259c93b3b"
              alt="iPhone 15 Display"
              className="rounded-lg"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">Experience iPhone 15</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Visit our modern retail locations to experience the revolutionary
                iPhone 15 series in person. Our expert staff is ready to demonstrate
                the groundbreaking features and help you find the perfect iPhone for
                your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}