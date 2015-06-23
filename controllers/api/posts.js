var Post = require("../../models/post")

module.exports = function(app)
{
	app.get("/api/posts", function (req, res, next){
		console.log("Post get")
		Post.find().sort('-date').exec(function(err, posts){
			if (err) {return next(err)}	
			res.json(posts)
		})
	})

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
}