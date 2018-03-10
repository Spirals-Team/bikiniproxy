var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PageSchema   = new Schema({
    date: Date,
    closeDate: Date,
    title: String,
    url: String,
    hash: String,
    uuid: String,
    status: Number,
    browser: {
        name: String,
        version: String
    }
});

module.exports = mongoose.model('Page', PageSchema);