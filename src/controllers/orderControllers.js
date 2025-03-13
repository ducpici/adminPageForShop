import {getAllOrder,createOrder,insertOrderDetail,updateStatus} from '../modals/order.modal'
import {getProductById,updateQuantityProduct} from '../modals/product.modal'

const getOrdersPage = async (req, res) => {
    const orders = await getAllOrder()
    res.render('orders.ejs', {data: orders, user_session: req.session.user})
}

const postCreateOrder = async (req, res) => {
    const {idCustomer, idPayment, products} = req.body
    const user_id = req.session.user.user_id
    const now = new Date()
    console.log('payment:' ,idPayment)
    let totalAmount = products.reduce((sum, item) => sum + item.price * item.quantity, 0);
    var status
    if(idPayment==1 || idPayment==0 || idPayment==2){
        status = 1
    }else if(idPayment==3){
        status = 2
    }
    
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

const postUpdateStatus = async (req, res) => {
    const {order_id, idStatus} = req.body
    try {
        await updateStatus(idStatus, order_id)
        // res.redirect("/orders")      
        res.status(200).json({message: 'success'})
        
    } catch (error) {
        res.status(500).json({message: 'error'})
    }
    

}

module.exports = {
    getOrdersPage,postCreateOrder,postUpdateStatus
}