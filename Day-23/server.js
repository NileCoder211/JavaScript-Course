const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const pizzas = [
  { id: 1, shopId: 101, name: "Margherita", type: "Vegetarian" },
  { id: 2, shopId: 102, name: "Pepperoni", type: "Non-Vegetarian" },
  { id: 3, shopId: 103, name: "Veggie Delight", type: "Vegetarian" },
];

const beverages = [
  { id: 1, pizzaId: 1, name: "Coke" },
  { id: 2, pizzaId: 2, name: "Pepsi" },
  { id: 3, pizzaId: 3, name: "Sprite" },
];

app.get("/api/pizzahub", (req, res) => {
  const shopIds = [...new Set(pizzas.map((p) => p.shopId))];
  res.json(shopIds);
});

// GET all pizzas
app.get("/api/pizzahub/pizzas", (req, res) => {
  res.json(pizzas); // return the full array
});

app.get("/api/pizzahub/pizzas/:shopId", (req, res) => {
  const shopId = Number(req.params.shopId);
  res.json(pizzas.filter((p) => p.shopId === shopId));
});

app.get("/api/pizzahub/beverages/:pizzaId", (req, res) => {
  const pizzaId = Number(req.params.pizzaId);
  res.json(beverages.filter((b) => b.pizzaId === pizzaId));
});

app.post("/api/order", (req, res) => {
  const order = {
    pizzaId: req.body.pizzaId,
    beverageId: req.body.beverageId,
    createdAt: Date.now(),
  };
  res.json(order);
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});
