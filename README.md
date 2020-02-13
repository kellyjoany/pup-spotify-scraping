# spotify-scraping

Este código funciona sobre a plataforma Node.js e tem por finalidade utilizar o puppeteer para acessar a url do spotify e realizar navegações/captura de dados. Este repositório é somente uma demonstração de algumas funcionalidades do puppeteer.

## Como rodar

Este projeto fui construindo utilizando o gerenciador de pacotes YARN, porém, nada o impede de utilizar o NPM se assim preferir.

1 - Clone o repositório:

```
git clone https://github.com/kellyjoany/pup-spotify-scraping.git
```

2 - Instale as dependências

```
yarn install
```

> Lembrando que você é livre para utilizar o NPM.

3 - Renomei o arquivo `.env.example` para `.env` e preencha os campos de usuário e senha

4 - Rode:

```
nodemon src/server.js
```

Aguarde alguns instantes. Para visualizar deve-se realizar o POST na rota 'http://localhost:3333/log' para realizar a raspagem de dados. Já para visualizar os dados coletados deve-se realizar o GET na rota 'http://localhost:3333/log'

5 - Testes:

Este estudo apenas o teste de integração para as rota GET. Para visualizar o teste basta executar o comando:

```
yarn test
```

## :warning: Atenção

Neste código não foram adicionados testes voltados para as funcionalidades do Pumpeteer e da rota POST, logo, para usos gerais e/ou fora do contexto de estudo, é ideal adicionar estes testes tratando os devidos Asyncs.

Observe ainda que este tipo de código possui caracteristicas fortemente bloqueantes, ou seja, seu fluxo quebra os principios de Non-Blocking I/O do Node.
