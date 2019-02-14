console.log('inside of quotes.js')

const mongoose = require("mongoose");
const Quote = mongoose.model('Quote');

class Quotes {
    index(req, res){   
        Quote.find({}, function(err,quotes){
            console.log(err,quotes)
            res.render("index",{quotes:quotes});    
        })
    }

    results(req,res){
        Quote.find({}, function(err,quotes){
            console.log(err,quotes) 
            res.render("quotes",{quotes:quotes})
        })
    }

    create(req, res){
        let q= new Quote(req.body);
        q.save(function(err){
            if(err){
                console.log(err);
            }
            res.redirect("/quotes");
        });
    }
}

module.exports = new Quotes();