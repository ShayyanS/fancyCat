const fs = require('fs');
const path = require('path');

//check for correct amount of arguments
if (process.argv.length !== 3) {
  console.log(`Missing arguments\nUsage: node ${path.basename(__filename)} <FILENAME>`)
}

//code to read file contents
const fileName = process.argv[2];
const content = fs.readFileSync(fileName, 'utf-8');
console.log(content);



//code to count number of lines
const lines = content.split('\n');
if (content.length === 0) {
  console.log('Line count: 0');
} else {
  console.log(`Line count: ${lines.length}`);
}
