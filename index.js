import { createServer } from 'node:http';
 
const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end("Вы кто такие?! Я вас не звал! Присаживайтес...");
});

const port = 3000;
const host = '127.0.0.1';

server.listen(
  port,
  host,
  () => {
    console.log(`Server running at http://${host}:${port}/`);
  }
);
