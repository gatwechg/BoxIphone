import { useEffect } from 'react';
import { useLocation } from "wouter";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import StripeCheckout from "@/components/StripeCheckout";

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (items.length === 0) {
      setLocation("/cart");
    }
  }, [items.length, setLocation]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
            <StripeCheckout total={total} />
          </div>
        </div>

        <div>
          <div className="rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="font-medium">{item.product.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Quantity: {item.quantity}
                    </div>
                    <div className="text-sm font-medium">
                      ${(Number(item.product.price) * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
