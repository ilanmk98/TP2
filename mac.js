const fs = require('fs');
const filePath = './package.json';

function handleFileRead(err, contenidoStr) {
  if (err) {
    console.error(`Error al leer el archivo ${filePath}: ${err}`);
    return;
  }

  
  const contenidoObj = JSON.parse(contenidoStr);

  const size = Buffer.from(contenidoStr).length;

  const info = {
    contenidoStr,
    contenidoObj,
    size,
  };


  console.log(info);

  
  const infoFilePath = './info.txt';
  fs.writeFile(infoFilePath, JSON.stringify(info, null, 2), 'utf8', (err) => {
    if (err) {
      console.error(`Error al guardar el objeto 'info' en ${infoFilePath}: ${err}`);
    } else {
      console.log(`El objeto 'info' se ha guardado en ${infoFilePath} de manera asincrónica.`);
    }
  });
}

// Realizar la lectura del archivo de manera asíncrona
fs.readFile(filePath, 'utf8', handleFileRead);
