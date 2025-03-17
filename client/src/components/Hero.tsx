import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Experience the Latest{" "}
              <span className="text-primary">iPhone 15</span> Collection
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Discover the perfect iPhone for you. With powerful features and
              stunning design, there's never been a better time to upgrade.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/products">
                <Button size="lg">Shop Now</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1616410011236-7a42121dd981"
              alt="iPhone 15"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
