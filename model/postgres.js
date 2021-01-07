const { Client } = require('pg')

// const client = new Client({
//     connectionString,
//   })
// client.connect()
// client.query('SELECT NOW()', (err, res) => {
// console.log(err, res)
//     client.end()
// })
// }

const requiredConfig = [
    "username",
    "password",
    "db"
]

const validateConfig = (config) => {
    const missing = [];
    requiredConfig.forEach(req => {
        if(!config.hasOwnProperty(req)) missing.push(req);
    })

    return missing;
}

exports.getConnection = (config) => {
    const valid = validateConfig(config);
    if(valid.length === 0)
    {
        return `postgresql://${config.username}:${config.password}@${process.env.POSTGRES_ENDPOINT}:${config.port || 5432}/${config.db}`
    } else {
        throw new Error(`Missing required properties: ${valid.toString()}`)
    }    
}