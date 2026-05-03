import express from "express";
import fs from "fs";

const app = express();

app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("Cloud Native Node.js API is running 🚀");
});

// Save task (simple demo API)
app.post("/task", (req, res) => {
  const task = JSON.stringify(req.body);

  // Store locally inside container (NOT /data)
  fs.appendFileSync("./tasks.txt", task + "\n");

  res.send("Task saved successfully");
});

// IMPORTANT: GKE expects 8080
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
