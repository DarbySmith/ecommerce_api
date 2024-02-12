# E-commerce API

## Running The Server
- run script: $ `npm run dev`

## Available endpoints 
- GET `localhost:3000/users`: returns all users
- GET `localhost:3000/user/:id`: returns a user with that id
- POST `localhost:3000/register`: creates a new user
    - request body:
    ```json
    {
        "username": "darby",
        "email": "darby@gmail.com",
        "password": "password"
    }
    ```
- POST `localhost:3000/login`: logs in a user
    - request body:
    ```json
    {
        "email": "darby@gmail.com",
        "password": "password"
    }
    ```
- PUT `localhost:3000/user/:id`: updates a user
    - request body: 
    ```json
    {
        "username": "general_sam",
        "email": "general_sam@gmail.com",
        "password": "password"
    }
    ```
- DELETE `localhost:3000/user/:id`: deletes a user with given id


## Installation
- $ npm init -y
    - initialze Node.js project and create a package.json
- $ npm i express dotenv helmet cors http-status-codes uuid bcryptjs
    - create express server with typescript
- $ npm i -D typescript
    - install typescript as a dev dependency in package.json

### Other packages
- $ npm i --save-dev @types/node
    - install types for node
    - fixes error: implicitly has an 'any' type.
- $ npm i --save-dev @types/express
    - install types for express
    - fixes error: implicitly has an 'any' type.
- $ npm i --save-dev @types/cors
    - install types for cors
    - fixes error: implicitly has an 'any' type.
- $ npm i --save-dev @types/bcryptjs
    - install types for bcryptjs
    - fixes error: implicitly has an 'any' type.
- $ npm i --save-dev @types/dotenv
    - install types for dotenv
    - fixes error: implicitly has an 'any' type.
- $ npm i --save-dev @types/http-status-codes
    - install types for http-status-codes
    - fixes error: implicitly has an 'any' type.

- $ npm i -D ts-node-dev
    - decrease time takes to restart app after change
    - restarts a target Node.js process when any required files change

### Script for package.json
- `--pretty`: use pretty formatter for node
- `--respawn`: keep watching for changes after script exited
- `./scr/app.ts`: app entry file
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "ts-node-dev --pretty --respawn ./src/app.ts"
}
```