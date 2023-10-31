const mongoose = require("mongoose")
const taskSchema = mongoose.Schema({
    text:String,
    completed: Boolean
})
const TaskModel = mongoose.model("Todo",taskSchema)
module.exports = {TaskModel}