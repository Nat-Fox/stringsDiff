// CALL 1
const call1Google = require('./call1-google.json');
const call1Manual = require('./call1-manual.json');
// CALL 2
const call2Google = require('./call2-google.json');
const call2Manual = require('./call2-manual.json');
// 2
const flac2Google = require('./2-google.json');
const flac2Manual = require('./2-google-manual.json');

const fs = require('fs');

// cambiar info de calls segun la que se necesite 
let linesGoogleSpeech = flac2Google[0].results.map(line => {
  return line.alternatives[0].transcript;
});

let text = linesGoogleSpeech.join('');

fs.writeFile("./flac2Google.txt", text, function(err) {
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