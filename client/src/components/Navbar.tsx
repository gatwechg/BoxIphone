import { Link } from "wouter";
import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";

export default function Navbar() {
  const { itemCount } = useCart();

  const NavLinks = () => (
    <>
      <Link href="/">
        <a className="text-lg font-semibold hover:text-primary">Home</a>
      </Link>
      <Link href="/products">
        <a className="text-lg hover:text-primary">Products</a>
      </Link>
      <Link href="/about">
        <a className="text-lg hover:text-primary">About</a>
      </Link>
      <Link href="/contact">
        <a className="text-lg hover:text-primary">Contact</a>
      </Link>
    </>
  );

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold">BoxiPhone</a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLinks />
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/cart">
            <a className="relative">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </a>
          </Link>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
