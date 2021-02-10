const express = require("express");
const {
  taskCreate,
  taskList,
  taskDetail,
  taskDelete,
  taskUpdate,
  fetchTask,
} = require("../controllers/taskControllers");
const router = express.Router();

router.param("taskId", async (req, res, next, taskId) => {
  const foundTask = await fetchTask(taskId, next);
  if (foundTask) {
    req.task = foundTask;
    next();
  } else {
    next({
      status: 404,
      message: "Task Not Found",
    });
  }
});

router.post("/", taskCreate);

router.get("/", taskList);

router.get("/:taskId", taskDetail);

router.put("/:taskId", taskUpdate);

router.delete("/:taskId", taskDelete);

module.exports = router;
