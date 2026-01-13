const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  // Parse URL
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  // HOME ROUTE
  if (path === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the Node.js HTTP Server");
  }

  // ABOUT ROUTE
  else if (path === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <body>
          <h1>About Page</h1>
          <p>This is a simple Node.js HTTP server.</p>
        </body>
      </html>
    `);
  }

  // USER ROUTE
  else if (path === "/user" && req.method === "GET") {
    const { name, age } = query;

    const userData = {
      name: name || "Unknown",
      age: age || "Not provided",
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(userData));
  }

  // 404 ROUTE
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Page Not Found");
  }
});

// START SERVER
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
