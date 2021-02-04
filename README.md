<h1 align="center" >
  <img src="https://ik.imagekit.io/ik54mxkwpj/logo-creditcard_xpkQuTJlq.png" />
</h1>

## 📋 Sobre

O projeto **CreditCard** é uma aplicação que foi feita como base para **estudo** que simula um carrinho de compra de produtos, além de possuir toda etapa de compra até chegar ao Checkout final para finalizar a compra. O sistema também tem a parte de autentiação e criação de contas, podendo diferenciar de contas de administradores para usuários normais, como por exemplo, o Dashboard que habilita funções exclusivas ao usuário administrador, sendo uma delas a de adicionar produtos.

[**Link para o Frontend:**](https://github.com/CarlosAug-tech/creditcard-example-web)

---

## 💡 Tecnologias Utilizadas

O backend do projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Node.JS](https://nodejs.org/en/)
- [Sucrase](https://github.com/alangpierce/sucrase)
- [Nodemon](https://nodemon.io/)
- [Pagarme](https://docs.pagar.me/)

### 🗃 **Database**:

- [Docker](https://www.docker.com/)
- [Sequelize](https://sequelize.org/)
- [Postgres](https://www.postgresql.org/)

---

## ⚙ Como configurar a Database

```bash
  $ docker run --name [nomedocontainer] -e POSTGRES_PASSWORD=[senha] -p 5432:[5432 ou porta livre] -d postgres

  $ docker run --name [nomedocontainer] -p 27017:[27017 ou porta livre] -d -t mongo

  $ docker run --name [nomedocontainer] -p 6379:[6379 ou porta livre] -d -t redis:alpine

```

### Inicializando os containers do Docker:

```bash
  $ docker start [nomedocontainer]
```

---

## 📦 Como baixar o projeto

```bash

  # Clonar o repositório
  $ git clone https://github.com/CarlosAug-tech/creditcard-example-server.git

  # Entrar no diretório
  $ cd creditcard-example-server

  # Instalar as dependências
  $ yarn install

  # Iniciar o backend
  $ yarn dev

```

---

Desenvolvido 😎 por Carlos Augusto Silva Santos
