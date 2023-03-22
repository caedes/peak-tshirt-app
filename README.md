# Peak Tshirt Web App

> On vend des tshirts et on le fait bien.

## Getting Started

Create the `/public/config.json` file:

```json
{
  "API_BASE_URL": "http://localhost:3001"
}
```

It should be a `REACT_APP_API_BASE_URL` env var to host it on Netlify.

Install dependencies:

```shell
yarn
```

Run the dev server and the local API:

```shell
yarn start:api
yarn start
```

Make your move, develop your new feature, then commit with:

```shell
yarn commit
```

## Mockup

![Mockup](./docs/mockup.png)

## CRA

[Official CRA doc](./docs/CRA.md).

## Todo

- [ ] CORS
- [x] Design de la TshirtPage
- [x] Data Dynamic de TshirtPage
- [x] Bouton ajout au panier (static)
