import express from "express";
import { json } from "body-parser";
const port: number = 3000;

const app = express();
app.use(json());

app.listen(port, () => {
  console.log(`Server on port ${port}!`);
});
