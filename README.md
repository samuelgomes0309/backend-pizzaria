backend-pizzaria ⚙️ Visão Geral do Projeto

O backend-pizzaria é a API RESTful que serve como o coração do sistema da pizzaria, gerenciando a lógica de negócios, autenticação de usuários, e persistência de dados. Desenvolvido em Node.js com TypeScript e utilizando o framework Express, ele oferece uma solução robusta e tipada para as operações de frontend (web e mobile). A persistência de dados é gerenciada pelo Prisma ORM com um banco de dados PostgreSQL.

✨ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

 | Categoria | Tecnologia | Descrição |
| --- | --- | --- |
| **Linguagem** | TypeScript | Superset do JavaScript que adiciona tipagem estática, melhorando a manutenibilidade e a qualidade do código. |
| **Runtime** | Node.js | Ambiente de execução JavaScript assíncrono e orientado a eventos. |
| **Framework** | Express | Framework web minimalista e flexível para Node.js, utilizado para construir a API. |
| **ORM** | Prisma | Moderno ORM (Object-Relational Mapper) para acesso e manipulação do banco de dados PostgreSQL. |
| **Banco de Dados** | PostgreSQL | Sistema de gerenciamento de banco de dados relacional de código aberto. |
| **Autenticação** | JWT & bcryptjs | JSON Web Tokens para autenticação e `bcryptjs` para criptografia de senhas. |
| **Configuração** | Dotenv | Módulo essencial para carregar variáveis de ambiente a partir do arquivo `.env`. |




⚙️ Funcionalidades Principais

O sistema oferece as seguintes funcionalidades através de sua API:

•
Autenticação e Autorização: Rotas de login e registro, com proteção de rotas via JWT.

•
Gestão de Usuários: Criação e recuperação de informações de usuários.

•
Gestão de Produtos: CRUD (Criação, Leitura, Atualização e Exclusão) de categorias e produtos.

•
Gestão de Pedidos: Criação, listagem e gerenciamento do ciclo de vida dos pedidos.

🛠️ Instalação e Configuração

Para rodar o projeto localmente, siga os passos abaixo:

Pré-requisitos

Certifique-se de ter o Node.js (versão 18+) e o yarn (ou npm/pnpm) instalados em sua máquina. Além disso, é obrigatório ter uma instância do PostgreSQL rodando e acessível.

1. Clonar o Repositório

Bash


git clone https://github.com/samuelgomes0309/backend-pizzaria.git
cd backend-pizzaria


2. Instalar Dependências

Utilize o gerenciador de pacotes de sua preferência:

Bash


# Usando yarn (recomendado pelo lock file )
yarn install

# Ou usando npm
npm install

# Ou usando pnpm
pnpm install


3. Configuração de Variáveis de Ambiente

O projeto utiliza o pacote dotenv para carregar as variáveis de ambiente necessárias para a conexão com o banco de dados e a segurança da aplicação.

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

Plain Text


# Configuração do Banco de Dados PostgreSQL (Prisma)
# O Prisma usa esta variável para se conectar ao banco.
DATABASE_URL="postgresql://USUARIO:SENHA@HOST:PORTA/NOME_DO_BANCO?schema=public"

# Chave Secreta para Geração e Validação de Tokens JWT
# Essencial para a segurança da autenticação.
JWT_SECRET="SUA_CHAVE_SECRETA_MUITO_FORTE_AQUI"


4. Migrações do Banco de Dados

Com o .env configurado, execute as migrações do Prisma para criar o esquema do banco de dados:

Bash


npx prisma migrate dev --name init


5. Rodar a Aplicação

Inicie o servidor de desenvolvimento (com hot-reload):

Bash


yarn dev

# ou npm run dev


Para rodar em ambiente de produção (após o build):

Bash


yarn start

# ou npm start


O servidor estará acessível em http://localhost:3333 (ou a porta configurada no server.ts ).

