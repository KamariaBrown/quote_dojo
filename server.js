console.log("inside of server.js");

const express = require("express"),
         port = 5000,
         path = require("path"),
           bp = require('body-parser'),
          app = express();

// app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bp.urlencoded({ extended: true }));

require("./server/utils/mongoose")("quotes");
require("./server/utils/routes")(app);

app.listen(port, function(){
    console.log(`listening on port ${port}`);
});