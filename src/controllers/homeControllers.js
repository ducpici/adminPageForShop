import {getAllCustomer} from '../modals/customer.modal'

const getHomePage = (req, res) => {
    res.render('home.ejs',{user_session: req.session.user})
}

const getCustomersPage = async (req, res) => {
    const customers = await getAllCustomer()
    res.render('customer.ejs', {data: customers, user_session: req.session.user})
}

module.exports = {
    getHomePage,getCustomersPage
}