const http = require("http");

const routesHandler = require("./routes");

const server = http.createServer(routesHandler);

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});