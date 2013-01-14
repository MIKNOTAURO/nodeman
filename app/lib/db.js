var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema   = Schema;

connect();

function connect(){
    mongoose.connect('localhost', 'test');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
  // yay!
    });
}

function disconnect(){mongoose.disconnect();}