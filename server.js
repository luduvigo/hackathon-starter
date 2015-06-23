var express = require("express")
var bodyParser = require("body-parser")
var Post = require("./models/post")

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/posts", require("./controllers/api/posts"))
app.use(require("./controllers/static"))

app.listen(3000, function() {
	console.log("Server listening on", 3000)
})