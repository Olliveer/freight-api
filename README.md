<p align="center">
   <h1>Freight-API</h1>
</p>

<p align="center">

 <img alt="Repository size" src="https://img.shields.io/github/repo-size/Olliveer/freight-api?color=212529">

  <a aria-label="Last Commit" href="https://github.com/Olliveer/freight-api/commits/master">
    <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/Olliveer/freight-api?color=212529">
  </a>
  <a href="https://github.com/Olliveer/freight-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Olliveer/freight-api?color=212529">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-212529">
</p>

<b>Freight-api</b> é uma api que retorna o valor do frete baseado no cep e no peso.

# :pushpin: Conteúdo

- [Tecnologias](#computer-tecnologias)
- [Rotas](#computer-tecnologias)
- [Executando](#construction_worker-executando)
- [Licença](#closed_book-licença)
- [Autores](#computer-autores)

# :computer: Tecnologias

Este projeto foi feito utilizando as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Prisma](https://www.prisma.io/)
- [Celebrate](https://github.com/arb/celebrate)

## 🍃 Rotas

| METHOD | ROUTE                        | DESCRIPTION      |
| ------ | ---------------------------- | ---------------- |
| GET    | ${BASE_URL}/freight/CEP/PESO | calculo do frete |

# :construction_worker: Executando

## 1. Clone o Repositório

```bash
https://github.com/Olliveer/freight-api.git
```

## 2. Instale as Dependencias

```bash
yarn
```

## Rode a migration

```
yarn prisma migrate dev -n MIGRATE_NAME
```

## Seed o db

```
yarn seed
```

## 5. Inicie o server

```bash
yarn dev
```

# :closed_book: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

[![image](https://img.shields.io/badge/😎%20José%20Oliveira,%202021-LinkedIn-212529?style=flat-square)](https://www.linkedin.com/in/joseooliveira/)
