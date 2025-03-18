import express from "express";
import { createServer } from "http";
import Stripe from 'stripe';
import { storage } from "./storage.js";
import { fromZodError } from "zod-validation-error";

// Initialize Stripe with test secret key
const stripe = new Stripe('sk_test_51OxIbhFXvQXyF8l5MhFvqHq9pBPYxRQHngvUKnhUflBpYgvNQLYkQmESMZfhS4FQYfZPJZvGgSxDLXpN7HQicJRw00UpVtkYF4');

export async function registerRoutes(app) {
  app.get("/api/products", async (_req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get("/api/products/:id", async (req, res) => {
    const product = await storage.getProduct(Number(req.params.id));
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  });

  // New Stripe payment intent endpoint
  app.post("/api/create-payment-intent", async (req, res) => {
    try {
      const { amount } = req.body;
      
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: 'usd',
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  });

  app.post("/api/orders", async (req, res) => {
    try {
      const order = await storage.createOrder(req.body);
      res.status(201).json(order);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: fromZodError(error).message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  return createServer(app);
}
