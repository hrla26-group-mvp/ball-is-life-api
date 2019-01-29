const http = require('http');
const app = require('./app');

const server = http.createServer(app);
const PORT = 9000;

server.listen(PORT, () => { console.log('Listening on PORT ', PORT); });
server.on('error', (err) => { console.error(err); });
