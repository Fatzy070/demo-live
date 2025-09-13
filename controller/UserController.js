const User = require('../models/UserSchema')

login = async (req, res) => { 
    try {
        const { email , password , phone } = req.body;

        const newuser = await User.create({ email, password , phone });
    
        res.status(201).json(newuser);
        console.log(newuser);

     } catch (error) {
        console.error( 'cannot login' ,error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { login }