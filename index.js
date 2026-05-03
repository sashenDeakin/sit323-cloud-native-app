import express from "express";
import fs from "fs";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Cloud Native API is running 🚀");
});

app.post("/task", (req, res) => {
  const task = JSON.stringify(req.body);
  fs.appendFileSync("/data/tasks.txt", task + "\n");
  res.send("Task saved");
});

app.listen(3000, () => console.log("Server running"));
