# Theia cookie auth

Authorization for theia using cookie key and value

## Getting started

Add package to your dependencies:

```bash
yarn add theia-cookie-auth
# Or using npm:
npm install theia-cookie-auth
```

Create .env file with these content:

```
COOKIE_NAME=*Your cookie name*
COOKIE_VALUE=*Your cookie value*
ERROR_MESSAGE=Oh! 403 error here 
```

## Running the browser example

    yarn rebuild:browser
    cd browser-app
    yarn start

Open http://localhost:3000 in the browser.

## Developing with the browser example

Start watching.

    cd theia-cookie-auth
    yarn watch

Start watching of the browser example.

    yarn rebuild:browser
    cd browser-app
    yarn watch

Launch `Start Browser Backend` configuration from VS code.

Open http://localhost:3000 in the browser.
