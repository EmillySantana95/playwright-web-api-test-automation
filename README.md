# Playwright Web & API Test Automation

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/) 
[![Playwright](https://img.shields.io/badge/Playwright-1.57-blue)](https://playwright.dev/) 
[![Status](https://img.shields.io/badge/Status-Passing-brightgreen)]()

## 🚀 Sobre o projeto
Este projeto é um framework de automação de testes utilizando **Playwright**, abrangendo **UI** e **API**. O objetivo é demonstrar boas práticas em automação, como testes paralelos, geração de relatórios e organização de projetos por **diretórios de testes**.

O foco principal é:

- Testes de interface web (UI) em múltiplos navegadores
- Testes de API (GET, POST, PUT, DELETE)
- Relatórios automáticos em HTML
- Execução paralela de testes

---

## 🛠 Tecnologias e Ferramentas
- **Node.js** v18+
- **Playwright** 1.57
- **json-server** (para APIs locais)
- **VS Code** ou outro editor de código
- **Git** e **GitHub**

---

## 📂 Estrutura do Projeto

playwright-web-api-test-automation/

├── tests/

│ ├── api/ → Testes de API

│ └── ui/ → Testes de interface

├── playwright.config.js

├── package.json

└── README.md

---

## ⚡ Funcionalidades

### Testes UI
- Acessam páginas públicas (ex.: [The Internet](https://the-internet.herokuapp.com))
- Executam ações na página de login
- Rodam em **Chromium, Firefox e WebKit**

### Testes API
- Testam endpoints públicos (ex.: [JSONPlaceholder](https://jsonplaceholder.typicode.com))
- Suportam métodos: **GET, POST, PUT, DELETE**
- Validação de status e conteúdo das respostas
- Execução de testes **paralelos**

---

## 🏃 Como Rodar
```bash
### Instalar dependências
npm install

### Rodar todos os testes
npx playwright test

### Rodar testes de UI
npx playwright test tests/ui

### Rodar testes de API
npx playwright test tests/api

### Abrir relatório
npx playwright show-report

