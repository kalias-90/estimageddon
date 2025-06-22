import { createServer } from 'node:http';
import { connectToDatabase, db, closeConnetion } from './db.js';

const port = 3000;
const host = '127.0.0.1';
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'estimargeddon';
 
const server = createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    db.collection('estimates').insertOne({ dt: new Date() });
    const list = await db.collection('estimates').find().toArray();

    res.end(`Вы кто такие?! Я вас не звал! Присаживайтес...${JSON.stringify(list)}`);
});

connectToDatabase(dbUrl, dbName);

process.on('SIGINT', async () => {
  await closeConnetion();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await closeConnetion();
  process.exit(0);
});

server.listen(
  port,
  host,
  async () => console.log(`Server running at http://${host}:${port}/`)
);
