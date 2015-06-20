var express = require("express")
var bodyParser = require("body-parser")

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/posts", function (req, res){
	res.json([
		{
			username : "luduvigo",
			body: "message"
		}
	])
})

var Post = require("./models/post")
app.post("/api/posts", function(req, res, next){
	console.log("post received")
	console.log(req.body.username)
	console.log(req.body.body)
	
	var post = new Post({
		username: req.body.username,
		body: req.body.body
	})
	post.save(function (err, post) {
		if(err) { return next(err) }
		res.json(201, post)
	})
})

app.listen(3000, function() {
	console.log("Server listening on", 3000)
})