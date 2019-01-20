const images = require("../models/candidates.js");

module.exports = function(app){
  app.get("/", function(req, res) {
    images.all()
      .then(function(data){
        res.render("index", { images: data });
      })
      .catch(function(err){
        console.log(err);
      });
  });
}