/*************** GOOGLE ***************/
// CALL 1
const call1Google = require('./google/call1-google.json');
const call1Manual = require('./manual-trasncription/call1-manual.json');
// CALL 2
const call2Google = require('./google/call2-google.json');
const call2Manual = require('./manual-trasncription/call2-manual.json');
// 2
const flac2Google = require('./google/2-google.json');
const flac2Manual = require('./manual-trasncription/2-google-manual.json');


/*************** IBM ***************/
const call1IBM = require('./IBM/call1.json');
const call2IBM = require('./IBM/call2.json');
const flac2IBM = require('./IBM/2.json');

const fs = require('fs');

// cambiar info de calls segun la que se necesite 
let linesIBMSpeech = flac2IBM[0].results.map(line => {
  return line.alternatives[0].transcript;
});

let text = linesIBMSpeech.join('');

fs.writeFile("./flac2IBM.txt", text, function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("The file was saved!");
}); 

// hacer un txt con los json
let linesManual = flac2Manual[0].resultsManual.map(lineManual => {
  return lineManual.line[0].transcript
})

let textManual = linesManual.join('')

fs.writeFile("./flac2Manual.txt", textManual, function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("The file was saved!");
}); 