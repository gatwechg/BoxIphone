import { Product, InsertProduct, Order, InsertOrder } from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createOrder(order: InsertOrder): Promise<Order>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private orders: Map<number, Order>;
  private currentOrderId: number;

  constructor() {
    this.products = new Map();
    this.orders = new Map();
    this.currentOrderId = 1;
    this.initializeProducts();
  }

  private initializeProducts() {
    const products: Product[] = [
      {
        id: 1,
        name: "iPhone 15 Pro Max",
        description: "The ultimate iPhone with pro camera system",
        price: "1199.00",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        capacity: "256GB",
        color: "Natural Titanium",
        stock: 10
      },
      {
        id: 2,
        name: "iPhone 15 Pro",
        description: "Pro. Beyond.",
        price: "999.00",
        image: "https://images.unsplash.com/photo-1556228578-567ba127e37f",
        capacity: "128GB",
        color: "Blue Titanium",
        stock: 15
      },
      {
        id: 3,
        name: "iPhone 15",
        description: "New camera. New design. Newphoria.",
        price: "799.00",
        image: "https://images.unsplash.com/photo-1599202889720-cd3c0833efa1",
        capacity: "128GB",
        color: "Pink",
        stock: 20
      },
      {
        id: 4,
        name: "iPhone 15 Plus",
        description: "Big and beautiful.",
        price: "899.00",
        image: "https://images.unsplash.com/photo-1609921205586-7e8a57516512",
        capacity: "256GB",
        color: "Yellow",
        stock: 12
      }
    ];

    products.forEach(product => {
      this.products.set(product.id, product);
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createOrder(order: InsertOrder): Promise<Order> {
    const id = this.currentOrderId++;
    const newOrder = { ...order, id };
    this.orders.set(id, newOrder);
    return newOrder;
  }
}

export const storage = new MemStorage();
