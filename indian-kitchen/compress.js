const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directories = ['public/images/real', 'public/images/extracted', 'public/images'];

async function processImages() {
  for (const dir of directories) {
    const fullDir = path.join(__dirname, dir);
    if (!fs.existsSync(fullDir)) continue;
    
    const files = fs.readdirSync(fullDir);
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const filePath = path.join(fullDir, file);
        const stat = fs.statSync(filePath);
        if (stat.size > 800000) { // greater than 800KB
          console.log(`Compressing ${file} (${(stat.size/1000000).toFixed(2)}MB)...`);
          const tempPath = filePath + '.tmp';
          try {
            await sharp(filePath)
              .resize(1920, 1920, { fit: 'inside', withoutEnlargement: true })
              .jpeg({ quality: 80 })
              .toFile(tempPath);
            fs.renameSync(tempPath, filePath);
            console.log(`Finished ${file}`);
          } catch (e) {
            console.error(`Error compressing ${file}:`, e);
          }
        }
      }
    }
  }
}

processImages().then(() => console.log('Done!')).catch(console.error);
