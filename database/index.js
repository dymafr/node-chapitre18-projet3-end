const mongoose = require('mongoose');

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => console.log('connexion db ok !'))
  .catch((err) => console.log(err));
