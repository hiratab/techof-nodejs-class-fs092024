const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'files', 'write.txt');

try {
  const content = 'Hello, World!\n';

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('File written successfully');
} catch (error) {
  console.error("Error writing to file:", error);
}