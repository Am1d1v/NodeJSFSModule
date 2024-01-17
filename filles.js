const fs = require('fs');

const dataToWrite = 'Data';

// Write Data in Text File
fs.writeFile('./file.txt', dataToWrite, (err) => {
   if(err){
    console.log(err);
   }
});