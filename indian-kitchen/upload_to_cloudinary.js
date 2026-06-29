const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const sharp = require('sharp');

// Manually parse .env.local since dotenv might not be installed
const envFile = fs.readFileSync(path.join(__dirname, '.env.local'), 'utf-8');
envFile.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
        let key = match[1];
        let val = match[2].replace(/^["']|["']$/g, '');
        process.env[key] = val;
    }
});

// Configure cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const imagesDir = path.join(__dirname, 'public/images');

async function getFiles(dir) {
  const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

async function uploadImages() {
  try {
    const files = await getFiles(imagesDir);
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png|webp|gif)$/i.test(f));
    
    console.log(`Found ${imageFiles.length} images to upload...`);

    let uploaded = 0;
    // Upload sequentially to avoid rate limits
    for (const file of imageFiles) {
      const relativePath = path.relative(imagesDir, file);
      // Remove extension for public_id
      const publicId = relativePath.replace(/\.[^/.]+$/, "");
      
      console.log(`Processing ${relativePath}...`);
      
      const stats = fs.statSync(file);
      const fileSizeInMB = stats.size / (1024 * 1024);
      let fileToUpload = file;
      let tempFile = null;

      if (fileSizeInMB > 9) {
        console.log(`File ${relativePath} is ${fileSizeInMB.toFixed(2)}MB, compressing...`);
        tempFile = file + '.tmp.jpeg';
        await sharp(file)
          .resize(2048, 2048, { fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 80 })
          .toFile(tempFile);
        fileToUpload = tempFile;
      }

      try {
        await cloudinary.uploader.upload(fileToUpload, {
          folder: "indian-kitchen",
          public_id: publicId,
          use_filename: true,
          unique_filename: false,
          overwrite: true
        });
        uploaded++;
        console.log(`Successfully uploaded ${uploaded}/${imageFiles.length}: ${publicId}`);
      } catch (err) {
        console.error(`Failed to upload ${publicId}:`, err.message);
      }

      if (tempFile && fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
      }
    }
    
    console.log("All images uploaded successfully!");
  } catch (error) {
    console.error("Upload failed:", error);
    process.exit(1);
  }
}

uploadImages();
