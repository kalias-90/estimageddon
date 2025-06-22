import { MongoClient } from 'mongodb';

let client;

export let db;

export async function connectToDatabase(dbUrl, dbName) {
  try {
    client = new MongoClient(dbUrl, { useUnifiedTopology: true });
    await client.connect();
    db = client.db(dbName);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
}

export async function closeConnetion() {
  return client.close();
}