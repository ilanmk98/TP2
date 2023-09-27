const fs = require('fs');

// Ruta al archivo package.json
const filePath = './package.json';

try {
  const contenidoStr = fs.readFileSync(filePath, 'utf8');
  const contenidoObj = JSON.parse(contenidoStr);
  const size = Buffer.from(contenidoStr).length;
  const info = {
    contenidoStr,
    contenidoObj,
    size,
  };

  console.log(info);
  const infoFilePath = './info.txt';
  fs.writeFileSync(infoFilePath, JSON.stringify(info, null, 2), 'utf8');
  console.log(`El objeto 'info' se ha guardado en ${infoFilePath} de manera síncrona.`);
} catch (err) {
  console.error(`Error: ${err}`);
}