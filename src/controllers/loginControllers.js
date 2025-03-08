import {checkAccount} from '../modals/user.modal'

const getLoginPage = (req, res) => {
    res.render('login.ejs')
}

const checkLogin = async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await checkAccount(username, password);
        if (user.length > 0) {
            req.session.loggedin = true;
            res.render('home.ejs', {user: req.session.user = user[0]})
        } else {
            return res.status(401).json({ message: "Invalid username or password" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
}

const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) res.redirect('/500');
        res.redirect('/login');
    })
}

module.exports = {
    getLoginPage,checkLogin,logout
}