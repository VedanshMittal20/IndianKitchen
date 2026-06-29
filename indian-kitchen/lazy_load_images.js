const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

async function getFiles(dir) {
  const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

async function addLazyLoading() {
  const files = await getFiles(srcDir);
  const codeFiles = files.filter(f => /\.(tsx|ts)$/i.test(f));

  for (const file of codeFiles) {
    if (file.includes('Hero')) {
        continue; // Skip Hero sections to keep images eager loaded
    }

    let content = await fs.promises.readFile(file, 'utf8');
    
    const imgRegex = /<img([\s\S]*?)\/?>/g;
    
    if (content.match(imgRegex)) {
      content = content.replace(imgRegex, (match, attributes) => {
        if (attributes.includes('loading=')) return match;
        return `<img loading="lazy" decoding="async"${attributes}/>`;
      });
      await fs.promises.writeFile(file, content, 'utf8');
      console.log(`Added lazy loading to ${path.relative(srcDir, file)}`);
    }
  }
}

addLazyLoading().catch(console.error);
