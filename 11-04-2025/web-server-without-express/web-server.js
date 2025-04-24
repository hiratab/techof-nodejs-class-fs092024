const fs = require('fs').promises;
const path = require('path');
const http = require('http');

const server = http.createServer(async function(req, res) {
  const filePath = path.join(__dirname, 'public', 'index.html');
  const data = await fs.readFile(filePath);

  res.writeHead(200, {
    'content-type': 'text/html'
  });
  res.write(data);
  res.end();
});

server.listen(3000);
