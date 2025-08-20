import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
