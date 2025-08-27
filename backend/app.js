import fs from "node:fs/promises";

import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/meals", async (_, res) => {
  const meals = await fs.readFile("./data/menu.json", "utf8");

  if (!meals) {
    res.status(404).json({ message: "Menu not found!" });
  }

  res.status(200).json(JSON.parse(meals));
});

app.post("/order", async (req, res) => {
  const orderData = req.body.order;
  const shipmentData = req.body.shipment;

  if (!orderData || !shipmentData) {
    return res.status(400).json({ message: "Missing data." });
  }

  const newOrder = {
    id: (Math.random() * 1000).toString(),
    orderData,
    shipmentData,
  };

  const orders = await fs.readFile("./data/orders.json", "utf8");
  const allOrders = JSON.parse(orders);
  allOrders.push(newOrder);

  await fs.writeFile("./data/orders.json", JSON.stringify(allOrders));

  res.status(201).json({ message: "Order created!" });
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
