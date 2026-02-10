const fs = require("fs");

// Step 1: Write file
fs.writeFile("data.txt", "Hello Node.js", (err) => {
  if (err) return console.log("Write error");

  console.log("File written");

  // Step 2: Read file
  fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) return console.log("Read error");

    console.log(data);

    // Step 3: Append file
    fs.appendFile("data.txt", "\nAppended text", (err) => {
      if (err) return console.log("Append error");

      console.log("Data appended");

      // Step 4: Delete file
      fs.unlink("data.txt", () => {
        console.log("File deleted");
      });
    });
  });
});
