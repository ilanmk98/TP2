const fs = require('fs').promises;

async function readFileAndSaveInfo() {
  try {
    const filePath = './package.json';

    const contenidoStr = await fs.readFile(filePath, 'utf8');

    const contenidoObj = JSON.parse(contenidoStr);

    const size = Buffer.from(contenidoStr).length;

    const info = {
      contenidoStr,
      contenidoObj,
      size,
    };

    console.log(info);

    const infoFilePath = './info.txt';
    await fs.writeFile(infoFilePath, JSON.stringify(info, null, 2), 'utf8');

    console.log(`El objeto 'info' se ha guardado en ${infoFilePath} de manera asincrónica.`);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}


readFileAndSaveInfo();
