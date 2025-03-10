import {createCustomer,getCustomerById,deleteCustomer,updateCustomer} from '../modals/customer.modal'

const getAddCustomerPage = (req, res) => {
    res.render('addCustomer.ejs', { user_session: req.session.user })
}

const getEditCustomerPage = async (req, res) => {
    const id = req.params.id
    const result = await getCustomerById(id)
    res.render('editCustomer.ejs', {customer: result[0], user_session: req.session.user})
}

const postCreateCustomer = async (req, res) => {
    const { fullName, dateOfBirth, sex, address, email, phone } = req.body;

    try {
        await createCustomer(fullName, dateOfBirth, sex, address, email, phone);
        res.redirect("/customers");
    } catch (error) {
        res.status(500).send("Lỗi khi tạo khách hàng: " + error.message);
    }
}

const postUpdateCustomer = async (req, res) => {
    const { fullName, dateOfBirth, sex, address, email, phone } = req.body;
    const id = req.params.id

    try {
        await updateCustomer(fullName, dateOfBirth, sex, address, email, phone, id);
        res.redirect("/customers");
    } catch (error) {
        res.status(500).send("Lỗi khi sửa khách hàng: " + error.message);
    }
}

const postDeleteCustomer = async (req, res) => {
    const id = req.params.id
    await deleteCustomer(id)
    res.redirect('/customers')
}

module.exports = {
    getAddCustomerPage,postCreateCustomer,postUpdateCustomer,
    getEditCustomerPage,postDeleteCustomer
}
