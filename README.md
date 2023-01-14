## Project setup
- Clone the project on your local
- Execute `npm install` on the same path as your root directory
- Create `.env` file in the root directory and add the following environment variables
    - `PORT=3000`
- Inside the `src/config` folder create a `config.json` file and add following piece of code in it.

```
{
  "development": {
    "username": <YOUR_DB_LOGIN>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx squelize db:create`