const fs = require('fs').promises;
const path = require('path');

async function listFiles(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    console.log(`Files in ${dirPath}:`);
    files.forEach(file => {
      console.log(file);
    });
  } catch (error) {
    console.error(`Error listing files: ${error.message}`);
  }
}

(async () => {
  const dirPath = path.join(__dirname, 'files');

  // List files in the directory
  await listFiles(dirPath);
})();