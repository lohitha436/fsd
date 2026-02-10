const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    // Show food page
    if (req.url === "/") {
        const page = fs.readFileSync("food.html");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(page);
    }

    // Handle order
    else if (req.url.includes("/order")) {

        let total = 0;
        let items = [];

        if (req.url.includes("Pizza")) {
            items.push("Pizza");
            total += 150;
        }

        if (req.url.includes("Burger")) {
            items.push("Burger");
            total += 120;
        }

        if (req.url.includes("Pasta")) {
            items.push("Pasta");
            total += 180;
        }

        res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
        res.write("<h2>Order Placed Successfully</h2>");
        res.write("<p><b>Items bought:</b> " + items.join(", ") + "</p>");
        res.write("<p><b>Total cost:</b> &#8377;" + total + "</p>");
        res.end();
    }

});

server.listen(3000);
console.log("Server running on port 3000");
