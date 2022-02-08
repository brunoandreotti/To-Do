const { Sequelize } = require('sequelize')

const dbURL = 'DIALECT://USER:PASSWORD4@HOST/DBMANE'

const sequelize = new Sequelize(dbURL)


//Testando a conexão
try {
  sequelize.authenticate()
  console.log('Conectado no DB com sucesso!')

} catch(err) {
  console.log('Não foi possível conectar no banco', err)
}

module.exports = sequelize