const userModel = require('../database/userModel')

const signin = async (req, res) => {
    const { email, password } = req.body;
console.log(email,password)
    try {
        await userModel.createUser(email, password);
        res.cookie('email', email, {hhttpOnly: false});
        res.render('pfpUpdate', {email:email});
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
            res.cookie('email', user.email,  {hhttpOnly: false});
            res.redirect('/dashboard');
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        res.status(500).send('Error logging in');
    }
}

const profileUpdate = async (req, res) => {
    console.log(req.body)
    const email = req.body.email
    const gender = req.body.gender
    const age = req.body.age
    const interest = req.body.interest
    
    const updatedUser = await userModel.updateUser(email,
        gender,
        age,
        interest,
    );

    res.redirect('/dashboard');
}



module.exports = { signin, login, profileUpdate };