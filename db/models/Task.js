const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    task: { type: DataTypes.STRING, allowNull: false },
    slug: { type: DataTypes.STRING, unique: true },
    done: { type: DataTypes.BOOLEAN },
    priority: { type: DataTypes.STRING },
  });

  SequelizeSlugify.slugifyModel(Task, {
    source: ["task"],
  });

  return Task;
};
