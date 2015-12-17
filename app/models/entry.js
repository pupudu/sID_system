var mongoose = require('mongoose');

//Entry schema
var entrySchema = mongoose.Schema({
    id: String,
    myid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Facebook'
    },
    targetid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Facebook'
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    },
    claim: String,
    rating: Number,
    weight: Number
});

module.exports = mongoose.model('Entry', entrySchema);
