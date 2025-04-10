var http = require('http');

var server_function = function(req, res) {
  const requestUrl = new URL(req.url, 'http://localhost:3000');
  const { searchParams } = requestUrl;
  console.log('searchParams', searchParams);

  const path = requestUrl.pathname;
  console.log('path', path)
  switch (path) {
    case '/':
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write('<h1>Hello!</h1>');
      break;
    
    case '/first-name':
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(`<h1>Hello, ${searchParams.get('first-name')} ${searchParams.get('last-name')}!</h1>`);
      break;
    
    case '/hello-world':
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write('<h1>Hello, world!</h1>');
      break;

    default:
      res.writeHead(404);
      res.write('<h1>Page not found</h1>');
      break;
  }

  res.end();
}

var server = http.createServer(server_function);

server.listen(3000)