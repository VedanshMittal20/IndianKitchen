const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: "duibfjsjh",
  api_key: "388462739842355",
  api_secret: "9gRP6v7OLZDWuLfg-cQjozyze7o"
});

async function run() {
  try {
    const result = await cloudinary.api.resource("indian-kitchen/extracted/page2_img2");
    console.log("Resource URL:", result.secure_url);
  } catch (e) {
    console.error(e);
  }
}
run();
