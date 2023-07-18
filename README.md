# LendingApp

## Getting Started

NOTE: You need the Supabase token to use the lending app db locally

### Setup local database

1. Start a Postgres docker image: `docker run --name lending-db -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres`
2. Connect to local postgres instance: `psql -h localhost -p 5432 -U postgres -W` with a password of `password`
3. `CREATE DATABASE lending_db;`
4. `npx prisma migrate dev --name init` create db tables using prisma
5. `npx prisma db seed` to seed running db instance
6. Try sending a `POST http://localhost:3000/api/auth/login` request with the following on `x-www-form-urlencoded` on postman to see if the backend works. You should receive an `access_token` if it's working:
   - email: tpietzner1@cnbc.com
   - password: password

## Supabase

- [Making changes to the tables with migrations](https://supabase.com/docs/guides/getting-started/local-development#database-migrations)
- [Adding seed data](https://supabase.com/docs/guides/getting-started/local-development#add-sample-data)
