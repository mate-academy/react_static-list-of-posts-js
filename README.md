# React Static List of Posts (JS)

Aplicação desenvolvida em React com foco em componentização, organização de dados e separação de responsabilidades na interface.

[DEMO LINK](https://Igor-hrm.github.io/react_static-list-of-posts-js/)

---

## Sobre o projeto

Este projeto simula uma listagem de posts utilizando dados estáticos, onde cada post possui um autor e uma lista de comentários relacionados.

A aplicação foi construída do zero, respeitando rigorosamente o markup e as classes CSS fornecidas, garantindo compatibilidade total com os testes automatizados.

---

## Tecnologias utilizadas

- React
- JavaScript
- SCSS
- Vite
- GitHub Pages

---

## Funcionalidades implementadas

- Preparação e normalização dos dados:
  - Associação de cada post a um usuário (`user`)
  - Associação de comentários (`comments`) utilizando `postId`
- Divisão da aplicação em componentes reutilizáveis
- Criação de componentes do tipo `List` e `Info`
- Renderização dinâmica de listas com `map`
- Separação de estilos SCSS por componente
- Manutenção exata das classes CSS exigidas pelos testes
- Deploy da aplicação no GitHub Pages

---

## Estrutura de componentes

- **PostList**
  Responsável por renderizar a lista de posts.

- **PostInfo**
  Exibe as informações de um post individual.

- **UserInfo**
  Renderiza os dados do autor do post.

- **CommentList**
  Renderiza os comentários relacionados a um post.

- **CommentInfo**
  Exibe as informações de um comentário individual.

---

## Conceitos praticados

- Componentização no React
- Passagem de dados via props
- Renderização condicional
- Organização e normalização de dados
- Separação de responsabilidades
- Estruturação de estilos por componente

---

## Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/Igor-hrm/react_static-list-of-posts-js.git
```
