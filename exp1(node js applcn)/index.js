const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    // Open login page
    if (req.url === "/") {
        fs.readFile("login.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
    }

    // Check login
    if (req.url === "/login?username=admin&password=1234") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Login Successful");
        res.end();
    }

});

server.listen(3000);
console.log("Server running on port 3000");
