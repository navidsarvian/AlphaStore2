const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api_routes = require('./routes/api_routes');
const api_routes = require('./routes/auth_routes');
const port = process.env.PORT || 8080;
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/Users');
mongoose.connect('mongodb://localhost/AlphaStoreProducts');
mongoose.Promise = Promise;

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/api',api_routes);
app.use('/api',auth_routes);

// api_routes(app);
// require('./routes/api_routes')(app);
app.get("/", function(req, res) {
    console.log("hi");
     res.send("hi");
   });



app.listen(port, () => console.log(`listening on ${port}`));
