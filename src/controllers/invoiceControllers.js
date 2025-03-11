import {getAllCustomer} from '../modals/customer.modal'
import {getAllProduct} from '../modals/product.modal'

const getInvoicePage = async (req, res) => {
    const customers = await getAllCustomer() 
    const products = await getAllProduct() 
    res.render('invoice.ejs',{customers: customers, products:products, user_session: req.session.user})
}

module.exports= {
    getInvoicePage
}