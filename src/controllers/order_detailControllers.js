import {getDetailOrderById} from '../modals/order_detail.modal'

const getDetailOrderPage = async (req, res) => {
    const id = req.params.id
    const result = await getDetailOrderById(id)
    res.render('order-detail.ejs', {datas: result, user_session: req.session.user})
}

module.exports = {
    getDetailOrderPage
}