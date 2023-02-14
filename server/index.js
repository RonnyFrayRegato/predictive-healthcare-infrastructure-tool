const PORT = process.env.PORT || 3001;


const  express = require('express');
var app = express();

app.get('/', function(req, res) {

    res.send("hello world")


});


app.listen(PORT,() => {
    console.log(`Server listening on ${PORT}`);
})