import {getAllOrder} from '../modals/order.modal'

const getOrdersPage = async (req, res) => {
    const orders = await getAllOrder()
    res.render('orders.ejs', {data: orders})
}

module.exports = {
    getOrdersPage
}