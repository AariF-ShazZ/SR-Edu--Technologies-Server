const express = require("express")
const { getData, postData, changeStatus } = require("../controllers/todo.controllers")
const taskRoute = express.Router()

taskRoute.get('/api/tasks',getData)
taskRoute.post('/api/tasks',postData)
taskRoute.put('/api/tasks/:id',changeStatus)

module.exports={taskRoute}