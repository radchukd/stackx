import { MongoClient, Db, Collection } from 'mongodb';
import logger from '../config/logger';
import { DB_URI, DB_NAME } from '../config/secrets';

class Database {
  client: MongoClient;

  db: Db;

  users: Collection;

  public readonly init = async function init(): Promise<void> {
    if (this.client || this.db) {
      logger.error('Already connected to MongoDb.');
    }
    this.client = await MongoClient.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.db = await this.client.db(DB_NAME);
    logger.info('Connected to MongoDb.');
    this.users = await this.db.collection('users');
  }
};

const database = new Database();
export default database;
