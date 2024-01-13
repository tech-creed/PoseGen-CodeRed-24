const userModel = require('../database/userModel')

const signin = async (req, res) => {
    const { email, password } = req.body;
console.log(email,password)
    try {
        await userModel.createUser(email, password);
        res.redirect('/login');
    } catch (error) {
        res.status(500).send('Error creating user');
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.getUser(email, password);
        if (user) {
            req.session.user = user;
            res.redirect('/dashboard');
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        res.status(500).send('Error logging in');
    }
}


module.exports = { signin, login };