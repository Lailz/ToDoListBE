const express = require("express");
const db = require("./db/models");
const uselessRoutes = require("./routes/useless");
const taskRoutes = require("./routes/tasks");
const app = express();

app.use(async (req, res, next) => {
  console.log("I'm the first middleware");
  const error = {
    status: 500,
    message: "NOOOOO!!!!!",
  };
  next();
  //   const taskLength = await db.Task.count();
  //   if (taskLength > 3) res.json({ message: "you dont have access" });
  //   else next();
});

// Middleware
app.use(express.json());
app.use(uselessRoutes);
app.use("/tasks", taskRoutes);

// NOT FOUND MIDDLEWARE
app.use((req, res, next) => {
  next({
    status: 404,
    message: "Path Not Found",
  });
});

// ERROR HANDLING MIDDLEWARE: I SHOULD BE THE LAST ONE!!!!!!
app.use((err, req, res, next) => {
  res
    .status(err.status ?? 500)
    .json({ message: err.message ?? "Internal Server Error" });
});

db.sequelize.sync();
// db.sequelize.sync({ alter: true });
// db.sequelize.sync({ force: true });

app.listen(8000, () =>
  console.log("The application is running on localhost:8000")
);
