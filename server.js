var express = require("express")
var bodyParser = require("body-parser")
var Post = require("./models/post")

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

require("./controllers/api/posts")(app)

app.get("/", function (req, res){
	console.log("call main page")
	res.sendfile("layouts/posts.html")	
})

app.listen(3000, function() {
	console.log("Server listening on", 3000)
})