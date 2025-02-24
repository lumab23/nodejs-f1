# Fastify F1 Teams & Drivers API

Este projeto é uma API simples desenvolvida com [Fastify](https://www.fastify.io/), um framework web para Node.js focado em alta performance. A API fornece informações sobre equipes e pilotos de Fórmula 1.

Este projeto faz parte do curso [Formação Node.js](https://github.com/digitalinnovationone/formacao-nodejs) da Digital Innovation One (DIO).

## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)
- [Fastify](https://www.fastify.io/)
- [@fastify/cors](https://www.npmjs.com/package/@fastify/cors)

## Instalação e Execução

### Pré-requisitos
Antes de executar o projeto, certifique-se de ter o Node.js instalado em sua máquina.

### Passos para executar
1. Clone este repositório:
   ```bash
   git clone https://github.com/lumab23/nodejs-f1.git
   cd nodejs-f1
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```
   O servidor será iniciado na porta `3333`.

## Endpoints da API

### 1. Listar todas as equipes
- **Rota:** `GET /teams`
- **Resposta:**
  ```json
  {
    "teams": [
      { "id": 1, "name": "Ferrari", "base": "Maranello, Italy" },
      { "id": 2, "name": "Mercedes", "base": "Brackley, United Kingdom" },
      ...
    ]
  }
  ```

### 2. Listar todos os pilotos
- **Rota:** `GET /drivers`
- **Resposta:**
  ```json
  {
    "drivers": [
      { "id": 1, "name": "Charles Leclerc", "team": "Ferrari" },
      { "id": 2, "name": "Carlos Sainz", "team": "Ferrari" },
      ...
    ]
  }
  ```

### 3. Buscar piloto por ID
- **Rota:** `GET /drivers/:id`
- **Exemplo:** `GET /drivers/1`
- **Resposta (Sucesso):**
  ```json
  {
    "driver": { "id": 1, "name": "Charles Leclerc", "team": "Ferrari" }
  }
  ```
- **Resposta (Erro - Piloto não encontrado):**
  ```json
  {
    "message": "Driver not found."
  }
  ```

## Configuração de CORS
Este projeto utiliza `@fastify/cors` para permitir requisições de qualquer origem (`origin: "*"`).

## Log de Requisições
O Fastify está configurado com `logger: true`, permitindo visualizar logs detalhados no console.

## Autor
Este projeto foi desenvolvido como parte do curso [Formação Node.js](https://github.com/digitalinnovationone/formacao-nodejs) da Digital Innovation One (DIO). O código segue a implementação apresentada no curso.


