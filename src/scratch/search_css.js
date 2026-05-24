const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\KrithickRaj\\OneDrive\\Desktop\\website for RA LAB\\src\\index.css', 'utf8');

const matches = [];
const regex = /\.[\w-]+\s*\{[^}]*\}/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const cssRule = match[0];
  if (cssRule.includes('arrow') || cssRule.includes('btn') || cssRule.includes('prev') || cssRule.includes('next') || cssRule.includes('control')) {
    matches.push(cssRule);
  }
}

console.log(`Found ${matches.length} matching rules:`);
matches.forEach(m => console.log(m.substring(0, 200) + '\n---'));
