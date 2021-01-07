const { Client } = require('pg')
const { getConnection } = require('./postgres');

const get_all = () => {
  const connection = getConnection({
    db: "new",
    username: process.env.POSTGRES_NEW_USERNAME,
    password: process.env.POSTGRES_NEW_PASSWORD,
    port: 5432
  })

  console.log('logging connection', connection);
}