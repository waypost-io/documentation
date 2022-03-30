---
sidebar_position: 3
---
# Installation

There are 2 ways you can integrate Waypost into your application. The easiest way is to use Docker. For this, please follow the instructions on the [Quickstart page](quickstart.md). You also have the option to clone each component from GitHub — keep reading to learn how.

## **Install the Waypost Feature Flag Manager App**

This contains the client, server, and PostgreSQL database.

```bash
git clone https://github.com/waypost-io/waypost.git
```

Follow the instructions below, which are also available in the repo’s README.

### Database Setup

1. With Postgres installed, log in to the Postgres console and create a new database called "waypost".

```sql
CREATE DATABASE waypost;
\c waypost
```

2. Run all of the queries in the `/server/waypost_db_setup.sql` file to create the Waypost schema locally.
3. Make sure that the credentials in the `.env` file match your Postgres login credentials (see "*Local Setup*").

### Local Setup

1. Clone the Waypost repository.

```bash
git clone https://github.com/waypost-io/waypost.git
cd waypost
```

2. Install dependencies.

```bash
cd client
npm install
cd ../server
npm install

```

3. Add `.env` file in the `server` directory with the following environment variables. Make sure the URL’s and `WEBHOOK_VALIDATOR` are correct.

```bash
POSTGRES_DB="waypost"
POSTGRES_USER=<user>
POSTGRES_PASSWORD=<password>
POSTGRES_HOST="localhost"
POSTGRES_PORT=5432
WEBHOOK_VALIDATOR="secret"
FLAG_PROVIDER_URL="http://localhost:5050"

```

and optionally in the `client` directory if you want to run tests

```bash
NODE_ENV="development"
```

4. Start the back-end from the `server` directory.

```bash
npm start
```

5. Open a new terminal and start the front-end from the `client` directory.

```bash
cd ../client
npm start
```

The client will run on port `:3000` and the server will run on port `:5000`.

## **Install the Flag Provider service**

The flag provider service is an Express app that accepts SSE connections to serve real-time feature flag updates to clients using Waypost SDKs.

1. Clone the flag provider repository ([https://github.com/waypost-io/waypost-flag-provider](https://github.com/waypost-io/waypost-flag-provider))

```bash
git clone https://github.com/waypost-io/waypost-flag-provider.git
cd waypost-flag-provider
```

2. Install dependencies

```bash
npm install
```

3. Add a `.env` file to the root directory with the environment variables `WEBHOOK_VALIDATOR` and `FEATURE_FLAG_MANAGER_URL`. Example:

```bash
WEBHOOK_VALIDATOR="secret"
FEATURE_FLAG_MANAGER_URL="http://localhost:5000"
```

4. Start the application

```bash
npm start
```

The flag provider app will run on port `:5050`.

Note: For the Flag Provider to function properly, it should be deployed and connected with a running Waypost feature flag management app.