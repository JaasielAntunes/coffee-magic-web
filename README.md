<h1 align="center">
  Projeto Front-end desenvolvida durante a Trilha React disponível na plataforma da <a href="https://app.rocketseat.com.br/home">Rocketseat</a>.
</h1>

<p align="center">
  <a href="LICENSE"><img  src="https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge" alt="License"></a>
</p>

---

## 📁 Sobre o projeto

O Coffee Magic é uma aplicação Web que consiste em um sistema para controle interno de um estabelecimento fictício, no qual é apresentado um dashboard com informações importantes como receita total, pedidos por mês,
pedidos por dia, cancelamentos, entre outros. A aplicação também possuí a área de cadastrar um estabelecimento, fazer Login e além disso, é possível trocar o tema para Light, Dark ou System. Para o funcionamento correto, a aplicação depende de uma API que é responsável pelo
tratamento, validação e armazenamento dos dados.

---

## Requisitos

- Node.js versão 20 ou superior

---

## 💻 Tecnologias

- React e React-DOM
- React Hook Form
- Date-fns
- Tailwind CSS
- JavaScript
- TypeScript
- Vite
- Radix UI
- Lucide React
- Axios
- Match Sorter
- Sonner
- Recharts
- Localforage
- Sort By
- Zod

---

## 💡 Utilização
1. Clone o projeto Web e a API:

```
$ git clone https://github.com/JaasielAntunes/coffee-magic-web.git
$ git clone https://github.com/rocketseat-education/pizzashop-api.git
```

2. Acesse a pasta do projeto Web:

```
$ cd coffee-magic-web
```

3. Acesse a pasta da API:

```
$ cd pizzashop-api
```

4. Configurando e executando a API:
Obs: A API depende do Docker para configurar o banco de dados. Com o Docker instalado, clone o projeto, instale as dependências, configure os contêineres do Docker e execute o aplicativo.
É necessário ter instalado o framework Bun disponível em https://bun.sh/docs/installation#macos-and-linux.

```
$ bun i
$ docker compose up -d
$ bun migrate
$ bun seed
$ bun dev
```

5. Localize o arquivo seed.ts na pasta db e na parte de criar um administrador utilize um email de sua preferência para acesso ao painel.

6. Instale as dependências do projeto Web:

```
$ npm i
```

7. Inicie a aplicação:

```
$ npm run dev
```

---

<h4 align="center">
  Feito com ❤️ por Jaasiel Antunes - <a href="mailto:contato.jaasiel@gmail.com.com">Entre em contato</a>
</h4>

<p align="center">
  <a href="https://www.linkedin.com/in/jaasiel-antunes-1517b41bb">
    <img alt="Jaasiel Antunes" src="https://img.shields.io/badge/LinkedIn-Jaasiel-0e76a8?style=flat&logoColor=white&logo=linkedin">
  </a>
</p>
