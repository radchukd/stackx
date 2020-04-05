import { MongoClient, Db, Collection } from 'mongodb';
import { DB_URI, DB_NAME } from './secrets';

class Database {
  client: MongoClient;

  db: Db;

  users: Collection;

  public readonly init = async function init(): Promise<void> {
    this.client = await MongoClient.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.db = await this.client.db(DB_NAME);
    this.users = await this.db.collection('users');
  }
};

const database = new Database();
export default database;
