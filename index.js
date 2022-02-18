const express = require('express')
const exphbs = require('express-handlebars')
const connection = require('./database/connection')

//Models
const Task = require('./models/taskModel')

//Routers

const tasksRoutes = require('./routes/taskRoutes')

const app = express()

//Define a engine da view
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Configuração de leitura do corpo da req
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

//Define a posta de arquivos estáticos
app.use(express.static('public'))

//Rotas
app.use('/tasks', tasksRoutes)

app.use('/users')






//Sincroniza as tabelas
connection
  .sync()
  .then(
    app.listen(3000, () => {
      console.log('Servidor rodando!')
    })
  )
  .catch(err => console.log(err))
