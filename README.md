# IMDB Backend

Backend for the IMDB project

## OS that this has been tested against

- NodeJS version: 14.x

## Setup

### Dependencies

_Install nodejs_
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

_Install postgres_
docker run --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres

### Environments

Copy `.env.sample` to `.env` at the project root.
Set the variables in a file called `.env`.

NOTE: The Api must be run on port 3001 because of google authentication

### Running

**Migrate db to the running service**

  Database migration:
  ```
  npm run migrate:latest
  ```
  
  Database rollback:
   ```
  npm run migrate:rollback
  ```
  

**Start the server**

Start npm dev server:
```
npm run dev
```

## Lint

Lint check:
```
npm run lint
```

Lint fix:
```
npm run lint:fix
```
