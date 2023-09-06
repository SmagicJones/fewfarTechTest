import seed from './seed.js'
import db from './connection.js'


const runSeed = () => {
    return seed()
    .then(()=> {
        return db.end()
    })
}

runSeed();