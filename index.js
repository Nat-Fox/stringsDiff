const call1Google = require('./call1-google.json');
const call1Manual = require('./call1-manual.json');
const fs = require('fs');

// hacer un txt con el call1-google.json
let linesGoogleSpeech = call1Google[0].results.map(line => {
  return line.alternatives[0].transcript;
});

let text = linesGoogleSpeech.join('');

fs.writeFile("./call1-google.txt", text, function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("The file was saved!");
}); 

// hacer un txt con el call1-manual.json
let linesManual = call1Manual[0].resultsManual.map(lineManual => {
  return lineManual.line[0].transcript
})

let textManual = linesManual.join('')

fs.writeFile("./call1-manual.txt", textManual, function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("The file was saved!");
}); 