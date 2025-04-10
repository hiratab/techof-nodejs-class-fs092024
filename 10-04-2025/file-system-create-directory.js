const fs = require('fs').promises;
const path = require('path');

async function createDirectory(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
    console.log(`Directory created: ${dirPath}`);
  } catch (error) {
    console.error(`Error creating directory: ${error.message}`);
  }
}

(async () => {
  // const dirPath = path.join(__dirname, 'files', 'new-directory');

  // // Create the directory
  // await createDirectory(dirPath);

  // Create a nested directory
  const nestedDirPath = path.join(__dirname, 'files', 'new-directory', 'nested');
  await createDirectory(nestedDirPath);
}
)();