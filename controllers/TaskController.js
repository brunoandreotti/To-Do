const Task = require('../models/taskModel')

module.exports = class TaskController {
  static async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true, order: [['id', 'ASC']] })

    res.render('tasks/allTasks', { tasks })
  }

  static async showTask(req, res) {
    const id = req.params.id

    const task = await Task.findOne({ where: { id }, raw: true })

    res.render('tasks/task', { task })
  }

  static createTaskForm(req, res) {
    res.render('tasks/createTask')
  }

  static async createTask(req, res) {
    const title = req.body.title
    const description = req.body.description

    const task = {
      title: title,
      description: description,
      done: false
    }

    //Validações
    //Processamento de dados

    //Espera o objeto ser criado no banco
    await Task.create(task)

    res.redirect('/tasks')
  }

  static async updateTaskForm(req, res) {
    const id = req.params.id

    const task = await Task.findOne({ where: { id }, raw: true })

    res.render('tasks/editTask', { task })
  }

  static async updateTask(req, res) {
    const id = req.body.id

    const title = req.body.title
    const description = req.body.description

    const task = {
      title: title,
      description: description,
      done: false
    }

    await Task.update(task, { where: { id } })

    res.redirect('/tasks')
  }

  static async toggleTaskStatus(req, res) {
    const id = req.body.id

    const taskDone = {
      done: req.body.done === 'false' ? true : false
    }

    await Task.update(taskDone, { where: { id } })

    res.redirect('/tasks')
  }

  static async deleteTask(req, res) {
    const id = req.body.id

    await Task.destroy({ where: { id } })

    res.redirect('/tasks')
  }
}
