const fs = require("fs");

try {

    // Write to file
    fs.writeFileSync("sample.txt", "Hello File");
    console.log("File written successfully");

    // Append to file
    fs.appendFileSync("sample.txt", "\nThis is Node JS");
    console.log("File appended successfully");

    // Read from file
    const data = fs.readFileSync("sample.txt", "utf8");
    console.log("File content:\n" + data);

    // Delete file
    // fs.unlinkSync("sample.txt");
    // console.log("File deleted successfully");

} catch (error) {
    console.log("File operation error");
}
