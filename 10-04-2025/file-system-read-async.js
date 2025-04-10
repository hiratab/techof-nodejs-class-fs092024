const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'files', 'write-async.txt');

async function readFile() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}
(async () => {
  console.log("Reading file...");
  await readFile();
  console.log("File read operation completed.");
})();