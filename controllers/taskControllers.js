const { Task } = require("../db/models");

exports.fetchTask = async (taskId, next) => {
  try {
    const foundTask = await Task.findByPk(taskId);
    return foundTask;
  } catch (error) {
    next(error);
  }
};

exports.taskCreate = async (req, res, next) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

exports.taskList = async (req, res, next) => {
  try {
    const _tasks = await Task.findAll();
    res.json(_tasks);
  } catch (error) {
    next(error);
  }
};

exports.taskDetail = async (req, res, next) => {
  res.json(req.task);
};

exports.taskDelete = async (req, res, next) => {
  try {
    await req.task.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.taskUpdate = async (req, res, next) => {
  try {
    await req.task.update(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
