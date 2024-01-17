const fs = require('fs');

const dataToWrite = 'Data';

// Write data in Text File
fs.writeFile('./file.txt', dataToWrite, (err) => {
   if(err){
    console.log(err);
   } else {
      console.log('File file.txt was writted');
   }
});

// Add new data in file
fs.appendFile('./file.txt', '\nNew Data', (err) => {
   if(err){
      console.log(err);
   } else {
      console.log('New Data added');
   }
});
