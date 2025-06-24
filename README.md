# Cadastro-de-usuario

Este projeto é uma aplicação fullstack desenvolvida com foco em autenticação de usuários utilizando JSON Web Token (JWT). O sistema é composto por um back-end construído com Node.js, Express e Prisma ORM, que se conecta a um banco de dados MongoDB, e por um front-end desenvolvido em React com Bootstrap, garantindo uma interface moderna, responsiva e funcional.

Entre as principais funcionalidades estão o cadastro de novos usuários, login seguro com geração de token JWT, listagem de usuários autenticados e a exclusão de contas. O token é armazenado no `localStorage` do navegador, permitindo o controle de sessões e o acesso protegido às rotas da aplicação. As rotas protegidas do back-end exigem autenticação válida, garantindo segurança nos dados.

O front-end se comunica com a API via Axios e utiliza React Router para navegação entre as páginas. O projeto é organizado em duas pastas principais: `backend`, onde está a API com todas as rotas e regras de negócio, e `frontJWT`, onde está o código do front-end com os formulários e interfaces para interação do usuário.

Essa aplicação serve como base para projetos que necessitam de autenticação segura, controle de usuários e integração entre front-end e back-end. É ideal para aprendizado, prática de integração com APIs protegidas e como ponto de partida para aplicações maiores que exigem segurança e controle de acesso.

