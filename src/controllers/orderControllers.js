import {getAllOrder} from '../modals/order.modal'

const getOrdersPage = async (req, res) => {
    const orders = await getAllOrder()
    res.render('orders.ejs', {data: orders, user_session: req.session.user})
}

const postCreateOrder = async (req, res) => {
    const {idCustomer, idPayment, products} = req.body
    console.log(idCustomer, idPayment, products)
}

module.exports = {
    getOrdersPage,postCreateOrder
}