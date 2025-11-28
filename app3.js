const fs = require("fs");
const content = fs.readFileSync('README.md', 'utf-8');

const reactCount = (content.match(/react/ig) || []).length;
console.log(reactCount);
// output: 3
// g is global and i is case insensitive
// golbal means it will search the whole string


const reactCount2 = W


