const express = require("express");
let tasks = require("./data");

const app = express();

// app.METHOD("/PATH", () => {
//     // CODE
// })

// HOME: IM USELESS
app.get("/home", (request, response) => {
  console.log("HOOOMMMMEEEEEEE");
  response.json({ message: "HELLO" });
});

// PRODUCTS LIST ROUTE
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// PRODUCT DETAIL ROUTE
app.get("/tasks/:taskId", (req, res) => {
  console.log("🚀 ~ file: app.js ~ line 47 ~ app.get ~ req", req.params);
  const foundTask = tasks.find((task) => task.id === +req.params.taskId);
  if (foundTask) {
    res.json(foundTask);
  } else {
    res.status(404).json({ message: "Task Not Found" });
  }
});

// PRODUCT DELETE ROUTE
app.delete("/tasks/:taskId", (req, res) => {
  tasks = tasks.filter((task) => task.id !== +req.params.taskId);
  res.status(204).end();
});

app.listen(8001, () =>
  console.log("The application is running on localhost:8001")
);
