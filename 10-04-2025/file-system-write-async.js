const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'files', 'write-async.txt');

async function writeFile() {
  try {
    const content = 'Hello, World!\n';
  
    await fs.writeFile(filePath, content, 'utf8');
    console.log('File written successfully');
  } catch (error) {
    console.error("Error writing to file:", error);
  }
}

(async () => {
  console.log("Writing to file...");
  await writeFile();
  console.log("File write operation completed.");
})()
