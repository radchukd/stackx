import { MongoClient } from 'mongodb';
import { DB_URI } from './secrets';

const dbClient = new MongoClient(DB_URI, { useNewUrlParser: true });
export default dbClient;

/*
import { Pool } from 'pg';
import { DB_URI } from './secrets';

const dbClient = new Pool({ connectionString: DB_URI });
export default dbClient;
*/
