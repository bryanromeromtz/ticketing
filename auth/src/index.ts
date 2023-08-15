import express from "express";
import { json } from "body-parser";
const port: number = 3000;

const app = express();
app.use(json());

app.get("/api/users/currentuser", (req, res) => {
  res.sendStatus(200).json({ ok: "Esta bien" });
});

app.listen(port, () => {
  console.log(`Server on port ${port}!!!!`);
});
