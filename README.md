# Desafio React com TypeScript e Styled Components usando Vite

## 📝 Descrição do Desafio

Neste desafio, foi criado um e-commerce funcional utilizando React com TypeScript e Styled Components. O objetivo foi estilizar uma tela principal e consumir uma API gratuita para listar os produtos.

### Funcionalidades criadas:

1. Listar produtos de uma API gratuita.
2. Exibir os detalhes básicos de cada produto (nome, preço, imagem, etc.).
3. Criar uma interface estilizada usando `styled-components`.
4. Criar um carrinho simples para adicionar ou remover produtos utilizando o local storage.

## 🛠 Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Styled Components
- Fetch (para consumo da API)
- Yarn (gerenciador de pacotes)

---

## 🚀 Passo a Passo

### 1️⃣ Pré-requisitos

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com/getting-started/install)

Para verificar se tudo está configurado corretamente:

```bash
node -v  # Versão do Node.js
yarn -v  # Versão do Yarn
```

---

### 2️⃣ Configuração Inicial

1. Clone este repositório:

   ```bash
   git clone https://github.com/LuccaTi/React-Challenge-Fake-Store.git
   cd React-Challenge-Fake-Store
   ```

2. Instale as dependências:

   ```bash
   yarn
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   yarn run dev
   ```

4. Acesse no navegador:
   ```
   http://localhost:5173
   ```

---

## 📜 Estrutura do Projeto

Organizamos o projeto da seguinte forma:

```
desafio-ecommerce/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── ProductCard.tsx
│   │   └── Cart.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── CartPage.tsx
│   ├── services/
│   │   └── api.ts
│   ├── styles/
│   │   └── globalStyles.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── Main.tsx
├── package.json
├── yarn.lock
├── README.md

## 🛠 Dependências Instaladas

As seguintes dependências já estão configuradas no arquivo `package.json`:

- React
- Vite
- TypeScript
- Styled Components
- Fetch

Rode `yarn` no terminal para instalar tudo!

---

## 📜 Notas

- Documentação do React: [https://react.dev/](https://react.dev/)
- Documentação do Styled Components: [https://styled-components.com/](https://styled-components.com/)
- Documentação da API: [https://fakestoreapi.com/](https://fakestoreapi.com/)

---
