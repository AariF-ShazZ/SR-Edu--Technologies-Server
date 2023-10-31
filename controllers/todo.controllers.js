const { TaskModel } = require("../models/todo.model");

const getData = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.status(200).json({ success: true, data: tasks });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

const postData = async (req, res) => {
  try {
    const { text } = req.body;
    const task = new TaskModel({ text, completed: false });
    await task.save();
    res.status(201).json({ success: true, data: task });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

const changeStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findById(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    task.completed = !task.completed; 
    await task.save(); 
    res.status(201).json({ success: true, data: task });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = { getData, postData,changeStatus }