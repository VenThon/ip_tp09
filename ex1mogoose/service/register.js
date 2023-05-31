const users = require('../model/users')

const register = async (param) => {
    const {email, username, firstname, lastname, password } = param;
    
    try{
        var existed = await users.findOne({ email })
        if(existed){
            throw "Email is already used";
        }
        existed = await users.findOne({ username })
        if(existed){
            throw "username is already used"
        }

        const newUser = {
            email,
            username,
            firstname,
            lastname,
            password
        }

        const createUser = await users.create(newUser)

        return {
            success: true,
            data: createUser
        }
    }catch(error){
        return {
            success: false,
            err: error
        }
    }
}

module.exports = {
    register
}