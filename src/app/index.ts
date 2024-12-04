import express from "express";
import { generateHTML } from "./page";
import { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.static("dist"));

app.get("/", (req: Request, res: Response) => {
  res.send(generateHTML());
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
