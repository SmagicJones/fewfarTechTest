import pg from 'pg';
const { Pool } = pg;

if (!process.env.PGDATABASE) {
  throw new Error("NO PGDATABASE SET...")
}

export default new Pool();