const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'files', 'hello.txt');

try {
  const data = fs.readFileSync(filePath, 'utf8');
  console.log(data);
} catch (error) {
  console.error("Error reading file:", error);
}