import {getAllCustomer} from '../modals/customer.modal'

const getHomePage = (req, res) => {
    res.render('home.ejs')
}

const getCustomersPage = async (req, res) => {
    const customers = await getAllCustomer()
    res.render('customer.ejs', {data: customers})
}

module.exports = {
    getHomePage,getCustomersPage
}