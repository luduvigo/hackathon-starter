var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/hackathon-starter", function(req, res){
	console.log("Mongo DB connected")
})
module.exports = mongoose