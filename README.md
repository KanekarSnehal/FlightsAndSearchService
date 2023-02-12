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

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx squelize db:create` and then execute `npx sequelize db:migrate`

## DB Design
    - Airplane Table
    - Flight Table
    - Airport Table
    - City Table

- A flight belong to an airplane but one airplane can be used in multiple flights
- A city has many airport but one airport belongs to a city
- One airport can have many flights but a flight belongs to one airport

## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, updated_at
    Relationship -> City has many airports and airport belongs to a city (one to many)
    ``` npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:Integer ```