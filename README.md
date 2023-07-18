# LendingApp

## Getting Started

NOTE: You need the Supabase token to use the lending app db locally

### Setup local database

1. Start a Postgres docker image: `docker run --name lending-db -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres`
2. Connect to local postgres instance: `psql -h localhost -p 5432 -U postgres -W` with a password of `password`
3. `CREATE DATABASE lending_db;`

## Supabase

- [Making changes to the tables with migrations](https://supabase.com/docs/guides/getting-started/local-development#database-migrations)
- [Adding seed data](https://supabase.com/docs/guides/getting-started/local-development#add-sample-data)
