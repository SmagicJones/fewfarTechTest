import format from 'pg-format';


import db from './connection.js'

// import fetchSupporters from '../supporterModel.js';
// import fetchDonations from '../donationsModel.js'


// const supporters = await fetchSupporters();

// const donations = await fetchDonations();




import supporters from './data/supporters.json' assert {type: "json"};
import donations from './data/donations.json' assert {type: "json"}

const seed = () => {
    return db
    .query(`DROP TABLE IF EXISTS donations;`)
    .then(()=>{
        db.query(`DROP TABLE IF EXISTS supporters;`)
    })
    .then(()=>{
        return db.query(`CREATE TABLE supporters (
            object TEXT,
            id VARCHAR(50) PRIMARY KEY,
            created_at TEXT,
            name TEXT,
            address_1 TEXT,
            address_2 TEXT,
            city TEXT,
            postcode TEXT
            );`);
    })
    .then(()=>{
        return db.query(`CREATE TABLE donations (
            object TEXT,
            id TEXT,
            created_at TEXT,
            supporter_id TEXT,
            FOREIGN KEY (supporter_id) REFERENCES supporters(id),
            CONSTRAINT find FOREIGN KEY(supporter_id) REFERENCES supporters(id),
            amount INT
        )`)
    })
    .then(()=>{
        const formattedSupporters = supporters.data.map((supporter) => [supporter.object, supporter.id, supporter.created_at, supporter.name, supporter.address_1, supporter.address_2, supporter.city, supporter.postcode])
        const queryStr = format(
        `INSERT INTO supporters (object, id, created_at, name, address_1, address_2, city, postcode)
        VALUES %L
        RETURNING *;`, formattedSupporters);
        return db.query(queryStr)
    })
    .then(()=>{
        const formattedDonations = donations.data.map((donation)=>[donation.object, donation.id, donation.created_at, donation.supporter_id, donation.amount])
        const queryStr = format(
        `INSERT INTO donations (object, id, created_at, supporter_id, amount)
        VALUES %L
        RETURNING *;`, formattedDonations)
        return db.query(queryStr)
    })

}
export default seed;