const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTaskForm)
router.post('/add', TaskController.createTask)
router.post('/remove', TaskController.deleteTask)
router.get('/edit/:id', TaskController.updateTaskForm)
router.post('/edit', TaskController.updateTask)
router.post('/updatestatus', TaskController.toggleTaskStatus)
router.get('/:id', TaskController.showTask)
router.get('/', TaskController.showTasks)

module.exports = router