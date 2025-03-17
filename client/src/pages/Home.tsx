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
              src="https://images.unsplash.com/photo-1493857671505-72967e2e2760"
              alt="Store Interior"
              className="rounded-lg"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">Visit Our Store</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Experience the latest iPhone models in person at our modern retail
                locations. Our expert staff is ready to help you find the perfect
                device for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}