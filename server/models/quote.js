console.log('inside of quote.js')

const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
    name: {type: String},
    yourquote: {type: String}
}, {timestamps: true});

mongoose.model('Quote', QuoteSchema);