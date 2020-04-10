# StackX

Fullstack template using modern technologies.

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Apollo Engine](https://www.apollographql.com/platform)

## Technologies

### Core

- Node.js
- Typescript
- GraphQL
- Eslint
- Jest
- Dotenv

### Server

- Express
- Apollo Server Express(with testing)
- GraphQL Depth Limit
- GraphQL Playground
- GraphQL Code Generator
- MongoDB
- JWT
- Nodemon

### Client

- React
- React Router
- Apollo Boost(with react-hooks)
- Formik
- Webpack

## Getting started

```bash
# Clone the repository
git clone --depth=1 https://github.com/radchukd/stackx <project_name>

# Install dependencies
cd <project_name> && npm install

# Configure .env
cp .env.example .env

# Build and run the project
npm run build && npm run start
```

## Project structure

```bash
├── client
│   ├── dist
│   ├── src
|   |   ├── components
|   |   ├── config
|   |   ├── graphql
|   |   ├── pages
|   |   ├── public
|   |   ├── index.tsx
|   |   └── router.tsx
|   ├── test
│   └── webpack.ts
├── node_modules
├── server
│   ├── dist
│   ├── src
|   |   ├── config
|   |   ├── graphql
|   |   ├── types
|   |   ├── util
|   |   └── index.ts
|   └── test
├── .dockerignore
├── .env
├── .env.example
├── .eslintrc
├── .gitignore
├── apollo.config.js
├── codegen.json
├── Dockerfile
├── jest.config.js
├── package-lock.json
├── package.json
├── readme.md
└── tsconfig.json
```

## Available scripts

- **build**        - compiles client and server files and lints them
- **debug**        - runs compiled app in debug mode
- **lint**         - lints .ts files
- **test**         - runst test for client and server
- **start**        - runs compiled app
- **client:build** - compiles client files
- **client:dev**   - runs client in development mode
- **client:lint**  - lints client files
- **client:test**  - runs test for client
- **server:build** - compiles server files
- **server:dev**   - runs server in development mode
- **server:lint**  - lints server files
- **server:test**  - runs test for server
