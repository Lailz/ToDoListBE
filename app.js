const express = require("express");
const tasks = require("./data");

const app = express();

// app.METHOD("/PATH", () => {
//     // CODE
// })

app.get("/home", (request, response) => {
  console.log("HOOOMMMMEEEEEEE");
  response.json({ message: "HELLO" });
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.get("/tasks/:taskId", (req, res) => {
  console.log("🚀 ~ file: app.js ~ line 47 ~ app.get ~ req", req.params);
  const foundTask = tasks.find((task) => task.id === +req.params.taskId);
  if (foundTask) {
    res.json(foundTask);
  } else {
    res.status(404);
    res.json({ message: "Task Not Found" });
  }
});

app.listen(8001, () =>
  console.log("The application is running on localhost:8001")
);
