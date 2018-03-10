var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ExceptionSchema   = new Schema({
    date: Date,
    pageId: String,
    error: {
        message: String,
        mode: String,
        name: String,
        column: Number,
        context: [String],
        line: Number,
        file: String,
        stack: [{
            args: [String],
            column: Number,
            context: [String],
            func: String,
            line: Number,
            url: String,
            file: String
        }]
    }
});

module.exports = mongoose.model('Exception', ExceptionSchema);