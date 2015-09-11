var express = require('express')
var jwt = require('jwt-simple')
var _ = require('lodash')
var bcrypt = require('bcrypt')
var app = express()
app.use(require('body-parser').json())

var users = [{username : 'luduvigo', password: '$2a$10$t7N8vGO9vs1AkdtCcfH6Ee1iqKeqJ/piM4kgX4J0hMavyTSX//xDS'}]

var secretKey = 'supersecretkey'

function findUserByUsername(username) {
    return _.find(users, {username : username })
}

function validateUser(user, password, cb) {
    return bcrypt.compare(password, user.password, cb)
}

app.post('/session', function (req, res){
    var user = findUserByUsername(req.body.username)
    validateUser(user, req.body.password, function(err, valid){
	if(err || !valid){
            return res.send(401)
        }
        var token = jwt.encode({username : user.username}, secretKey)
        res.json(token)
    })
})

app.get('/user', function(req, res){
    var token = req.headers['x-auth']
    var user = jwt.decode(token, secretKey)
    res.json(user)
})

app.listen(3000)
