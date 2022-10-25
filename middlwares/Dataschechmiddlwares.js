const{body}=require('express-validator')

exports.validationcheck=[
    body('email','please enter a valid email').isEmail(),
    body('password','password should be at least 5 caracters').isLength({min:5})
]