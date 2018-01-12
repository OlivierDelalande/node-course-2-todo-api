var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

// pour mémoire
// mlab: 'mongodb://<olivier.d>:<mdp>@ds247357.mlab.com:47357/todo-api'
