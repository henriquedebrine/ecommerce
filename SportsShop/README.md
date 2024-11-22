Aqui está o **README** atualizado, ajustado para o projeto **SportsShop**:

---

# Plataforma de E-commerce (SportsShop)

Este repositório contém o código para uma plataforma de e-commerce completa, desenvolvida com **React.js** para o frontend e **Node.js** com **Express** para o backend. A aplicação simula uma loja virtual real, focada em produtos esportivos, com funcionalidades de cadastro e autenticação de usuários, exibição de produtos, gerenciamento de carrinho, checkout e um painel de administração para gerenciamento de pedidos e estoque.

---

### **Índice**

- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
  - [Para o Usuário](#para-o-usuário)
  - [Para o Administrador](#para-o-administrador)
- [Requisitos Técnicos](#requisitos-técnicos)
- [Instalação e Configuração](#instalação-e-configuração)
- [Execução Local](#execução-local)
- [Tecnologias Usadas](#tecnologias-usadas)
- [Licença](#licença)
- [Contribuindo](#contribuindo)

---

### **Descrição do Projeto**

O **SportsShop** é uma plataforma de e-commerce que permite a compra de produtos esportivos de forma intuitiva e segura. O projeto é dividido em frontend e backend, com um painel de administração para controle de estoque e pedidos.

---

### **Funcionalidades**

#### **Para o Usuário:**
- **Cadastro e Login:** Usuários podem se cadastrar, fazer login e realizar logout.
- **Catálogo de Produtos:** Visualização de produtos esportivos, com filtros por categoria e status.
- **Carrinho de Compras:** Adicionar e remover itens do carrinho.
- **Checkout:** Revisar os itens do carrinho, calcular o valor total e finalizar a compra.
- **Histórico de Pedidos:** Visualização dos pedidos realizados e acompanhamento de status.

#### **Para o Administrador:**
- **Dashboard:** Visualização e gerenciamento de pedidos.
- **Gerenciamento de Produtos:** Adicionar, editar e remover produtos esportivos.
- **Gerenciamento de Pedidos:** Alterar o status dos pedidos (ex: "Aguardando Pagamento", "Enviado" ou "Entregue").

---

### **Requisitos Técnicos**

#### **Frontend:**
- **React.js:** Framework para criação de interfaces dinâmicas e responsivas.
- **Vite:** Ferramenta para otimizar o tempo de desenvolvimento e build.
- **React Router:** Navegação entre as páginas.
- **Material UI / TailwindCSS:** Bibliotecas de componentes para uma interface atraente.

#### **Backend:**
- **Node.js:** Ambiente de execução JavaScript no servidor.
- **Express:** Framework para construção da API RESTful.
- **JWT (JSON Web Token):** Autenticação e controle de sessões.
- **bcrypt:** Criptografia de senhas.
- **SQLite:** Banco de dados relacional.
- **Sequelize:** ORM (Object-Relational Mapping) para manipulação de dados.

#### **Segurança:**
- **CORS:** Protege a API contra acessos não autorizados.
- **dotenv:** Gerenciamento seguro de variáveis de ambiente.

---

### **Instalação e Configuração**

#### **1. Clonar o Repositório:**
```bash
git clone https://github.com/seu-usuario/SportsShop.git
cd SportsShop
```

#### **2. Instalar as Dependências:**

##### **Frontend:**
```bash
cd frontend
npm install
```

##### **Backend:**
```bash
cd backend
npm install
```

#### **3. Configurar Variáveis de Ambiente:**
Crie um arquivo `.env` na raiz do projeto e configure as variáveis necessárias:

```plaintext
JWT_SECRET=sua-chave-secreta
DB_URL=./db/database.sqlite
```

#### **4. Inicializar o Banco de Dados:**
```bash
cd backend
npx sequelize-cli db:migrate
```

---

### **Execução Local**

#### **1. Rodar o Backend:**
```bash
cd backend
npm run dev
```
- O servidor backend será iniciado na porta **5000** (por padrão).

#### **2. Rodar o Frontend:**
```bash
cd frontend
npm run dev
```
- O servidor frontend será iniciado na porta **3000** (por padrão).

---

### **Tecnologias Usadas**
- **Frontend:** React.js, Vite, React Router, Material UI / TailwindCSS
- **Backend:** Node.js, Express, JWT, bcrypt
- **Banco de Dados:** SQLite, Sequelize
- **Segurança:** CORS, dotenv

---

### **Licença**
Este projeto está licenciado sob a **MIT License**. Você pode utilizá-lo e adaptá-lo para seus próprios projetos, desde que respeite os termos da licença.

---


