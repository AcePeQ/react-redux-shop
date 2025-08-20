import fs from "node:fs/promises";

import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/meals", async (_, res) => {
  const meals = await fs.readFile("./data/menu.json", "utf8");

  if (!meals) {
    res.status(404).json({ message: "Menu not found!" });
  }

  res.status(200).json(JSON.parse(meals));
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
