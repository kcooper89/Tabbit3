const mongoose = require('mongoose');

// mongodb://localhost/workout

mongoose.connect(process.env.MONGODB_URI || 'mongodb://heroku_dh92k2xd:kdj7d6fu6s8m4cshrttfk1kq8c@ds211718.mlab.com:11718/heroku_dh92k2xd', {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useCreateIndex: true,
 useFindAndModify: false,
});

module.exports = mongoose.connection;