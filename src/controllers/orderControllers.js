import {getAllOrder,createOrder,insertOrderDetail} from '../modals/order.modal'
import {getProductById,updateQuantityProduct} from '../modals/product.modal'

const getOrdersPage = async (req, res) => {
    const orders = await getAllOrder()
    res.render('orders.ejs', {data: orders, user_session: req.session.user})
}

const postCreateOrder = async (req, res) => {
    const {idCustomer, idPayment, products} = req.body
    const user_id = req.session.user.user_id
    const now = new Date()
    let totalAmount = products.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const status = 1
    try{
        const order_id = await createOrder(idCustomer, now, idPayment, totalAmount, status, user_id)
        for(const product of products){
            await insertOrderDetail(order_id.insertId, product.productId, product.quantity);
        }

        products.forEach((product) => {
            updateQuantity(product.productId, product.quantity)
        });

        res.json({ success: true, message: "Hóa đơn đã lưu!" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Lỗi server!" });
    }

}

const updateQuantity = async (product_id, quantity) => {
    const dataProduct = await getProductById(product_id)
    const qtyProduct = dataProduct[0].quantity
    const newQuantity = qtyProduct - quantity
    await updateQuantityProduct(newQuantity, product_id)
}

module.exports = {
    getOrdersPage,postCreateOrder
}