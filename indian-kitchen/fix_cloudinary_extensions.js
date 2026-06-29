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

async function fixExtensions() {
  const files = await getFiles(srcDir);
  const codeFiles = files.filter(f => /\.(tsx|ts)$/i.test(f));

  for (const file of codeFiles) {
    let content = await fs.promises.readFile(file, 'utf8');
    
    // Replace .jpg, .jpeg, .png from the end of Cloudinary URLs
    const regex = /(https:\/\/res\.cloudinary\.com\/duibfjsjh\/image\/upload\/f_auto,q_auto\/indian-kitchen\/.*?)\.(jpg|jpeg|png|webp|gif)(["'])/gi;
    
    if (regex.test(content)) {
      content = content.replace(regex, (match, p1, p2, p3) => {
        return `${p1}${p3}`;
      });
      await fs.promises.writeFile(file, content, 'utf8');
      console.log(`Fixed extensions in ${path.relative(srcDir, file)}`);
    }
  }
}

fixExtensions().catch(console.error);
