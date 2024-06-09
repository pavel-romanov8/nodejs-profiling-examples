import { createServer } from 'node:http';
import { router } from './router.js';

const hostname = 'localhost';
const port = 3000;

const server = createServer((req, res) => {
  router[req.url](req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
