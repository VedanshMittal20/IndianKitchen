const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'duibfjsjh', 
  api_key: '388462739842355', 
  api_secret: '9gRP6v7OLZDWuLfg-cQjozyze7o' 
});

cloudinary.search
  .expression('folder:indian-kitchen/*')
  .max_results(500)
  .execute()
  .then(result => {
    result.resources.forEach(res => console.log(res.public_id, res.secure_url));
  })
  .catch(err => console.error(err));
