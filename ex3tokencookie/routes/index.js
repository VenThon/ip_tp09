//for use route
var express = require('express');
var router = express.Router();

const { login } = require('../service/login');
const { register } = require('../service/register');
const {logout} = require('../service/logout');
const {getuser} = require('../service/getuser');
const {joiValidation} = require('../middleware/joiValidation');
const {registerSchema, loginSchema } = require('../schema/index');
const {ensureSignedIn, ensureSignedOut} = require('../middleware/authenticate');

//home page 
router.get('/', function(req,res,next) {
    console.log("router up");
    res.send("Hello, this is API");
});

//login page
router.post('/login', async function(req,res,next) {
    // const param = JSON.parse(req.body);
    const {email, password} = req.body;
    const result = await login(email, password);
    res.json(result);
});
//register page
router.post('/register', async function(req,res,next) {
    console.log(req.body);
    // const param = JSON.parse(req.body);
    const result = await register(req.body);
    res.json(result);
});

//logout page
router.post('/logout', ensureSignedIn, function(req, res, next){
    const result = logout(req.session);
    console.log("cookie", req.cookies);
    res.clearCookie('token')
    res.json(result);
})
//get user by id
router.get('/user/:id', ensureSignedIn, async function(req, res, next){
    var userId = req.path.split("/user/")[1]
    result = await getUser(userId)
    return res.json(result)
})


module.exports = router;