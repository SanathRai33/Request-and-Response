const http = require("http");

const server = http.createServer((req, res) => {

  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url === "/home") {
    res.write("<h1>Welcome home</h1>");
  } 
  else if (req.url === "/about") {
    res.write("<h1>Welcome to About Us</h1>");
  } 
  else if (req.url === "/node") {
    res.write("<h1>Welcome to my Node Js project</h1>");
  } 
  else {
    res.write("<h1>Page Not Found</h1>");
  }

  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});