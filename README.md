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

Aguarde alguns instantes. Para visualizar deve-se realizar o POST na rota '/log' para realizar a raspagem de dados. Já para visualizar os dados coletados deve-se realizar o GET na rota '/log'

5 - Testes:

Para este estudo foram criados testes de integração para as rotas GET e POST. Para visualizar os testes basta executar o comando:

```
yarn test
```

## :warning: Atenção

Neste código não foram adicionados testes voltados para as funcionalidades do Pumpeteer, logo, para usos gerais e/ou fora do contexto de estudo, é ideal adicionar estes testes.

Observe ainda que este tipo de código possui caracteristicas fortemente bloqueantes, ou seja, seu fluxo quebra os principios de Non-Blocking I/O do Node.
