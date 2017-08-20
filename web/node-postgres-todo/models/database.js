const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';

const client = new pg.Client(connectionString);
const assert = require('assert');
const query = client.query('SELECT NOW()');
assert(query instanceof Promise); // true
assert(query.on === undefined); // true
query.then((res) => { client.end(); });

//THIS IS OUT OF DATE
// client.connect();
// const query = client.query(
//   'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
// query.on('end', () => { client.end(); });