<br />
<p align="center">
    <img src="./readme/images.png" alt="Logo" width="200">

  <h3 align="center">To-Do List com NodeJS, Sequelize e PostgreSQL</h3>
 <br />
  <p align="center">
     To-do List
      <p align="center">
  <a href="#sobre"> Sobre </a> |
  <a href="#conhecimentos-praticados"> Conhecimentos praticados </a> |
  <a href="#rotas-da-aplicação"> Rotas da aplicação </a> |
  <a href="#tecnologias-utilizadas"> Tecnologias utilizadas </a>      
       <br />
    <br />
    <h1 align="center">
    <img src="./readme/cadastro.gif" alt="gif-readme">
 </h1>
  </p>
</p>


# Sobre
O objetivo do projeto foi criar uma To-Do List, com a finalidade de colocar em prática os meus conhecimentos no padrão MVC e aprender melhor sobre a responsabilidade das camadas Model, View e Controller.

Na aplicação é possível cadastrar tarefas com nome e descrição, marcar as tarefas como concluídas, atualizar as tarefas (nome e descrição) e deletar tarefas.

# Conhecimentos Praticados
✔ NodeJs <br>
✔ Express <br>
✔ Sequelize <br>
✔ CRUD com Sequelize <br>
✔ Padrão MVC

# Rotas da aplicação:
<b>[GET] </b> /tasks/ : A rota deve retornar todas as tarefas cadastradas.<br><br>

<b> [GET] </b> /tasks/:id : A rota deve retornar todas as informações da tarefa referente ao ID recebido como parâmetro na URL.<br><br>

<b>[GET] </b> /tasks/add : A rota deve exibir a formulário de cadastro de tarefas.<br><br>

<b>[POST] </b> /tasks/add : A rota deve salvar as informaçaões da tarefa no banco de dados com os dados recebidos no corpo da requisição.<br><br>

<b>[GET] </b> /tasks/edit/:id : A rota deve exibir o formulário de edição com as informações da tarefa que será editada referente ao ID recebido como parâmetro na URL.<br><br>

<b>[POST] </b> /tasks/edit : A rota deve salvar as informações atualizadas da tarefa no banco de dados.<br><br>

<b>[POST] </b> /tasks/updatestatus: A rota deve atualizar o status da tarefa.<br><br>

<b>[POST] </b> /tasks/remove : A rota deve deletar uma tarefa do banco de dados baseado no ID.<br><br>


# Tecnologias utilizadas: 
<p align="center">
<a href="https://nodejs.org/en/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="40" /></a> <a href="https://expressjs.com/pt-br/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height="40" width="40" /></a> <a href="https://insomnia.rest/download"><img src="https://raw.githubusercontent.com/brunoandreotti/biblioteca-backend/79c23c6a4bdd0bc6cb95463ee47741f2226cb0b1/readme/insomnia.svg" height="40" width="40" /></a> <a href="https://sequelize.org"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" width="40" /></a>
</p>



---
**Desenvolvido  por [Bruno Andreotti](www.linkedin.com/in/bruno-andreotti/).** 