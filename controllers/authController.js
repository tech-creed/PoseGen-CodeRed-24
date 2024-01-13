const userModel = require('../database/userModel')

const signin = async (req, res) => {
    const { email, password } = req.body;
console.log(email,password)
    try {
        await userModel.createUser(email, password);
        res.cookie('email', email);
        res.redirect('/profile-update');
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
            res.cookie('email', user.email);
            res.redirect('/dashboard');
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        res.status(500).send('Error logging in');
    }
}

const profileUpdate = async (req, res) => {
    const { gender, age, interest } = req.body;
    
    try {
        const authenticatedUser = await getAuthenticatedUser(req.cookies); 
        if (!authenticatedUser) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const updatedUser = await userModel.updateUser(authenticatedUser.email, {
            gender,
            age,
            interest,
        });

        return res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating profile:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getAuthenticatedUser = async (cookies) => {
    try {
        const userEmail = cookies.email;

        if (!userEmail) {
            return null; 
        }

        const user = await userModel.getUserByEmail(userEmail);

        if (!user) {
            return null;
        }

        return user;
    } catch (error) {
        console.error('Error getting authenticated user:', error);
        return null;
    }
};


module.exports = { signin, login, profileUpdate };