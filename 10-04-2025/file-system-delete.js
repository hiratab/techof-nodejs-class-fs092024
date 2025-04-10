const fs = require('fs').promises;
const path = require('path');

async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
    console.log(`Deleted file: ${filePath}`);
  } catch (error) {
    console.error(`Error deleting file: ${error.message}`);
  }
}
(async () => {
  const filePath = path.join(__dirname, 'files', 'delete.txt');

  // Delete the file
  await deleteFile(filePath);
})()