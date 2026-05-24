const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\KrithickRaj\\OneDrive\\Desktop\\website for RA LAB\\src\\index.css', 'utf8');

const matches = [];
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('about-section')) {
    matches.push({ line: idx + 1, content: line.trim() });
  }
});

console.log(`Found ${matches.length} matching lines for about-section:`);
matches.forEach(m => console.log(`L${m.line}: ${m.content}`));
