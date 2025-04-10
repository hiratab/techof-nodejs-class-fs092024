const fs = require('fs').promises;
const path = require('path');

async function renameFile(oldPath, newPath) {
  try {
    await fs.rename(oldPath, newPath);
    console.log(`Renamed ${oldPath} to ${newPath}`);
  } catch (error) {
    console.error(`Error renaming file: ${error.message}`);
  }
}

(async () => {
  const oldPath = path.join(__dirname, 'files', 'write-async.txt');
  const newPath = path.join(__dirname, 'write-async.txt');

  // Rename the file
  await renameFile(oldPath, newPath);

})()