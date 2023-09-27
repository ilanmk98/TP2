const fs = require('fs').promises;


const filePath = './package.json';


fs.readFile(filePath, 'utf8')
  .then((contenidoStr) => {
    
    const contenidoObj = JSON.parse(contenidoStr);

    const size = Buffer.from(contenidoStr).length;
    const info = {
      contenidoStr,
      contenidoObj,
      size,
    };

    console.log(info);

    const infoFilePath = './info.txt';
    return fs.writeFile(infoFilePath, JSON.stringify(info, null, 2), 'utf8');
  })
  .then(() => {
    console.log(`El objeto 'info' se ha guardado en info.txt de manera asincrónica.`);
  })
  .catch((err) => {
    console.error(`Error: ${err}`);
  });
