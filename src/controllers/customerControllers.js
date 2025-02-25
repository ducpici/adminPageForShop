import {createCustomer,getCustomerById} from '../modals/customer.modal'


const getAddCustomerPage = (req, res) => {
    res.render('addCustomer.ejs')
}

const getEditCustomerPage = async (req, res) => {
    const id = req.params.id
    const result = await getCustomerById(id)
    res.render('editCustomer.ejs', {customer: result[0]})
}


const postCreateCustomer = async (req, res) => {
    let fullName = req.body.fullName
    let dateOfBirth = req.body.dateOfBirth
    let sex = req.body.sex
    let address = req.body.address
    let email = req.body.email
    let phone = req.body.phone
    await createCustomer(fullName,dateOfBirth,sex,address,email,phone)
    res.redirect('/customers')
}

module.exports = {
    getAddCustomerPage,postCreateCustomer,
    getEditCustomerPage
}
