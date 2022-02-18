=> Primeiro passo: é necessário fazer toda a configuração do express no index
  Chamar o express, configurar a leitura do corpo da req:
    const express = require('express')
    app.use(
      express.urlencoded({
      extended: true
     })
    )
    app.use(express.json())



=> Segundo passo: é necessario fazer as configurações da conexão do sequelize com o banco de dados e testar a conexão:
  const { Sequelize } = require('sequelize')
  const sequelize = new Sequelize(dbURL)

  try {
  sequelize.authenticate()
  console.log('Conectado no DB com sucesso!')

} catch(err) {
  console.log('Não foi possível conectar no banco', err)
}

  module.exports = sequelize


=> Terceiro passo: é necessário criar os models referente as tabelas no banco de dados:
  const { DataTypes } = require('sequelize')
  const db = require('../database/connection')

  const Model = db.define('Model', {estrutura da tabela})

  module.exports = Model


=> Quarto passo: é necessário importar os models no index e fazer a sincronização deles com o sequelize:
  const Model = require('./models/Model')

  connection
  .sync()
  .then(
    app.listen(3000, () => {
      console.log('Servidor rodando!')
    })
  )
  .catch(err => console.log(err))

=> Quinto passo: é necessário criar os Controllers, que será uma classe que contém as funções com a lógica de cada rota
Algumas só encaminharão as views, outras vão processar dados e passar para os Models
É necessário importar o Model que o controller utiliza, uma vez que ele usa os dados do Model.
Uma dica é criar métodos estáticos dentro da classe do model para não precisar estanciar a classe quando for utiliza-la

=> Sexto passo: 
Criar e organizar os rotas utilizando o router
Importar o express para utilizar o método router
Cada arquivo será responsável por um controller
Cada rota utiliza um dos métodos do Controller
Para isso é necessário importar o controller responsável pela lógica das rotas
O router precisa ser importado no index da aplicação

=================================================================================

=> Salvando os dados no banco:
É necessário criar uma rota POST para a criação do dado
É necessário criar um vínculo entre em controller e um model
Será criada um novo método para tratar os dados e assim serem enviados para o banco

=> Resgatando dados do banco:
É necessário criar uma rota GET para resgatar os dados do banco
Os dados serão resgatados através de um método do Model

=> Removendo dados do banco
É necessario criar uma rota POST para deletar um dado
É os dados será deletados através de um método do Model

=> Recuperando dados que serão atualizados
É necessário criar uma rota GET para recuperar os dados que serão atualizados
Criar a rota que corresponde a um id de uma Task
O formulário de edição será preenchido com os itens a serem editados

=>Enviando dados atualizados
É necessário criar uma rota POST para enviar os dados atualizados
Os dados será atualizados através de um método no Model

=> Marcando tarefa como completa
É necessário criar uma rota POST para atualizar o atributo 'done' das tarefas





