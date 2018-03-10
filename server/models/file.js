var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var FileSchema   = new Schema({
    date: Date,
    name: String,
    url: String,
    hash: String,
    pageId: String
});

module.exports = mongoose.model('File', FileSchema);