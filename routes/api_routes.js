const AlphaStore = require('../models/AlphaStore');



// AlphaStore.create({
// AlphaStore.then({

// })
// })



module.exports = (app) =>{
    app.get("/api/friends", function(req, res) {
       console.log("hi");
        res.send("hi");
      });

}