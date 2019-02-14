console.log("inside of routes.js")

const Quotes = require("../controllers/quotes");

module.exports = function(app){
    app.get("/", Quotes.index);
    app.post("/quotes", Quotes.create);
    app.get("/quotes", Quotes.results);
}