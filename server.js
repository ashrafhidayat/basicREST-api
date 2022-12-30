
const http = require("http");

const requestListener = (request,response) => {
   const {method} = request;
   const {url} = request;

   response.setHeader('Content-Type', 'application/json');
   response.setHeader('X-Reserved-By', 'NodeJS');
   switch (method) {
     case 'GET':
     if (url === '/json') {
       const data = {
         onmyojiID : "Aobashi",
         currentID : "TooruAmuro",
         guild : "NuraDojo",
         duelPVP : 1600,
         rankGuild_A : 4,
         rankGuild_PVP : 20
       };
       response.statusMessage = "Data successfully retrieved";
       response.statusCode = 200;
       response.end(JSON.stringify(data));
     }
     else {
       response.statusCode = 404;
       response.end("No Data!");
     }
    break;

     case 'POST':
     let body = [];

     request.on('data', (chunk) => {
       body.push(chunk);
     });

     request.on('end', () => {
       body = Buffer.concat(body).toString();
       const {name} = JSON.parse(body);
       response.end(`\n <h1>Method POST successfully responded.</h1> \n <br> <h2>Hello, ${name}</h2>`);

     });
    break;

     case 'PUT':
     response.end('<br><h1>Method PUT successfully responded.</h1>');
    break;

     case 'DELETE':
     response.end('<br><h1>Method DELETE successfully responded.</h1>');
    break;

     default:
     response.end('<br> there are no such a method request like that :(');
   }
};

const server = http.createServer(requestListener);

const port = 5555;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server has run at http://${host}:${port}`);
});
