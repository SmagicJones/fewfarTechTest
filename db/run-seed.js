// const {seed} = require('./seed')

import seed from './seed.js'
import db from './connection.js'
// const db = require('./connection')


// const supporters = fetchSupporters = () => {
//     return fetch('https://www.few-far.co/api/techtest/v1/supporters', {
//         method: "GET",
//     }).then((res)=> res.json())
// }


const runSeed = () => {
    return seed()
    .then(()=> {
        return db.end()
    })
}

runSeed();