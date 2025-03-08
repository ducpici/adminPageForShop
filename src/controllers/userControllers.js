import {getAllUser} from '../modals/user.modal'

const getUsersPage = async (req, res) => {
    const users = await getAllUser()
    res.render('user.ejs', {data: users})
}

const getAddUserPage = (req, res) => {
    res.render('addUser.ejs')
}

module.exports = {
    getUsersPage,getAddUserPage
}