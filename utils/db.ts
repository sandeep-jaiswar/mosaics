import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

const mclient = new MongoClient(uri);
const clientPromise = mclient.connect();
const client = await clientPromise;
const db = client.db('production');

export default db;