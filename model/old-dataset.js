const { Client } = require('pg')
const { getConnection } = require('./postgres');

const get_all = () => {
  const connection = getConnection({
    db: "old",
    username: process.env.POSTGRES_OLD_USERNAME,
    password: process.env.POSTGRES_OLD_PASSWORD,
    port: 5432
  })

  console.log('logging connection', connection);
}